import { Select, TextInput } from 'flowbite-react'


export default function CreatePost() {
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
        </form>
    </div>
  )
}
