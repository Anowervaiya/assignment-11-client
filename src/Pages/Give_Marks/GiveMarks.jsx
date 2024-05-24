import React, { useContext } from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ContextAPI } from '../../AuthProvider/AuthProvider';

function GiveMarks() {
  const {user}=useContext(ContextAPI)
  const AxiosSecure = useAxiosSecure();
  const { id } = useParams()
 

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['pendingId'],
    queryFn: async () => {
      const result = await AxiosSecure.get(`/pending/${id}`);

      return result.data;
    },
  });
  if(!data) return ''
  const [SingleData] = data;
  console.log(SingleData);

  const handlemarks = (e) => {
    e.preventDefault();
    const form = e.target;
    const Number = form.number.value;
    const Feedback = form.feedback.value;
    const Submited = { Number, Feedback };
    
    if (user?.email == SingleData?.UserEmail) {
    return  toast.error('you can not give mark on your assignment');
    }
     AxiosSecure.patch(`/mark?id=${id}`, Submited)
       .then(res => {
         if (res.data.modifiedCount > 0) {
           toast.success('Mark is submited Successfully');
           form.reset();
         }
       })

       .catch(err => {
         toast.error('you have already submitted');
       });

    
  }
  
 if (isLoading) return <div>loading from give marks .....</div>;
 
  return (
    <div className="w-1/2 my-24 mx-auto">
      <p className="text-xl">
        <span className="font-bold"> PDF/Doc Link</span> :{' '}
        <a href={SingleData?.File} className='hover:underline'>{SingleData?.File} </a>
      </p>
      <p className="my-4 ">
        <span className=" font-bold"> Notes</span> :{' '}
        <span> {SingleData?.Note}</span>{' '}
      </p>
      <form onSubmit={handlemarks}>
        <input
          type="number"
          name="number"
          className="p-3 border w-full rounded-lg border-gray-300 "
          placeholder="Give a Marks"
        />
        <textarea
          placeholder="Give a feedback"
          name="feedback"
          className="w-full rounded-lg border border-gray-300 p-3 my-4 mx-auto"
          rows={5}
          id=""
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="btn btn-outline btn-success w-full"
        />
      </form>
    </div>
  );
}

export default GiveMarks