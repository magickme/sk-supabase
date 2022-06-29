<script>
    import {supabase} from "../supabase.js";
    let loading = false;
    let email;
    const handleLogin = async () => {
        try {
            console.log(email)
            const {error} = await supabase.auth.signIn({email})
            if(error) throw error
            alert('Check your email for the login link!')
        } catch(err) {
            console.error(err)
            alert(error.err)
            alert(error.error_description || error.message)
        } finally {
            loading = false
        }
        console.log(email);
        await supabase.auth.signIn(email);
    }
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
    Log In
</h1>
<p class="text-center mt-2">Sign in via magic link with your email below.</p>

<form on:submit|preventDefault={handleLogin}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold mb-2 text-grey-800" for="email">E-Mail</label>
        <input name="email" class="appearance-non shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" type="email"
        placeholder="Your email"
        bind:value={email}>
        <button
            type="submit"
            class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
        Log In
        </button>
    </div>
</form>