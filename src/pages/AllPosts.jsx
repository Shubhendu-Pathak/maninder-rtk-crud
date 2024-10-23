import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser, showuser } from '../store/thunk/fetch'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { searchtxt } from '../store/userSlice';

function AllPosts() {

let [search, setsearch] = useState('')
let [radiodata, setradiodata] = useState('')

    let dispatch = useDispatch()

    let {isloading, data, error} = useSelector(state=>state.allusers)
    
    let onDel = (para) =>{
       // delete logic here
       dispatch(deleteuser(para))
    }

    let nav = useNavigate()
    let onPreview =(para)=>{
       // preview logic here
       nav(`/preview/${para.id}`)
    }

    let onEdit =(para)=>{
      // preview logic here
      nav(`/update/${para.id}`)
   }

useEffect(()=>{
    // document.title = 'ALL-POSTS'
    dispatch(showuser())
},[dispatch, ])


useEffect(()=>{
  dispatch(searchtxt(search))
},[search ])


if(isloading){
    return <h2>Loading...</h2>
}

if(error){
    return <h2>Error: {error.message}</h2>
}

// let dataDescrip = (para)=>{
//     return para.slice(0, 10)
// }

  return (
    <div>
        <h1 className='display-1'>ALLPOSTS</h1>
        <div className="sort-filter d-flex justify-content-between align-items-center">
          <input type="text" placeholder="Search by Name" 
          value={search}
          onChange={(e)=>setsearch(e.target.value)}
          />
          <div className="">
            <label className='ms-3 me-2' htmlFor="">ALL</label>
            <input type="radio" name="" id="" 
            value={''}
            onChange={(e)=>setradiodata(e.target.value)}
            checked={radiodata === ''}
            />
            <label className='ms-3 me-2' htmlFor="">MALE</label>
            <input type="radio" name="" id="" 
              value={'male'}
              onChange={(e)=>setradiodata(e.target.value)}
              checked={radiodata === 'male'}
            />
            <label className='ms-3 me-2' htmlFor="">FEMALE</label>
            <input type="radio" name="" id="" 
              value={'female'}
              onChange={(e)=>setradiodata(e.target.value)}
              checked={radiodata === 'female'}
            />
          </div>
        </div>
        {
            data && data
            .filter((ele)=>{
              if(search.length ===0 ){
                return ele
              }else{
                return ele.name.toLowerCase().includes(search.toLowerCase())
              }
            })
            .filter((ele)=>{
if(radiodata==='male') {
  return ele.gender ==='male'
}else if(radiodata==='female'){
  return ele.gender ==='female'
}else{
  return ele
}
            })
            .map((ele)=>{
                let str = (ele?.description)?.substring(0,40)+'..........'

               return <Card key={ele?.id} className='m-auto bg-warning-subtle my-3' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={ele?.image} height={'200px'}  />
                <Card.Body>
                  <Card.Title>{ele?.name}</Card.Title>
                  <Card.Text>
                   {ele?.email}
                   <br/>
                  </Card.Text>
                  <h4>GENDER ={ele?.gender}</h4>
                  <p className='lead'>   {str}</p>
              <div className="d-flex justify-content-between align-items-center">
              <Button 
              onClick={()=>onPreview(ele)}  variant="primary">PREVIEW</Button>
                <Button 
                  onClick={()=>onDel(ele)} variant="danger">DELETE</Button>
               <Button 
               onClick={()=>onEdit(ele)} 
               variant="warning">EDIT</Button>
              </div>
                </Card.Body>
              </Card>
            })
        }
    </div>
  )
}

export default AllPosts