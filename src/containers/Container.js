import React from 'react'

const Container = ({ children }) =>
  <div
    style={{
      width: 1200,
      margin: '40px auto',
      maxWidth: '100%',

    }}
  >
    {children}
  </div>

export default Container