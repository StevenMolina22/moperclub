import { createClient } from "@supabase/supabase-js";
import { API_KEY } from "@/utils/envs";

const supabaseUrl = "https://yqkryujtkhqfqkznyaxe.supabase.co";
const supabaseKey = API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey || "");
