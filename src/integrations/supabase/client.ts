import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://omikgadqizchvxoygewn.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9taWtnYWRxaXpjaHZ4b3lnZXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNzAxMDksImV4cCI6MjA2ODk0NjEwOX0.6Qxd9kJ93op_8cfrzlqDzkNLjKCNLoVMcFonPKVKkmU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)