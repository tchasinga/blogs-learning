import { Sidebar } from 'flowbite-react';
import { HiUser , HiArrowSmRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
export default function Dashsidebars() {

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
    <Sidebar className="dashsidebars">
      <Sidebar.Items>

      <Sidebar.ItemGroup>

        <Sidebar.Item to="/dashboard" active={tab === 'profile'} icon={HiUser} label="user" labelColor='dark'>
          Profile
        </Sidebar.Item>
        
        <Sidebar.Item to="/dashboard"  icon={HiArrowSmRight}>
          Sing out
        </Sidebar.Item>
        </Sidebar.ItemGroup>

      </Sidebar.Items>
    </Sidebar>
  )
}
