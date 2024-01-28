import { Link } from "react-router-dom";


export default function SingUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="">
        {/* Adding first div for left side */}
        <div className="">
        <Link to='/' className=' font-semibold flex items-center gap-1 dark:text-white text-4xl'>
            <span className='font-normal px-2 py-1 rounded-xl bg-gradient-to-r font-bold from-indigo-500 via-purple-100 to-pink-100'>Blog&apos;s</span>
            <p>Learning</p>
        </Link>
        </div>

        {/* Adding second div  right side */}
        <div className=""></div>
      </div>
    </div>
  )
}
