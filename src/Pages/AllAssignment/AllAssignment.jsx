
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AssignmentCard from './AssignmentCard';

function AllAssignment() {
  const AxiosSecure = useAxiosSecure();
 

  const {data,error,isLoading,refetch} = useQuery({
    queryKey: ['allassignment'],
    queryFn: async() => {
      const result = await AxiosSecure.get('/allassignment')
      
      return result.data;
    },
  });

  if(!data)return <div>ekhane data nai ....</div>

 
  return (
    <>
      <div className="grid grid-cols-1 container mx-auto gap-10 p-1   md:grid-cols-2 my-16 lg:grid-cols-3">
        {data.map(item => (
          <AssignmentCard
            key={item._id}
            item={item}
            refetch={refetch}
          ></AssignmentCard>
        ))}
      </div>
    </>
  );
 
   

}

export default AllAssignment;
