'use client';

import { FormEvent, useState } from 'react';
import { submitCareerForm, submitContactForm } from '@/lib/formsApi';

type ContactLabels = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  submit: string;
  success: string;
  error: string;
  sending: string;
};

type CareerLabels = ContactLabels & {
  role: string;
  note: string;
  cv: string;
  cvHint: string;
};

export function ContactForm({ labels, defaultSubject }: { labels: ContactLabels; defaultSubject?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus('sending');
    setError('');
    try {
      await submitContactForm({
        type: 'CONTACT',
        name: String(fd.get('name') || ''),
        email: String(fd.get('email') || ''),
        phone: String(fd.get('phone') || '') || undefined,
        company: String(fd.get('company') || '') || undefined,
        subject: String(fd.get('subject') || '') || defaultSubject,
        message: String(fd.get('message') || ''),
      });
      setStatus('ok');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('err');
      setError(err instanceof Error ? err.message : labels.error);
    }
  }

  return (
    <form className="site-form" onSubmit={onSubmit}>
      <div className="site-form-grid">
        <label>
          <span>{labels.name}</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>{labels.email}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>{labels.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>{labels.company}</span>
          <input name="company" autoComplete="organization" />
        </label>
        <label className="site-form-full">
          <span>{labels.subject}</span>
          <input name="subject" defaultValue={defaultSubject} />
        </label>
        <label className="site-form-full">
          <span>{labels.message}</span>
          <textarea name="message" rows={5} required />
        </label>
      </div>
      <div className="site-form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? labels.sending : labels.submit}
        </button>
        {status === 'ok' && <p className="site-form-success">{labels.success}</p>}
        {status === 'err' && <p className="site-form-error">{error || labels.error}</p>}
      </div>
    </form>
  );
}

export function CareerForm({ labels }: { labels: CareerLabels }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const cv = fd.get('cv');
    if (!(cv instanceof File) || !cv.name.toLowerCase().endsWith('.pdf')) {
      setStatus('err');
      setError(labels.cvHint);
      return;
    }
    setStatus('sending');
    setError('');
    try {
      await submitCareerForm({
        type: 'CAREER',
        name: String(fd.get('name') || ''),
        email: String(fd.get('email') || ''),
        phone: String(fd.get('phone') || '') || undefined,
        subject: String(fd.get('role') || ''),
        message: String(fd.get('note') || '') || undefined,
        cv,
      });
      setStatus('ok');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('err');
      setError(err instanceof Error ? err.message : labels.error);
    }
  }

  return (
    <form className="site-form" onSubmit={onSubmit}>
      <div className="site-form-grid">
        <label>
          <span>{labels.name}</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>{labels.email}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>{labels.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>{labels.role}</span>
          <input name="role" required />
        </label>
        <label className="site-form-full">
          <span>{labels.note}</span>
          <textarea name="note" rows={4} />
        </label>
        <label className="site-form-full">
          <span>{labels.cv}</span>
          <input name="cv" type="file" accept="application/pdf,.pdf" required />
          <small>{labels.cvHint}</small>
        </label>
      </div>
      <div className="site-form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? labels.sending : labels.submit}
        </button>
        {status === 'ok' && <p className="site-form-success">{labels.success}</p>}
        {status === 'err' && <p className="site-form-error">{error || labels.error}</p>}
      </div>
    </form>
  );
}
