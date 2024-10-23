import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function Preview() {

let [x,y ] = useState(null)

let {id} = useParams()
console.log(id);

let {data} = useSelector(state=>state.allusers)
console.log(data);


useEffect(()=>{
  let findData = data.find(ele=>ele.id == id)
if(findData){
  y(findData)
}
},[id])

console.log(x);


  return (
    <div>
      <img src={x?.image} alt="" />
      <h3>{x?.name}</h3>
      <p className="lead">{x?.description}</p>
      <h1 className='fw-bolder'>Contact us at = {x?.email}</h1>
    </div>
  )
}

export default Preview