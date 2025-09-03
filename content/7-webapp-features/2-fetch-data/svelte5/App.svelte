<script>
  import useFetchUsers from "./useFetchUsers.svelte.js";

  const response = useFetchUsers();
  const {isLoading, error, users} = $derived(response);
  // const {isLoading, error, users} = $derived.by(useFetchUsers); // one line alternative; see https://github.com/sveltejs/svelte/issues/11441
</script>

{#if isLoading}
  <p>Fetching users...</p>
{:else if error}
  <p>An error occurred while fetching users</p>
{:else if users}
  <ul>
    {#each users as user}
      <li>
        <img src={user.picture.thumbnail} alt="user" />
        <p>
          {user.name.first}
          {user.name.last}
        </p>
      </li>
    {/each}
  </ul>
{/if}
