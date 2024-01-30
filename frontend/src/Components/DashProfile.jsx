import { useSelector } from 'react-redux';
import { TextInput, Button , Alert } from 'flowbite-react'
import { useEffect, useRef, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import  app from '../firebase.js'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {

  const currentUser = useSelector((state) => state.user?.user?.currentUser);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef( );
  const [imageFileUploadingProgress, setImageFileUploadingProgress] = useState(0);
  const [imageFileUploadingErrors, setImageFileUploadingErrors] = useState(null);

  console.log(imageFileUploadingProgress , imageFileUploadingErrors)

  const handlerImageChanges = (e) =>{
    const file = e.target.files[0];
    if(file){
     setImageFile(file);
     setImageFileUrl(URL.createObjectURL(file));
    }
  };
  
  useEffect(() => {
    if(imageFile){
      uploadImage();
    }
  }, [imageFile]);




  const uploadImage = async () =>{

    setImageFileUploadingErrors(null);
    console.log('uploading image');
    const storage = getStorage(app);
    const fileName = new Date().getTime() +  imageFile.name;
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
       setImageFileUploadingProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadingErrors( "Your file must be less than 3 Mo",true);
        console.log(error); 
        setImageFileUploadingProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      ()=> {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setImageFileUrl(downloadURL); 
        });
      }
      )
  }

 // Submitting the updating Image



  return ( 
    <div className=''>
      <h1 className='text-center pb-2'>Profile</h1>  
      <form className='flex flex-col'>
            <input type='file' className='hidden'  accept='image/*'  onChange={handlerImageChanges} ref={filePickerRef}/>
            <div className='w-32 h-32 self-center cursor-pointer relative' onClick={()=> filePickerRef.current.click()}>

               {imageFileUploadingProgress && (
              <CircularProgressbar value={imageFileUploadingProgress || 0}
              text={`${imageFileUploadingProgress}%`} 
              strokeWidth={5}
              styles={{
                root: { width: '100%', height: '100%', position: 'absolute', top: '0', left: '0'},
                path: { stroke: `rgb(62, 152, 199) ${imageFileUploadingProgress / 100}` },
                text: { fill: '#f00', fontSize: '16px' },
              }} 
              />
            )} 
                <img src={imageFileUrl || currentUser.user.ProfilePhoto}   className={` rounded-full w-full h-full border-8  border-[lightgray] object-cover ${imageFileUploadingProgress && imageFileUploadingProgress < 100 && 'opacity-60'}`}/>
            </div>
           
            {imageFileUploadingErrors && <Alert type='danger' className='w-full'>{imageFileUploadingErrors}</Alert>}

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
