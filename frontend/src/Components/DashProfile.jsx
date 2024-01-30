import { useSelector } from 'react-redux';

export default function DashProfile() {

  const currentUser = useSelector((state) => state.user?.user?.currentUser);

  return ( 
    <div>
      <h1>Profile</h1>
        <form className=''>
          <img src={currentUser.user.ProfilePhoto}/>
        </form>
    </div>
  )
}
