import React from 'react';
import {useSpring, animated} from 'react-spring'


export default function DemoSpring(props) {
    const propsText = useSpring({opacity: 1, color_text: "red",from: {opacity: 0, color_text: "green"}, config: {duration: 1000}})
    const propsNumber = useSpring({number: 100, color_text: "red",from: {number: 10}, config: {duration: 1000}})
    const propsScroll = useSpring({ scroll: 100, from: { scroll: 0 } })

    return <div>
    <h1>Change Color Text</h1>
        <animated.div style={{color: propsText.color_text}}>I will fade in</animated.div>
        <hr/>
        <h1>Change number</h1>
        <animated.h1>
            {propsNumber.number}
        </animated.h1>
        <animated.p style={{fontSize: propsNumber.number}}>
            Phung Huynh Nhi
        </animated.p>
        <h1>Scroll</h1>
        <animated.div scrollTop={propsScroll.scroll}>This is scroll</animated.div>
    </div>
}
