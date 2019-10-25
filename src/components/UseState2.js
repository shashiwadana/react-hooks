import React,{useState} from 'react'

function UseState2() {
    const [name,setName] = useState({firstName:"",lastName:""})
    return (
        <div>
           <input
           type="text"
           value={name.firstName}
           onChange={e=>setName({...name,firstName:e.target.value})}
           ></input> 
            <input
           type="text"
           value={name.lastName}
           onChange={e=>setName({...name,lastName:e.target.value})}
           ></input> 
           <h6>first name:{name.firstName}</h6>
           <h6>last name:{name.lastName}</h6>
           <h6>{JSON.stringify(name)}</h6>
        </div>
    )
}

export default UseState2
