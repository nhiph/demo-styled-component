import React, {Fragment} from 'react'

export default function XucXac(props) {

    const {xucXacItem} = props;

    return (
        <Fragment>
            <div className="scene">
                <div className="cube">
                    <img className="cube__face front" style={{width: 70}} src={xucXacItem.hinhAnh} />
                    <img className="cube__face right" style={{width: 70}} src="./images/baitapgamebocua/bau.png" />
                    <img className="cube__face back" style={{width: 70}} src="./images/baitapgamebocua/cua.png" />
                    <img className="cube__face left" style={{width: 70}} src="./images/baitapgamebocua/ga.png" />
                    <img className="cube__face top" style={{width: 70}} src="./images/baitapgamebocua/ca.png" />
                    <img className="cube__face bottom" style={{width: 70}} src="./images/baitapgamebocua/tom.png" />
                </div>
            </div>
        </Fragment>
    )
}
