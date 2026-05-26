"use client";

import { getSupabaseBrowserClient } from "./client";

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  work_description: string;
}

export interface CustomSidekickRequest {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  process_description: string;
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

function normaliseError(message: string): string {
  // Hide Supabase internals from the UI — show something friendly
  if (/check.*constraint|policy/i.test(message)) {
    return "Please double-check your inputs and try again.";
  }
  if (/network|fetch/i.test(message)) {
    return "Network problem — please try again in a moment.";
  }
  return "Something went wrong on our side. Please try again.";
}

export async function submitContact(
  payload: ContactSubmission
): Promise<SubmitResult> {
  const supabase = getSupabaseBrowserClient();
  const { error } = await supabase.from("contact_submissions").insert({
    name: payload.name.trim(),
    email: payload.email.trim(),
    company: payload.company?.trim() || null,
    work_description: payload.work_description.trim(),
  });

  if (error) {
    return { ok: false, error: normaliseError(error.message) };
  }
  return { ok: true };
}

export async function submitCustomSidekick(
  payload: CustomSidekickRequest
): Promise<SubmitResult> {
  const supabase = getSupabaseBrowserClient();
  const { error } = await supabase.from("custom_sidekick_requests").insert({
    name: payload.name.trim(),
    email: payload.email.trim(),
    company: payload.company?.trim() || null,
    budget: payload.budget?.trim() || null,
    process_description: payload.process_description.trim(),
  });

  if (error) {
    return { ok: false, error: normaliseError(error.message) };
  }
  return { ok: true };
}
