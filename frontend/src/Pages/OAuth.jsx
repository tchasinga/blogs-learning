import { Button } from 'flowbite-react'
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <Button type='button'>
       <FcGoogle className='text-2xl'/>
       <text className='ml-2'>Google</text>
    </Button>
  )
}
