import {createClient} from "@supabase/supabase-js";


console.log(import.meta.env)
const token = import.meta.env.VITE_SUPABASE_KEY;
const databaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabase = createClient(databaseURL, token);
export const api = {
    get: (entity: string) => supabase.from(entity).select(),
};