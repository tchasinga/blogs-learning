import { useSelector } from 'react-redux';

export default function DashProfile() {

  const currentUser = useSelector((state) => state.user?.user?.currentUser);

  return ( 
    <div >
      <h1>Profile</h1>
      <form className='flex flex-col'>
          <div className='w-32 h-32 self-center'>
             <img src={currentUser.user.ProfilePhoto} className=' rounded-full w-full h-full border-8  border-[lightgray] object-cover'/>
          </div>
        </form>
    </div>
  )
}
