//  import { useState } from "react";
//  import './card.css'
//    const Card=(Props)=>
// {
//     const greeting='welcome to anjac';
//     const [name,setName]=useState('sivakasi')
//     const updateName=(value)=>{setName(value)}
//     return(
//         <>
//      I am gowsi from  {name} {Props.name} 
//      <button onClick={()=> setName('madurai')}>set update
//      </button>
//      <button onClick={()=> updateName('chennai')}>name update
//      </button>
     
//      </>
//     )
// }
// export default Card;

import axios from "axios"
import { useState } from "react"
 const Card =(props)=>{
     const [name,setName]=useState([])
     const GetData = async()=>{
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('data',data.data)
        setName(data.data)  
     }
     return(
        <>
        <button onClick={()=>GetData()}>get data</button>
        {/*<p>{JSON.stringify(name)}</p>*/}
        {
            name.map((value)=>{return<p>{value.title}</p>})
        }
        <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        </>
     )
 }
 export default Card