import React, {useState} from 'react';


function Register() {
    const [email, setEmail] =useState("")
    const [pass, setPass] =useState("")
    const [name, setName] = useState("")
    const [phone,setPhone] = useState("")

    const handleSubmit=()=>{
        const postUrl='http://localhost:4000/userresistor'
        fetch(postUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                phone:phone,
                email:email,
                password:pass
            })
        })
        .then(()=>{
            alert("You are register")
        }).catch((e)=>console.log(e))
    }

  return (
        <div id='register'>
            <h1>PLEASE REGISTER HERE...</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input  classname='inputBox'value={name} onChange={(e)=>setName(e.target.value)} type='name' placeholder='your name' id='name' name='name'></input>

        <label htmlFor='phone'>email</label>
        <input classname='inputBox' value={phone} onChange={(e)=>setPhone(e.target.value)} type='phone' placeholder='your Phone number' id='phone' name='phone'></input>

        <label htmlFor='email'>email</label>
        <input classname='inputBox' value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'></input>

        <label htmlFor='password'>password</label>
        <input classname='inputBox' value={pass} onChange={(e)=>setPass(e.target.value)} type='password' placeholder='*********' id='password' name='password'></input>
        <button className='pr-btn' type='submit'>Register</button>
    </form>
   
    <button className='appbutton' type='submit'><h3>Already have an account? Login here</h3></button>

    </div>
   
  )
}

export default Register