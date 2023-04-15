import React, { useState } from 'react'

export default function InputForm(props) {
    const [nameArray,setArray] = useState(['','']);
    

    const handleChangeFunc1 = (e) => {setArray(prevState => {
        return [...prevState,prevState[0] =  e.target.value]
    })}
    const handleChangeFunc2 = (e) => {setArray(prevState => {
        return [...prevState,prevState[1] =  e.target.value]
    })}
    const handleClick = () => {return(<h1>LOL</h1>)}
  return (
    
    <div>
        <div className="input-group flex-nowrap" data-bs-theme= {props.mode}>
        <span className={`input-group-text text-${props.mode === 'light'?'dark':'light'}`} id="addon-wrapping">First Name</span>
        <input type="text" className={`form-control text-${props.mode === 'light'?'dark':'light'}`}  aria-label="Username" aria-describedby="addon-wrapping" value={nameArray[0]} onChange={handleChangeFunc1}/>

        <div className="input-group flex-nowrap" data-bs-theme= {props.mode}>
        <span className={`input-group-text text-${props.mode === 'light'?'dark':'light'}`} id="addon-wrapping">Last Name</span>
        <input type="text" className={`form-control text-${props.mode === 'light'?'dark':'light'}`}  aria-label="Username" aria-describedby="addon-wrapping" value={nameArray[1]} onChange={handleChangeFunc2}/>

        <button className='btn btn-primary' onClick={handleClick}>Submit</button>
        </div>
        </div>
    </div>
    
  )
}
