import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../store/thunk/fetch';

function Update() {

  let [x,y ] = useState({
    name: '',image:'',description:'',gender:'',email:''
  })

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
  
  let handleChange =(e)=>{
y(
  {...x, [e.target.name]: e.target.value}
)
  }

  let dispatch = useDispatch()
let nav = useNavigate()

let onEditSuccess = (e) =>{
  e.preventDefault()
  console.log('edit success');
  // disptach update action
dispatch(updateuser(x))
  // after success, navigate to all posts page
 nav('/')
}

  return (
    <div>
      <h1>Update Post</h1>
      <div className="border border-4 rounded-3 p-3 my-3 m-auto w-75">

<form onSubmit={onEditSuccess}>
  <Form.Control
  type='text'
  className='my-3'
  name='name'
  value={x && x.name}
  onChange={handleChange}
  />
   <Form.Control
  type='text'
  className='my-3'
  name='email'
  value={x && x.email}
  onChange={handleChange}
  />
   <Form.Control
  type='text'
  className='my-3'
  name='image'
  value={x && x.image}
  onChange={handleChange}
  />
<textarea 
cols={'63'}
rows={'10'}
  className='my-3'
  name='description'
  value={x && x.description}
  onChange={handleChange}
></textarea>

<div className="">
  <label htmlFor="">MALE</label>
  <input type="radio" name="gender" id="" value={'male'}
  onChange={handleChange}
  checked={x && x.gender==='male' ? true : false}
  />
   <label className='ms-3 me-2' htmlFor="">FEMALE</label>
  <input type="radio" name="gender" id="" value={'female'}
  onChange={handleChange}
  checked={x && x.gender==='female' ? true : false}
  />
</div>
 <button type="submit" className="my-4 btn btn-success">Update Post</button>
</form>

      </div>
    </div>
  )
}

export default Update