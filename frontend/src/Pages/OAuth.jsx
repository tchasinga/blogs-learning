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
