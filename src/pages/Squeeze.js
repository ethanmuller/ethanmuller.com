import React from "react"

const Squeeze = (props) => (
    <div style={{
      width: '80%',
      maxWidth: '20em',
      margin: '3rem 0',
    }}>{props.children}</div>
)

export default Squeeze;
