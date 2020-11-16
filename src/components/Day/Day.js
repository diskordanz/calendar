import React from 'react'

const Day = ({ date, weekDay, hidden }) =>
  <div>
    <div
      style={{
        margin: 10,
        border: '1px solid grey',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '30px 0',
        overflow: 'hidden',
        borderRadius: '3px',
        boxShadow: '2px 2px 0px #777',
        opacity: hidden ? '0' : '1'
      }}
    >
      <div
        style={{
          fontSize: 50,
          marginBottom: 30,
        }}
      >
        {date}
      </div>
      {weekDay}
    </div>
  </div>

export default Day
