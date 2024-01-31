import React from 'react'

function ClickCounter(props) {
    // const [count, setCount] = useState(0);

    // let incrementCount = () => {
    //     setCount((prevCount) => {
    //         return prevCount + 1;
    //     })
    // }
    const {count, incrementCount } = props
  return (
    <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  )
}

export default ClickCounter