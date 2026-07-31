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
  const base = process.env.NEXT_PUBLIC_FORMS_API_URL ?? 'http://185.8.131.94:8091/api';
  return base.replace(/\/$/, '');
}

async function handshake(): Promise<string> {
  const res = await fetch(`${apiBase()}/v1/public/forms/handshake`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ siteId: SITE_ID }),
  });
  const json = (await res.json()) as ApiEnvelope<HandshakeResponse>;
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
  const json = (await res.json()) as ApiEnvelope<unknown>;
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
  body.append('type', payload.type);
  body.append('name', payload.name);
  body.append('email', payload.email);
  if (payload.phone) body.append('phone', payload.phone);
  body.append('subject', payload.subject);
  if (payload.message) body.append('message', payload.message);
  body.append('cv', payload.cv);

  const res = await fetch(`${apiBase()}/v1/public/forms/submit`, {
    method: 'POST',
    body,
  });
  const json = (await res.json()) as ApiEnvelope<unknown>;
  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Submit failed');
  }
}
