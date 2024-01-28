import { Link } from "react-router-dom";


export default function SingUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="">
        {/* Adding first div for left side */}
        <div className="">
        <Link to='/' className=' py-4 font-semibold flex items-center gap-1 dark:text-white text-5xl'>
            <span className='font-normal px-2 py-1 rounded-xl bg-gradient-to-r font-bold from-indigo-500 via-purple-100 to-pink-100'>Blog&apos;s</span>
            <p>Learning</p>
        </Link>
          <div className="text-sm text-dark-900 font-normal">
          <p>It is important to automate, collect, manage, calculate, and</p>
         <p>analyze the processing of data and information accurately. Programming</p>
          <p>is the process of creating a set of instructions that tell a computer</p>
          <p>how to perform a task. Programming can be done using a variety of</p>
          <p>computer languages, such as JavaScript, Reactjs, Nextjs, and Tailwindcss...</p>
          </div>
        </div>

        {/* Adding second div  right side */}
        <div className=""></div>
      </div>
    </div>
  )
}
