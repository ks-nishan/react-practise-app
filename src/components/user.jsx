import React from 'react'

function User(props) {
  return (
    <div>
        {props.render(true)}
    </div>
  )
}

export default User