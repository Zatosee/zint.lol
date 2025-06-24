// src/api/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://acdrvvckhaaildlwgbqb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjZHJ2dmNraGFhaWxkbHdnYnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NjYzMzAsImV4cCI6MjA2NjM0MjMzMH0.dxX0c8TUJplgLlAqQaL40AWrpRlrvqJOdJ7UaLrD4LY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
