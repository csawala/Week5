'use strict'

class Library {
  constructor(name, creator) {
    this.name = name
    this.creator = creator
    this.playlists = []
    this.tracks = []
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist)
  }

  addTrack(artist, title, rating, length, playlist) {
    let newTrack = new Track(artist, title, rating, length)
    this.tracks.push(newTrack)
  }
}

class Playlist {
  constructor(name, tracks) {
    this.name = name
    this.tracks = tracks
    this.rating = this.overallRating()
    this.duration = this.totalDuration()
  }

  addTrack(track) {
    this.tracks.push(track)
  }

  overallRating() {
    return (this.tracks.reduce((a, b) => a += b.rating, 0) / this.tracks.length)
  }

  totalDuration() {
    return this.tracks.reduce((a, b) => a += b.duration, 0)
  }
}

class Track {
  constructor(artist, title, rating, length) {
    this.artist = artist
    this.title = title
    this.rating = rating
    this.duration = length
  }
}


let muppets = new Library ('library', 'Jim Henson')

muppets.addTrack('The Muppets', 'Bohemian Rhapsody', 5, 268)
muppets.addTrack('The Muppets', 'Habanera', 4.5, 97)
muppets.addTrack('The Muppets', 'Mahna Mahna', 5, 140)
muppets.addTrack('The Muppets', 'Ringing of the Bells', 3.5, 75)

let p01 = new Playlist ('The Muppets', muppets.tracks)
muppets.addPlaylist(p01)

console.log(muppets)
console.log(p01)





