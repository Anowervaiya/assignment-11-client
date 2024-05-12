import React, { useContext } from 'react'
import { ContextAPI } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast'
import useAxiosSecure from '../../Hooks/useAxiosSecure';

function TakeAssignment() {
  const { user } = useContext(ContextAPI)
  const AxiosSecure = useAxiosSecure()
  console.log(user);
  const handleAssignment = (e) => {
    e.preventDefault()
    const form = e.target;
    const File = form.file.value;
    const UserEmail = user?.email;
    const UserName = user?.displayName;
    const note = form.note.value;
    const status = 'pending'
    const submit = { File, note, UserEmail, UserName, status };
    if (!File || !note) {
      return toast.error('Please Choose a file')
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