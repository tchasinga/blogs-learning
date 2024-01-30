import { useSelector } from 'react-redux';

export default function DashProfile() {

  const currentUser = useSelector((state) => state.user?.user?.currentUser);

  return ( 
    <div className=''>
      <h1>Profile</h1>
      <form className='flex flex-col'>
            <div className=''>
                <img src={currentUser.user.ProfilePhoto} className=' rounded-full w-full h-full border-8  border-[lightgray] object-cover '/>
            </div>
        </form>
    </div>
  )
}
