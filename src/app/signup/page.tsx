'use client'
import axios from 'axios'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import React , {useEffect} from 'react'
import  Toast, { toast }  from 'react-hot-toast'

export default function Signup() {
  const router = useRouter()
  const [data,setData] = React.useState({
      username:"",
      email:"",
      password:""
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    try {
        setLoading(true)
        const response = await axios.post("/api/users/signup", data);
        console.log("Login success", response.data);
        toast.success("Login success");
        setLoading(false)
        router.push("/login");
    } catch (error:any) {
        console.log("Login failed", error.message);
        toast.error(error.message);
    }finally{
      setButtonDisabled(false)
    }
}
useEffect(() => {
  if(data.email.length > 0 && data.password.length > 0) {
      setButtonDisabled(false);
      setLoading(false)
  } else{
      setButtonDisabled(true);
  
  }
}, [data]);


  return (
    <div className='container md:mx-auto px-4 flex items-center justify-center h-screen flex-col' >
      {data.email}
      
      <input className='rounded-lg p-4 mt-4 w-80 text-black'
       type="text " 
       placeholder='Your name'
       value={data.username}
       onChange={(e)=>setData({...data,username:e.target.value})}
       />

      <input className='rounded-lg p-4 mt-4 w-80 text-black'
       type="text " 
       placeholder='Email'
       value={data.email}
       onChange={(e)=>setData({...data,email:e.target.value})}
       />
      
      <input className='rounded-lg p-4 mt-4 w-80 text-black' 
      type="text"
      placeholder='Password'
      value={data.password}
      onChange={(e)=>setData({...data,password:e.target.value})}
       />


      <button className='bg-orange-500 p-4 mt-4 rounded-lg w-80 font-bold' disabled ={buttonDisabled} onClick={handleSubmit}>
        {loading ? "Loading.." : "Register"}
        </button>
    </div>
  )
}