import React from 'react'
import Duel from 'duel'

import Game from './game'

const teams = [
  'Carl & Michael',
  'Jay & Mohsen',
  'Jack & Liga',
  'Domi & Una',
  'Griff & Will',
  'Nalin & Ben',
  'Megan & Ben',
  'Finn & Henry'
]

const comp = new Duel(teams.length, { last: Duel.LB })

for (const match of comp.matches.slice(0, -1)) {
  comp.score(match.id, [1, 0])
}

export default () =>
  comp.matches
    // .filter(match => match.id.s === 1 && match.id.r === 1)
    .map(match => (
      <Game
        key={match.id}
        id={match.id}
        team1={teams[match.p[0] - 1]}
        team2={teams[match.p[1] - 1]}
      />
    ))
