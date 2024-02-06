import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'



export default function CreatePost() {

    const [files , setFiles] = useState(null) 

    const handlerUploadImg = async (e) => {
        e.preventDefault()
        try {
            if(!files){
                return alert('File not found')
            }
            const storage = getStorage();
        } catch (error) {
        console.log(error)
        }
       }

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen w-full">
        <h1 className="text-center text-3xl text-dark-700 font-normal">Create Post...</h1>
        <form className="mt-5 flex flex-col w-full gap-3">
            <div className="mt-4 flex flex-col sm:flex-row justify-between gap-3" >
                <TextInput  type='text' required placeholder='Title is required' id='title' className='w-full flex-1'/>
                <Select id='category' className='w-full sm:w-1/3 mt-4 sm:mt-0' required>
                    <option value='uncategorized'>Select Category</option>
                    <option value='MongoDb'>MongoDb</option>
                    <option value='ReactJs'>ReactJs</option>
                    <option value='NextJs'>NextJs</option>
                    <option value='JavaScript'>JavaScript</option>
                    <option value='TypeScript'>TypeScript</option>
                    <option value='Html'>Html</option>
                    <option value='Css'>Css</option>
                    <option value='Sass'>Sass</option>
                    <option value='Less'>Less</option>
                    <option value='Stylus'>Stylus</option>
                    <option value='TailwindCss'>TailwindCss</option>
                    <option value='NestJs'>NestJs</option>
                    <option value='NodeJs'>NodeJs</option>
                    <option value='ExpressJs'>ExpressJs</option>
                    <option value='GraphQL'>GraphQL</option>
                    <option value='Apollo'>Apollo</option>
                    <option value='Prisma'>Prisma</option>
                    <option value='PostgreSQL'>PostgreSQL</option>
                    <option value='MySQL'>MySQL</option>
                    <option value='SQLite'>SQLite</option>
                    <option value='TypeORM'>TypeORM</option>
                    <option value='Sequelize'>Sequelize</option>
                    <option value='Mongoose'>Mongoose</option>
                    <option value='TypeGraphQL'>TypeGraphQL</option>
                    <option value='Typegoose'>Typegoose</option>
                </Select>
            </div>
            <div className='flex gap-3 items-center justify-center border-4 border-teal-500 border-dotted p-3'>
                <FileInput id='image' accept='image/*' required className='w-full'  onChange={(e)=>setFiles(e.target.files[0])}/>
                <Button type='submit' className='btn  text-xs w-1/3' onClick={handlerUploadImg}>Upload image</Button>
            </div>
            <ReactQuill id='content' required className='w-full h-96 pb-5' theme="snow"  placeholder='Write something here'/>
            <Button type='submit' className='btn mt-5 w-full' gradientDuoTone='purpleToPink'>Create Post</Button>
        </form>
    </div>
  )
}
