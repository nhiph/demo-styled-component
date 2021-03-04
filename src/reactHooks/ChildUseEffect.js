import React, {useState, useEffect} from 'react'

export default function ChildUseEffect() {

    let [number, setNumber] = useState(1);

    console.log('render childUseEffect')

    useEffect(() => {
        // Viet cho didUpdate
        console.log('didUpdate') //chay lan dau hoa cchay khi number tham so 2 thay doi

        // Ham return nay k tu kich hoat, chi khi component mat di moi kich hoat return
        return () => {
            console.log('willUnMount')
        }
    }, [number])

    return (
        <div>
            <textarea></textarea><br />
            <button className="btn btn-success">Submit</button>
        </div>
    )
}
