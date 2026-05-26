// Minimal hand-typed Database type covering only what the public site writes.
// Regenerate from Supabase if the schema grows: `supabase gen types typescript`.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  __InternalSupabase: {
    PostgrestVersion: "13.0.4";
  };
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          company: string | null;
          work_description: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          company?: string | null;
          work_description: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          company?: string | null;
          work_description?: string;
        };
        Relationships: [];
      };
      custom_sidekick_requests: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          company: string | null;
          budget: string | null;
          process_description: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          company?: string | null;
          budget?: string | null;
          process_description: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          company?: string | null;
          budget?: string | null;
          process_description?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
