  
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signup.css"

// import Nav from '../Nav/Nav';
const Signup=()=> {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const collectData = async () => {
        let result = await fetch('http://localhost:5000/signup',{
          method : 'Post',
          body : JSON.stringify({name,email,password}),
          headers : {
            'Content-Type' : 'application/json'
          },
        })
        result =await result.json
        console.warn(result);
        if(result){
          navigate('/');
        }
    }


  return (
    <div className='Signup_Container'>
      <h2 className='Signup_heading'>Sign Up</h2>
      <input className='Signup_inputs' type="text"  value={name} onChange={(e) =>setName(e.target.value)} placeholder='fill Your name'/>

<input className='Signup_inputs' type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='fill Your Email'/>

<input className='Signup_inputs' type="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='fill Your Password'/>

        <button type='button' className='Signup_Submit_Button' onClick={collectData}>Sign Up</button>
    </div>

  )
}

export default Signup;