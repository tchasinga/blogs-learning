import { Link , useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {  Alert, Button, Label, Spinner, TextInput , } from 'flowbite-react'
import { useState } from "react";
import {singInStart, singInSuccess, singInFailure} from '../redux/user/userSlice.js'
import OAuth from "./OAuth.jsx";

export default function SingIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [isSingUp, setIsSingUp] = useState(false)
  const [isSingUpError, setIsSingUpError] = useState(null) 
  
  const handlerSingupChanges = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }
  
  
  const handlerSubmitForm = async (e) => {
    // handling an errors when one of the fields is empty
    if (!formData.email || !formData.password || formData.email === '' || formData.password === '') {
      setIsSingUpError('Please fill all fields listed')
      return
    }
    e.preventDefault()
    let data;
    try {
      setIsSingUp(true)
      setIsSingUpError(null)
      dispatch(singInStart())
      const response = await fetch('http://localhost:2000/api/auth/singinuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      data = await response.json()
      if(data.success === false){
        dispatch(singInFailure(data.message))
      }
      console.log(data)
      setIsSingUp(false)
      navigate('/')
      dispatch(singInSuccess(data))
    } catch (error) {
      setIsSingUp(false)    
      setIsSingUpError(error.message)
      dispatch(singInFailure(error.message))
    }
  }

  return (  
    <div className="min-h-screen mt-20 w-full">
      <div className="flex p-3 justify-center gap-20 items-center  max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* Adding first div for left side */}
        <div className="flex-1">
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
        <div className="flex-1">
             <form className="flex flex-col gap-3" onSubmit={handlerSubmitForm}>
              
              {/* <div className="">
                <Label value="Set your username"/>
                <TextInput className='w-96' type='text' placeholder='Username' required="fill this field"  id="username"  onChange={handlerSingupChanges}/>
              </div> */}

              <div className="">
                <Label value="Set your email"/>
                <TextInput className='w-96' type='email' placeholder='email@gmail.com'  id="email" onChange={handlerSingupChanges}/>
              </div>

              <div className="">
                <Label value="Set your password"/>
                <TextInput className=' ' type='password' placeholder='*************'  id="password" onChange={handlerSingupChanges}/>
              </div>
              <Button className='w-1/2 h-10  sm:inline'  type="submit" variant='primary' color='gray' size='sm' disabled={isSingUp}  outline pill rounded>
                {isSingUp ? (
                <>
                    <Spinner className='mr-2' size='sm' />
                    <span>Waiting...</span>
                </>
                ) : (
                  <span>Sing in</span>
                )
                 }
                </Button>
                 <OAuth/> 
             </form>
             <div>
                <p className="text-xs my-3 font-medium">Already have an account? <Link to='/sign-up' className="text-blue-500">Sign up</Link></p>
             </div>
             {isSingUpError && <p className="text-red-500 text-xs">
                  <Alert variant='danger' color='red' size='sm' pill rounded>Please check your information</Alert>
              </p>}
              
            {
              isSingUp && <p className="text-green-500 text-xs">
                <Alert variant='success' color='green' size='sm' pill rounded>Sing in successfully</Alert>
              </p>
            }

        </div>
      </div>
    </div>
  )
}
