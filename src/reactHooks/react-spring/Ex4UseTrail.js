import React, { useState } from 'react'
import { animated, useTrail } from 'react-spring';

const item = [
    { title: 'FrontendOnline', content: 'Cybersoft' },
    { title: 'FrontendOffline', content: 'Cybersoft' },
    { title: 'FrontendTuxa', content: 'Cybersoft' }
]

export default function Ex4UseTrail() {
    let [status, setStatus] = useState(true);

    const propsUsetrail = useTrail(item.length, {
        opacity: status ? 1 : 0,
        x: status ? 0 : 20,
        height: status ? 110 : 0,
        color: 'red',
        from: { opacity: 0, x: 20, height: 0, color: 'green' },
        config: {duration: 2000}
    })

    return (
        <div>
            <button className="btn btn-success"
                onClick={
                    () => setStatus(!status)
                }>Set status</button>
            {propsUsetrail.map((propsUseSpring, index) => {
                return <animated.h1 style={propsUseSpring} key={index}>
                    {item[index].title}
                </animated.h1>
            })}
        </div>
    )
}
