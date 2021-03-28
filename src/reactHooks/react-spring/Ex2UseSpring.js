import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Ex2UseSpring(props) {
    let propsUseSpring = useSpring({
        color: [25, 100, 50],
        fontSize: 30,
        from: {
            color: [0, 0, 45],
            fontSize: 14
        },
        config: {
            duration: 1000,
            delay: 1
        }
    })

    // Tang do dai
    let propsAimation = useSpring({
        from: {
            width: 0,
            height: 0,
            fontWeight: 300
        },
        to: async (next, cancel) => {
            await next({ width: "100%", height: "100%", fontWeight: 'bold' })
            await next({ width: "0%", height: "0%", fontWeight: 'red' })
            await next({ width: "50%", height: "50%", fontWeight: 'normal' })
        },
        config: { duration: 5000 }
    })

    return (
        <div>
            <animated.div style={{
                color: propsUseSpring.color.interpolate((r, g, b) => { return `rgb(${r},${g},${b})` }),
                fontSize: propsUseSpring.fontSize
            }}>
                Hello CyberSoft
            </animated.div>
            <hr />
            <animated.div style={{ propsAimation }}>
                <h1>Phung Huynh Nhi</h1>
                <p>FRONT END DEVELOPER</p>
            </animated.div>
        </div>

    )
}
