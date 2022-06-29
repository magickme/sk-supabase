<script>
    import TodoForm from '../components/TodoForm.svelte';
    import Todo from '../components/Todo.svelte';
    import {todos} from '../stores/todoStore.js';
</script>

<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Bill of Arms</h1>
    <TodoForm/>
    {#each $todos as todo (todo.id)}
        <Todo todo={todo} />
    {/each}
</main>