import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import Dashsidebars from "../Components/Dashsidebars";
import DashProfile from "../Components/DashProfile";

export default function Dashboard() {
  const location = useLocation();
   const [tab, setTab] = useState('');
   useEffect(() =>{
     const urlParams = new URLSearchParams(location.search);
     const tabFromUrl = urlParams.get('tab');
      setTab(tabFromUrl);
      console.log(tabFromUrl);
      if(tabFromUrl){
        setTab(tabFromUrl);
      }
   }
    , [location.search]
   )

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
       {/* Creating side bars in the first place */}
       <div className='md:w-56'>
        <Dashsidebars />
       </div>


       {/* Creating Profile pages... */}
       <div className="">
        {tab === 'profile' && <DashProfile />}
       </div>
    </div>
  )
}
