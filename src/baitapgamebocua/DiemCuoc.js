import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

export default function DiemCuoc() {

    const dispatch = useDispatch()

    const tongDiem = useSelector(state => state.BaiTapGameBauCuaReducer.tongThuong)

    return (
        <div>
            <h6 className="py-2 text-center text-success" style={{fontSize: 30}}>
                GAME BẦU CUA CYBERSOFT
            </h6>
            <div className="text-center">
                <span style={{fontSize: 22, border: 'none', borderRadius: 5}} className="p-3 text-white bg-dark">
                Tiền thưởng: 
                <span className="text-warning"> {tongDiem.toLocaleString()}$</span></span>
            </div>
            <div className="text-center mt-4">
                <button 
                    style={{fontSize: 20, border: 'none', borderRadius: 5}} className="p-2 text-white bg-success"
                    onClick={()=>{
                        dispatch({
                            type: 'CHOI_LAI'
                        })
                    }}>
                
                Chơi lại</button>
            </div>
        </div>
    )
}
