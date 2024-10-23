import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { postuser, updateuser } from '../store/thunk/fetch';

function CreatePost() {

  let [x,y ] = useState({
    name: 'SANDY',
    image:'https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    description:'Popeye the Sailor is a fictional cartoon character created by Elzie Crisler Segar.[17][18][19][20] The character first appeared on January 17, 1929, in the daily King Features comic strip Thimble Theatre. The strip was in its tenth year when Popeye made his debut, but the one-eyed sailor quickly became the lead character, and Thimble Theatre became one of King Features most popular properties during the 1930s.',
    gender:'',
    email:'sandyarora21@gmail.com'
  })
console.log(x);

  
  let handleChange =(e)=>{
y(
  {...x, [e.target.name]: e.target.value}
)
  }

  let dispatch = useDispatch()

  let nav =useNavigate()

  let createhandle =(e)=>{
    e.preventDefault()
    alert('form submitted');
    // disptach create action
dispatch(postuser(x))
nav('/')
  }


  return (
    <div>
      <h1>Create Post</h1>
      <div className="border border-4 rounded-3 p-3 my-3 m-auto w-75">

<form onSubmit={createhandle}>
  <Form.Control
  type='text'
  className='my-3'
  name='name'
  value={ x.name}
  onChange={handleChange}
  placeholder='NAME'
  />
   <Form.Control
  type='text'
  className='my-3'
  name='email'
  value={ x.email}
  onChange={handleChange}
    placeholder='EMAIL'
  />
   <Form.Control
  type='text'
  className='my-3'
  name='image'
  value={ x.image}
  onChange={handleChange}
    placeholder='IMAGE'
  />
<textarea 
cols={'63'}
rows={'10'}
  className='my-3'
  name='description'
  value={ x.description}
  onChange={handleChange}
    placeholder='DESCRIPTION'
></textarea>

<div className="">
  <label htmlFor="">GENDER = </label>
  <label htmlFor="">MALE</label>
  <input type="radio" name="gender" id="" 
  value={'male'}
  onChange={handleChange}
  checked={ x.gender==='male' ? true : false}
  />
   <label className='ms-3 me-2' htmlFor="">FEMALE</label>
  <input type="radio" name="gender" id="" 
  value={'female'}
  onChange={handleChange}
  checked={ x.gender==='female' ? true : false}
  />
</div>
 <button type="submit" className="my-4 btn btn-success">Create Post</button>
</form>

      </div>
    </div>
  )
}

export default CreatePost