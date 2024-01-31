import React from 'react'

function MouseHoverCounter(props) {
    // const [count, setCount] = useState(0);

    // let incrementCount = () => {
    //     setCount((prevCount) => {
    //         return prevCount + 1;
    //     })
    // }
    const {count, incrementCount } = props
  return (
    <div>
        <h2 onMouseOver={incrementCount}>Clicked {count} times</h2>
    </div>
  )
}

export default MouseHoverCounter