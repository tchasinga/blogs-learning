import { Button } from 'flowbite-react'
import { FcGoogle } from "react-icons/fc";
import {GoogleAuthProvider, signInWithPopup , getAuth} from 'firebase/auth'
import app from '../firebase';
import { useDispatch } from "react-redux";
import {singInSuccess} from '../redux/user/userSlice.js'
import {useNavigate} from "react-router-dom";

export default function OAuth() {
    const navigate = useNavigate()
    const auth = getAuth(app)
    const dispatch = useDispatch()
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
                googlePhotoUrl: resultsFromGoogle.user.photoURL,
            })
        })
        const data = await res.json()
        console.log(data)  
         if(res.ok){
            dispatch(singInSuccess(data))
            navigate('/')
         }
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
