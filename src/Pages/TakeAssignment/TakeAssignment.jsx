import React, { useContext, useEffect, useState } from 'react'
import { ContextAPI } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData, useParams } from 'react-router-dom';

function TakeAssignment() {
  const { user } = useContext(ContextAPI)
  const [data,setData]= useState(null)
  const AxiosSecure = useAxiosSecure()




  const { id } = useParams()
  
  useEffect(() => {
    AxiosSecure.get(`/details?id=${id}`)
      .then(res => {
      setData(res.data);
    })
  }, [])
  

 if (!data) return <div>loading from take assignment .......</div>;
  const [datas] = data;
  console.log(datas);
 
  const handleAssignment = (e) => {
    e.preventDefault()
    const form = e.target;
    const PosterEmail = datas.UserEmail;
    const AssignmentName = datas.name;
  const TotalMarks = datas.Marks;

    const File = form.file.value;
    const UserEmail = user?.email;
    const UserName = user?.displayName;
    const UserPhoto = user?.photoURL
    const note = form.note.value;
    const status = 'pending';
    const submit = {
      File,
      note,
      PosterEmail,
      TotalMarks,AssignmentName,
      UserPhoto,
      UserEmail,
      UserName,
      status,
    };
    console.log(File);
    if (!File || !note) {
      return toast.error('Please Choose a file and note something')
    }
    if (user?.email == PosterEmail) {
      return toast.error('You can not Take Your Assignment');
    }
    AxiosSecure.post('/submit', submit)
      .then(res => {
        toast.success('Assignment Send Successfully')
        form.reset()
      })
    
    
  }
 
  return (
    <form onSubmit={handleAssignment} className='container mx-auto pt-10'>
      <input type="text" placeholder='PDF/Doc Link ' name="file" className='w-full  border p-3 rounded-lg border-gray-300' />
      <textarea className='w-full border border-gray-300 rounded-lg p-3 mt-6'  placeholder='quick note' rows={7} name="note" id=""></textarea>
      <input type="submit" className='btn btn-success mt-6 btn-outline' value="Send Assignment" />
  </form>
  );
}

export default TakeAssignment