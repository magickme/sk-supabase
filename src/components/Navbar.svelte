<script>
    import {supabase} from "../supabase.js"
    const logout = () => {
        console.log("Log out")
        supabase.auth.signOut()
    }
</script>
<div class="my-4 flex justify-end">
    <button on:click={logout} class="shadow-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
        Log Out
    </button>
</div>