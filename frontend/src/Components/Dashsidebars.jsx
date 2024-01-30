import { Sidebar } from 'flowbite-react';
import { HiUser , HiArrowSmRight } from "react-icons/hi";

export default function Dashsidebars() {
  return (
    <Sidebar className="dashsidebars">
      <Sidebar.Items>

      <Sidebar.ItemGroup>

        <Sidebar.Item to="/dashboard" active icon={HiUser} label="user" labelColor='dark'>
          Profile
        </Sidebar.Item>
        
        <Sidebar.Item to="/dashboard" active icon={HiArrowSmRight}>
          Sing out
        </Sidebar.Item>
        </Sidebar.ItemGroup>

      </Sidebar.Items>
    </Sidebar>
  )
}
