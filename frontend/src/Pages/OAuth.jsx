import { Button } from 'flowbite-react'
import { FcGoogle } from "react-icons/fc";
import {GoogleAuthProvider, signInWithPopup , getAuth} from 'firebase/auth'
import app from '../firebase';

export default function OAuth() {
    const auth = getAuth(app)
    const handlerGoogleClicker = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })

        try {
        const resultsFromGoogle = await signInWithPopup(auth, provider)
        console.log(resultsFromGoogle)

        const res = await fetch('http://localhost:5000/api/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: resultsFromGoogle.user.displayName,
                email: resultsFromGoogle.user.email,
                password: resultsFromGoogle.user.uid,
            })
        })  
      
        } catch (error) {
        console.log(error)
        }
    }

  return (
    <Button type='button' onClick={handlerGoogleClicker}>
       <FcGoogle className='text-2xl'/>
       <text className='ml-2'>Hang on with Google</text>
    </Button>
  )
}
