import clubes from '@/data/clubes'
import Club from './Club'

export const randomNumber = () => Math.floor(Math.random() * clubes.length)

export const randomClub = (previous) => {
  const random = randomNumber()

  return previous === clubes[random]
    ? randomClub(previous)
    : new Club(clubes[random])
}
