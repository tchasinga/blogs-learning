import { Button } from 'flowbite-react'
import { FcGoogle } from "react-icons/fc";
import {GoogleAuthProvider} from 'firebase/auth'

export default function OAuth() {
    const handlerGoogleClicker = async () => {
        const provider = new GoogleAuthProvider()
    }

  return (
    <Button type='button' onClick={handlerGoogleClicker}>
       <FcGoogle className='text-2xl'/>
       <text className='ml-2'>Hang on with Google</text>
    </Button>
  )
}
