<script>
  export let action
  export let hidden = false
</script>

<button on:click={action} class={hidden && 'hidden'}>
  <slot />
</button>

<style>
  button {
    padding: 1rem;
    width: 400px;
    border: none;
    font-size: 1rem;
  }

  .hidden {
    display: none;
  }
</style>
