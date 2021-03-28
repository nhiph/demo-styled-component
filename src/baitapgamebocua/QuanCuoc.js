import React from 'react'
import {useDispatch} from 'react-redux'
import {useSpring, useSprings, animated} from 'react-spring';

export default function QuanCuoc(props) {

    const propsUseSpring = useSpring({
        to:{scale: 1}, from: {scale: 0}
    })

    const dispatch = useDispatch()

    const {quanCuoc} = props;

    return (
        <div className="mt-1">
            <img src={quanCuoc.hinhAnh} style={{width: '150px', height: '150px'}}/><br/>
            <div className="text-center bg-success py-2 my-1" style={{width: '150px', borderRadius:5}}>
                <animated.button 
                    className="btn btn-danger mx-2 text-center py-0" 
                    style={{fontSize: 15, transform: propsUseSpring.scale.interpolate(scale => `scale(${scale})`)}}
                    onClick={() => {
                        dispatch({
                            type: 'DAT_CUOC_BAU_CUA',
                            quanCuoc,
                            tangGiam: true
                        })
                    }}>+</animated.button>
                <span className="my-2" style={{color: 'yellow', fontSize: 20}}>
                    {quanCuoc.diemCuoc}
                </span>
                <animated.button 
                    className="btn btn-danger mx-2 text-center py-0" style={{fontSize: 15}}
                    onClick={() => {
                        dispatch({
                            type: 'DAT_CUOC_BAU_CUA',
                            quanCuoc,
                            tangGiam: false
                        })
                    }}>-</animated.button>
            </div>
        </div>
    )
}
