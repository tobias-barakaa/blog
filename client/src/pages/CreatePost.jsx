import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center tex-3xl my-7 font-semibold"></h1>
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <TextInput type="text" placeholder="Title" required id="title"
                className="flex-1"
                />
                <Select>
                    <option value="uncategorized">Select a category</option>
                    <option value="javascript">Javascript</option>
                    <option value="react">React.js</option>
                    <option value="nextjs">Nextjs</option>
                </Select>
            </div>
            <div className="flex gap-4 items-center 
            justify-between border-4 border-teal-500 border-dotted p-3 ">
                <FileInput type="file" id="image/*" />
                <Button type="button" gradientDuotone="purpleToBlue"
                size="sm" outline>Upload Image</Button>
            </div>
            <ReactQuill theme="snow" 
            required placeholder="write Something..." className="h-72 mb-12" />
            <Button type='submit' gradientDuoTone='purpleToPink'>
                Publish
            </Button>
        </form>
      
    </div>
  )
}

export default CreatePost
