import { supabase } from "../api/supabaseClient"

const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'email@example.com',
    password: 'motdepasse123'
  })

  if (error) console.error("Erreur connexion:", error)
  else console.log("Connecté !", data)
}

// Example usage in a simple component
export default function LoginForm() {
  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}
