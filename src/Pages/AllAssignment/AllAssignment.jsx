
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

function AllAssignment() {
  const AxiosSecure = useAxiosSecure();
 

  const {data,error,isLoading,refetch} = useQuery({
    queryKey: ['allassignment'],
    queryFn: async() => {
      const result = await AxiosSecure.get('/allassignment')
      
      return result.data;
    },
  });

  if(isLoading)return <div>tanstack loading........bom</div>

  return <div>AllAssignment</div>;
}

export default AllAssignment;
