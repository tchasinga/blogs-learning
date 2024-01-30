import { useSelector } from 'react-redux';
import { TextInput, Button } from 'flowbite-react'

export default function DashProfile() {

  const currentUser = useSelector((state) => state.user?.user?.currentUser);

  return ( 
    <div className=''>
      <h1 className='text-center pb-2'>Profile</h1>
      <form className='flex flex-col'>
            <div className='w-32 h-32 self-center cursor-pointer '>
                <img src={currentUser.user.ProfilePhoto} className=' rounded-full w-full h-full border-8  border-[lightgray] object-cover '/>
            </div>

           <div className='mt-5 m-2 flex flex-col gap-3'>
           <TextInput className='w-full' type='text' id='username' label='Username' value={currentUser.user.username} />
            <TextInput className='w-full' type='email' id='email'  label='Email' value={currentUser.user.email} />
            <TextInput className='w-full' type='password' id='password' label='password' placeholder='************' />
           </div>
            <div className='flex justify-center m-2'>
                <Button className='w-full'>Update</Button>
            </div>
        </form>
    </div>
  )
}
