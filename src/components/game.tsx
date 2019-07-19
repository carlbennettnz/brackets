import React from 'react'

const HGUTTER = 0
const WIDTH = 160
const HEIGHT = 80
const PLAYER_HEIGHT = 20

export default (props: any) => {
  const gameStyle = {
    position: 'absolute',
    top:
      // table layout / top of each game in a given col
      (props.id.m - 1) * HEIGHT * 2 ** (props.id.r - 1) +
      //shifts for the next table / loser brackets
      (props.id.s - 1) * 420 +
      // offset for entire coloumn
      HEIGHT / 8 / 2 ** -props.id.r,

    left: props.id.r * (WIDTH + HGUTTER) - (WIDTH * 3) / 4,
    width: WIDTH,
    height: HEIGHT
  }

  const teamStyle = {
    borderBottom: '1px solid #ccc',
    paddingLeft: 40,
    lineHeight: `${PLAYER_HEIGHT}px`,
    borderTop: '1px solid #eee',
    borderRight: '1px solid #eee',
    borderLeft: '1px solid #eee'
  }

  const height = (r: number) => (r === 1 ? 40 : height(r - 1) + PLAYER_HEIGHT)

  const secondTeamStyle = {
    borderRight: '1px solid #ccc'
    // paddingTop: height(props.id.r) - 20
  }

  return (
    <div style={gameStyle}>
      {/* <div className="game" style={{ color: '#999', fontSize: 11 }}>
        {JSON.stringify(props.id)}
      </div> */}
      <div style={teamStyle}>{props.team1}</div>
      <div style={{ ...teamStyle, ...secondTeamStyle }}>{props.team2}</div>
    </div>
  )
}
