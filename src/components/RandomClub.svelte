<script>
  import ClubView from './ClubView.svelte'
  import Button from './Button.svelte'
  import { randomClub, defaultClub } from '@/utils'

  let club = defaultClub

  let hidden = {
    random: false,
    next: true
  }

  const handleRandomClub = (event) => {
    club = randomClub(club.path)

    event.target.previousElementSibling.classList.remove('aparecer')

    setTimeout(() => {
      event.target.previousElementSibling.classList.add('aparecer')
    }, 0)

    hidden.random = true
    hidden.next = false
  }

  const handleNextClub = (event) => {
    hidden.next = true
    hidden.random = false
    club = defaultClub
  }
</script>

<main>
  <ClubView club={club.path} />
  <Button action={handleRandomClub} hidden={hidden.random}>Random</Button>
  <Button action={handleNextClub} hidden={hidden.next}>Next</Button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
</style>
