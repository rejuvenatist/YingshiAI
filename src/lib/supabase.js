
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error(
    'Supabase 环境变量未配置：请确保配置了 VITE_SUPABASE_URL 和 VITE_SUPABASE_ANON_KEY。'
  )
}
export const supabase = createClient(supabaseUrl, supabaseKey)
