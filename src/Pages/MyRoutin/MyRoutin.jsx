import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { ContextAPI } from '../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
function MyRoutin() {
  const { user } = useContext(ContextAPI);
  const [data, setData] = useState({});
  const AxiosSecure = useAxiosSecure();
  useEffect(() => {
    const GetMyRoutin = async () => {
      const { data } = await AxiosSecure(`/routin/${user?.email}`);
      setData(data);
    };

    GetMyRoutin();
  }, [user]);

  const { FullActivity, FullStatus, FullTime } = data;
  console.log(FullActivity, FullStatus, FullTime);
if(!FullTime||!FullActivity||!FullStatus) return <Loading></Loading>
  const keys=[1,2,3,4,5,6,7,8,10]

  return (
    <div className="my-32 max-w-[1000px] mx-auto">
      <div className="overflow-x-auto">
        <table className="table border ">
          {/* head */}
          <thead>
            <tr className="*:text-2xl font-bold">
              <th>Time</th>
              <th>Activity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((key, index) => (
              <tr key={key} >
                <td>{FullTime[`Time${index + 1}`]}</td>
                <td>{FullActivity[`Activity${index + 1}`]}</td>
                <td className={`${FullStatus[`status${index + 1}`]=='pending'?'bg-red-100':'bg-green-100'} w-2  rounded-full text-center`}>
                  {FullStatus[`status${index + 1}`]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyRoutin;
