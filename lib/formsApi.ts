export type FormType = 'CONTACT' | 'CAREER';

export type ContactFormPayload = {
  type: 'CONTACT';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
};

export type CareerFormPayload = {
  type: 'CAREER';
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message?: string;
  cv: File;
};

type HandshakeResponse = {
  token: string;
  expiresAt: string;
  siteId: string;
};

type ApiEnvelope<T> = {
  data: T;
  message: string;
  success: boolean;
};

const SITE_ID = 'aiport';

function apiBase(): string {
  // Prefer same-origin `/api` on Vercel (rewritten to FORMS_BACKEND_URL).
  // Direct URL only for local static/dev or when an HTTPS API domain is set.
  const base = process.env.NEXT_PUBLIC_FORMS_API_URL ?? '/api';
  return base.replace(/\/$/, '');
}

async function parseEnvelope<T>(res: Response): Promise<ApiEnvelope<T>> {
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(
      res.status === 404
        ? 'Forms API proxy not configured (404). Redeploy with vercel.json rewrites.'
        : `Forms API returned non-JSON (HTTP ${res.status}).`,
    );
  }
  return (await res.json()) as ApiEnvelope<T>;
}

async function handshake(): Promise<string> {
  const res = await fetch(`${apiBase()}/v1/public/forms/handshake`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ siteId: SITE_ID }),
  });
  const json = await parseEnvelope<HandshakeResponse>(res);
  if (!res.ok || !json.success || !json.data?.token) {
    throw new Error(json.message || 'Handshake failed');
  }
  return json.data.token;
}

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  const token = await handshake();
  const body = new FormData();
  body.append('token', token);
  body.append('type', payload.type);
  body.append('name', payload.name);
  body.append('email', payload.email);
  if (payload.phone) body.append('phone', payload.phone);
  if (payload.company) body.append('company', payload.company);
  if (payload.subject) body.append('subject', payload.subject);
  body.append('message', payload.message);

  const res = await fetch(`${apiBase()}/v1/public/forms/submit`, {
    method: 'POST',
    body,
  });
  const json = await parseEnvelope<unknown>(res);
  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Submit failed');
  }
}

export async function submitCareerForm(payload: CareerFormPayload): Promise<void> {
  if (!payload.cv || payload.cv.type !== 'application/pdf') {
    throw new Error('Only PDF files are accepted');
  }
  const token = await handshake();
  const body = new FormData();
  body.append('token', token);
  body.append('name', payload.name);
  body.append('type', payload.type);
  body.append('email', payload.email);
  if (payload.phone) body.append('phone', payload.phone);
  body.append('subject', payload.subject);
  if (payload.message) body.append('message', payload.message);
  body.append('cv', payload.cv);

  const res = await fetch(`${apiBase()}/v1/public/forms/submit`, {
    method: 'POST',
    body,
  });
  const json = await parseEnvelope<unknown>(res);
  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Submit failed');
  }
}
