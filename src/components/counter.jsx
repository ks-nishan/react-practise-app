import React, {useState} from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);

    let incrementCount = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        })
    }
  return (
    <div>
        {props.render(count, incrementCount)}
    </div>
  )
}

export default Counter