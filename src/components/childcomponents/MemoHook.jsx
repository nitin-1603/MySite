

import { memo, useState } from 'react';
import { useMemo } from 'react';
import '../../css components/MemoHook.css';

const nums = new Array(100).fill(0).map((_, i) => {
    return {
        index: i,
        magicalNumber: i == 99
    }
})

const MemoHook = () => {
    const [number, setNumber] = useState(nums)
    const [count, setCount] = useState(0)
    const isMagicalNumber = useMemo(() => number.find((item) => item.magicalNumber == true), [])
    // const isMagicalNumber = number.find((item) => item.magicalNumber == true)
    return (
        <>
            <div className='magic'>
                <div className='sectionDiv'>
                    <div className='sectionDiv' >magical number is : {isMagicalNumber.index}</div>
                    <div className='sectionDiv'>{count}</div>
                    <div className='sectionDiv'>
                        <button onClick={() => setCount(count + 1)}>Count</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(MemoHook)