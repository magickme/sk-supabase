<script>
    import { supabase } from "../supabase.js"
    import Auth from "../components/Auth.svelte"
    import Navbar from "../components/Navbar.svelte"
    import {user} from "../stores/authStore.js"
    import "../app.css";
    import { loadTodos } from "../stores/todoStore.js";
    
    console.log(supabase.auth.user())
    user.set(supabase.auth.user())
    supabase.auth.onAuthStateChange((__, session) => {
      user.set(session?.user)
      if(session?.user){
        loadTodos()
      }
    })
    console.log(supabase);
  </script>
  
  <div class="container mx-auto my-6 max-w-lg">
    {#if $user}
      <Navbar />
      <slot/>
    {:else}
      <Auth /> 
    {/if}
  </div>