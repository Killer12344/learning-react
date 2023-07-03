import { useEffect, useState } from 'react'

function ComponentOne() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Now ', count);
    },[count]);


    useEffect(()=>{
        setTimeout(() => {
            setCount(pre=> pre+10);
        }, 5000);
    },[]);

  return (
    <div>
        ComponentOne {count}
        <div className='block'>
            <button onClick={()=>setCount(pre=>pre+1)}> Add </button>
        </div>
    </div>
  )
}

export default ComponentOne