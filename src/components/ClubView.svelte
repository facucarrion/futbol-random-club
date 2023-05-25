<script>
  export let club
</script>

<img src={club} alt={club.name} class="aparecer" />

<style>
  img {
    height: 300px;
    transform: scale(0.5);
  }

  .aparecer {
    animation: aparecer 1s ease 0s 1 normal forwards;
  }

  @keyframes aparecer {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }
</style>
