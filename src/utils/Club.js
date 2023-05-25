export default class Club {
  constructor(path) {
    this.path = path
    this.ligue = path.split('/')[2]
    this.club = path.split('/')[3].replace('.webp', '')
  }
}

export const defaultClub = {
  path: 'https://digitalhub.fifa.com/m/58223e0c1caa5674/webimage-FIFA-logo.png',
  name: 'FIFA'
}
