import { Link , useNavigate} from "react-router-dom";
import {  Alert, Button, Label, Spinner, TextInput , } from 'flowbite-react'
import { useState } from "react";


export default function SingUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [isSingUp, setIsSingUp] = useState(false)
  const [isSingUpError, setIsSingUpError] = useState(null) 
  
  const handlerSingupChanges = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }
  
  
  const handlerSubmitForm = async (e) => {
    // handling an errors when one of the fields is empty
    if (!formData.username || !formData.email || !formData.password) {
      setIsSingUpError('Please fill all fields listed')
      return
    }
    e.preventDefault()
    let data;
    try {
      setIsSingUp(true)
      setIsSingUpError(null)
      const response = await fetch('http://localhost:5000/api/auth/singupuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      data = await response.json()
      if(data.success === false){
        return setIsSingUpError(data.message)
      }
      console.log(data)
      setIsSingUp(false)
      navigate('/sign-in')
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
              <Button className='w-1/2 h-10  sm:inline'  type="submit" variant='primary' color='gray' size='sm' disabled={isSingUp}  outline pill rounded>
                {isSingUp ? (
                <>
                    <Spinner className='mr-2' size='sm' />
                    <span>Waiting...</span>
                </>
                ) : (
                  <span>Sing Up</span>
                )
                 }
                </Button>
             </form>
             <div>
                <p className="text-xs my-3 font-medium">Already have an account? <Link to='/sign-in' className="text-blue-500">Sign In</Link></p>
             </div>
             {isSingUpError && <p className="text-red-500 text-xs">
                  <Alert variant='danger' color='red' size='sm' pill rounded>{isSingUpError}</Alert>
              </p>}
              
            {
              isSingUp && <p className="text-green-500 text-xs">
                <Alert variant='success' color='green' size='sm' pill rounded>Sing up successfully</Alert>
              </p>
            }

        </div>
      </div>
    </div>
  )
}
