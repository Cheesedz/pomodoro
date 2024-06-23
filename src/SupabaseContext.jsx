import React, { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';

const SupabaseContext = createContext(null);

export const SupabaseProvider = ({ children }) => {
  const supabase_url = import.meta.env.VITE_URL;
  const anon_key = import.meta.env.VITE_ANON_KEY;
  const supabase = createClient(supabase_url, anon_key);

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  return useContext(SupabaseContext);
};
