import { useSelector } from 'react-redux';
import { TextInput, Button } from 'flowbite-react'
import { useState } from 'react';

export default function DashProfile() {

  const currentUser = useSelector((state) => state.user?.user?.currentUser);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);

  const handlerImageChanges = (e) =>{
    const file = e.target.files[0];
    if(file){
     setImageFile(file);
     setImageFileUrl(URL.createObjectURL(file));
    }
  }
   console.log(imageFile, imageFileUrl);
 

  return ( 
    <div className=''>
      <h1 className='text-center pb-2'>Profile</h1>
      <form className='flex flex-col'>
            <input type='file' className=''  accept='image/*' onChange={handlerImageChanges}/>
            <div className='w-32 h-32 self-center cursor-pointer '>
                <img src={imageFileUrl || currentUser.user.ProfilePhoto} className=' rounded-full w-full h-full border-8  border-[lightgray] object-cover '/>
            </div>

           <div className='mt-5 m-2 flex flex-col gap-3'>
           <TextInput className='w-full' type='text' id='username' label='Username' value={currentUser.user.username} />
            <TextInput className='w-full' type='email' id='email'  label='Email' value={currentUser.user.email} />
            <TextInput className='w-full' type='password' id='password' label='password' placeholder='************' />
           </div>
            <div className='flex justify-center m-2'>
                <Button type='submit'  className='w-full'>Update</Button>
            </div>
        </form>
        <div className='flex justify-between m-2'>
          {/* First div is here */}
          <div className='cursor-pointer'>
               <span className='text-sm text-red-800' >Delete your account</span>
          </div>

          <div className='cursor-pointer'>
               <span className='text-sm text-green-500' >Logout now</span>
          </div>
        </div>
    </div>
  )
}
