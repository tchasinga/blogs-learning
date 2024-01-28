import { Link } from "react-router-dom";
import {  Button, Label, TextInput , } from 'flowbite-react'
import { useState } from "react";

export default function SingUp() {
  const [formData, setFormData] = useState({})
  const [isSingUp, setIsSingUp] = useState(false)
  const handlerSingupChanges = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  
  
  const handlerSubmitForm =async (e) => {
    e.preventDefault()
    try {
      setIsSingUp(true)
      const response = await fetch('http://localhost:5000/api/auth/singupuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      setIsSingUp(false)
      console.log(error)
    }

  }

  return (  
    <div className="min-h-screen mt-20">
      <div className="flex p-3 justify-center gap-20 items-center  max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* Adding first div for left side */}
        <div className="">
        <Link to='/' className=' py-4 font-semibold flex items-center gap-1 dark:text-white text-5xl'>
            <span className='font-normal px-2 py-1 rounded-xl bg-gradient-to-r font-bold from-indigo-500 via-purple-100 to-pink-100'>Blog&apos;s</span>
            <p>Learning</p>
        </Link>
          <div className="text-sm text-dark-900 font-normal">
          <p>It is important to automate, collect , manage...</p>
          <p>analyze the processing of data  and information accurately.</p>
          </div>
        </div>

        {/* Adding second div  right side */}
        <div className="">
             <form className="flex flex-col gap-3" onSubmit={handlerSubmitForm}>
              
              <div className="">
                <Label value="Set your username"/>
                <TextInput className='w-96' type='text' placeholder='Username' required="fill this field"  id="username"  onChange={handlerSingupChanges}/>
              </div>

              <div className="">
                <Label value="Set your email"/>
                <TextInput className=' ' type='email' placeholder='Username'  id="email" onChange={handlerSingupChanges}/>
              </div>

              <div className="">
                <Label value="Set your password"/>
                <TextInput className=' ' type='password' placeholder='Username'  id="password" onChange={handlerSingupChanges}/>
              </div>
              <Button className='w-1/2 h-10  sm:inline'  type="submit" variant='primary' color='gray' size='sm' disabled={isSingUp}  outline pill rounded>{isSingUp ?  'Waiting...' : 'Sing up'}</Button>
             </form>
             <div>
                <p className="text-xs my-3 font-medium">Already have an account? <Link to='/sign-in' className="text-blue-500">Sign In</Link></p>
             </div>
        </div>
      </div>
    </div>
  )
}
