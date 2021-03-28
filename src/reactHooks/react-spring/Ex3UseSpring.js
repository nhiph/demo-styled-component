import React from 'react'
import { useSprings, animated } from 'react-spring'

export default function Ex3UseSpring() {

    // TRang thai cuoi cung cac useSpring se di toi
    let arrOpacity = [
                        {opacity: 0.1, color: "red", content: "Fullstack", num: 100}, 
                        {opacity: 0.3, color: "green", content: "Frontend", num: 200}, 
                        {opacity: 0.5, color: "blue", content: "Backend", num: 300}, 
                        {opacity: 0.7, color: "orange", content: "Cyberlearn", num: 400}, 
                        {opacity: 1, color: "black", content: "Cybersoft", num: 500}
                    ]

    let propsAnimationUseSpring = useSprings(arrOpacity.length,  arrOpacity.map(item => 
        { return { 
                    opacity: item.opacity, //Trang thai dich khi duoc lap qua map
                    color: item.color,
                    content: item.content,
                    num: item.num,
                    from: {
                        opacity: 0,
                        color: "black",
                        content: item.content,
                        num: 0,

                    },
                    config: {
                        duration: 3000
                    }
                 }} ));

    let renderContent = (propsAnim) => {
        let resultAnimComponent = [
            <animated.h1 key={1} style={propsAnim} >
                {propsAnim.num}
                </animated.h1>,

                <animated.span key={2} style={propsAnim} >
                {propsAnim.content}
                </animated.span>
        ];
        return resultAnimComponent;

        /* Cach 2:
        let resultAnimComponent = [];
        for(let key in propsAnim) {
            if(key === 'content' || key = 'num'){
                resultAnimation.push(
                    <animated.h1 style={propsAnim} >
                    {propsAnim[key]}
                    </animated.h1>
                )
            }
        }
        */

    }

    return (
        <div>
            {propsAnimationUseSpring.map((propsAnim, index) => {
                return <div>
                {/* <animated.span key={index} style={propsAnim} >
                {propsAnim.num}
                </animated.span>

                <animated.span key={index} style={propsAnim} >
                {propsAnim.content}
                </animated.span> */}
                {renderContent(propsAnim)}

                </div> 
                
            })}
        </div>
    )
}
