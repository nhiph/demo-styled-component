import React from 'react'
import XucXac from './XucXac'
import {useSelector, useDispatch} from 'react-redux';


export default function DanhSachXucXac(props) {

    const dispatch = useDispatch()

    const mangXucXac = useSelector(state => state.BaiTapGameBauCuaReducer.mangXucXac);

    return (
        <div className="mt-5">
            <div className="bg-white" style={{width: 300, height: 300, borderRadius: '50%'}}>
                <div className="row">
                    <div className="col-12 text-center py-0 my-0" style={{marginLeft: 80}}>
                        <XucXac xucXacItem={mangXucXac[0]}/>

                        {/* <img style={{width: 70}} src="./images/baitapgamebocua/bau.png" /> */}
                    </div>
                    <div className="ml-4 col-5 text-center mt-0">
                        <XucXac xucXacItem={mangXucXac[1]}/>

                        {/* <img style={{width: 70}} src="./images/baitapgamebocua/bau.png" /> */}
                    </div>
                    <div className="col-5 text-center mt-0">
                        <XucXac xucXacItem={mangXucXac[2]}/>
                        {/* <img style={{width: 70}} src="./images/baitapgamebocua/bau.png" /> */}
                    </div>
                </div>
                <div className="text-center" style={{marginTop: '25%'}}>
                    <button 
                        className="btn btn-success" style={{fontSize: 25}}
                        onClick={()=>{
                            dispatch({
                                type: 'PLAY_GAME_BAU_CUA'
                            })
                        }}
                        >Xốc</button>
                </div>
            </div>
        </div>
    )
}
