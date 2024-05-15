import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AssignmentCard from './AssignmentCard';
import { useEffect, useState } from 'react';

function AllAssignment() {
  const AxiosSecure = useAxiosSecure();

  const [result, setResult] = useState(null);
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['allassignment'],
    queryFn: async () => {
      const result = await AxiosSecure.get('/allassignment');
     setResult(result.data)
      return  result.data;
    },
  });





  const handleDifficulty = e => {
    const difficulty = e.target.value;
    if (difficulty === 'difficulty') {
  return setResult(data)
}
   
      const Value = [...data].filter(item => item.difficulty == difficulty);
      setResult(Value);
     
  };


  if (isLoading || !result) {
    return (
      <div
        className="
        flex  justify-center items-center min-h-[calc(100vh-66px)]
        "
      >
        <span className="loading w-[50px] loading-spinner text-success"></span>;
      </div>
    );
  }

  return (
    <>
      <div className="text-center">
        <select
          name="dropdown"
          className="w-1/2 text-center  focus:outline-2 focus:outline-gray-300 h-[50px] px-4 rounded-lg border border-gray-300"
          onChange={handleDifficulty}
          id=""
        >
          <option value='difficulty'> Difficulty</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 container mx-auto gap-10 p-1   md:grid-cols-2 my-16 lg:grid-cols-3">
        {result.map(item => (
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
