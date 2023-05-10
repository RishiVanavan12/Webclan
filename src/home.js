import React,{useEffect, useRef, useState} from 'react';

export default function Home () {
  const nameRef = useRef();
  const emailRef = useRef()
  const [detail,setDetail]=useState({});

  function handleSubmit(e) {
    e.preventDefault()
    setDetail({
      name: nameRef.current.value,
      email: emailRef.current.value
    })
  }

  useEffect(()=>{
    console.log(detail,'-----------------------------')
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input_group">
          <label>Name</label>
          <input type="text" ref={nameRef}/>
        </div>
        <div className="input_group">
          <label>Email</label>
          <input type="text" ref={emailRef}/>
        </div>
        <div className="input_group">
          <label>Password</label>
          <input type="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
      {
        Object.keys(detail).length > 0 ?
        <>
          <div>You have been successfully logged in, {detail.name} </div>
          <div>Your email - {detail.email}</div>
        </> : <></>
      }
    </div>
  )
}
