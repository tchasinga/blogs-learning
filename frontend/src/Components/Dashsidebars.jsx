import { Sidebar } from 'flowbite-react';
import { HiUser } from "react-icons/hi";

export default function Dashsidebars() {
  return (
    <Sidebar className="dashsidebars">
      <Sidebar.Items>

      <Sidebar.ItemGroup>
        <Sidebar.Item to="/dashboard" icon={HiUser} label="user" >
          Profile
        </Sidebar.Item>
        
        </Sidebar.ItemGroup>

      </Sidebar.Items>
    </Sidebar>
  )
}
