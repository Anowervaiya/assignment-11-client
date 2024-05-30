import React, { useContext } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { ContextAPI } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast'
function DailyRoutin() {
  const AxiosSecure = useAxiosSecure()
  const { user } = useContext(ContextAPI);

  let status1= 'pending';
  let status2= 'pending';
  let status3= 'pending';
  let status4= 'pending';
  let status5= 'pending';
  let status6= 'pending';
  let status7= 'pending';
  let status8= 'pending';
  let status9= 'pending';
  let status10= 'pending';
  const handleStatus1 = e => {
    status1= e.target.value
  };
  const handleStatus2 = e => {
    status2= e.target.value
  };
  const handleStatus3 = e => {
    status3= e.target.value
  };
  const handleStatus4 = e => {
    status4= e.target.value
  };
  const handleStatus5 = e => {
    status5= e.target.value
  };
  const handleStatus6 = e => {
    status6= e.target.value
  };
  const handleStatus7 = e => {
    status7= e.target.value
  };
  const handleStatus8 = e => {
    status8= e.target.value
  };
  const handleStatus9 = e => {
    status9= e.target.value
  };
  const handleStatus10 = e => {
    status10= e.target.value
  };


  const handleRoutin = async e => {
    e.preventDefault();
    const Time1 = e.target.time1.value;
    const Time2 = e.target.time2.value;
    const Time3 = e.target.time3.value;
    const Time4 = e.target.time4.value;
    const Time5 = e.target.time5.value;
    const Time6 = e.target.time6.value;
    const Time7 = e.target.time7.value;
    const Time8 = e.target.time8.value;
    const Time9 = e.target.time9.value;
    const Time10 = e.target.time10.value;
    const FullTime = {
      Time1,
      Time2,
      Time3,
      Time4,
      Time5,
      Time6,
      Time7,
      Time8,
      Time9,
      Time10,
    };

    const Activity1 = e.target.activity1.value;
    const Activity2 = e.target.activity2.value;
    const Activity3 = e.target.activity3.value;
    const Activity4 = e.target.activity4.value;
    const Activity5 = e.target.activity5.value;
    const Activity6 = e.target.activity6.value;
    const Activity7 = e.target.activity7.value;
    const Activity8 = e.target.activity8.value;
    const Activity9 = e.target.activity9.value;
    const Ativity10 = e.target.activity10.value;

    const FullActivity = {
      Activity1,
      Activity2,
      Activity3,
      Activity4,
      Activity5,
      Activity6,
      Activity7,
      Activity8,
      Activity9,
      Ativity10,
    };

    const FullStatus = {
      status1,
      status2,
      status3,
      status4,
      status5,
      status6,
      status7,
      status8,
      status9,
      status10
    };
    const FullData = { FullTime, FullActivity, FullStatus, email: user?.email }
    
    const { data } = await AxiosSecure.put(`/routin/${user?.email}`, FullData)
    
    if (data.upsertedCount > 0 || data.modifiedCount > 0) {
      toast.success('Routing making success')
    }
    else {
      toast.error('please ! modify the UI ')
    }
    
  };
  return (
    <form
      onSubmit={handleRoutin}
      className="max-w-[1000px] my-32  min-h-screen mx-auto"
    >
      <h1 className="text-3xl lg:text-5xl font-bold text-center my-12">
        Daily Activity Schedule
      </h1>
      <div className="grid grid-cols-3 ">
        <div className="flex flex-col *:border *:rounded-lg *:p-4 *:mt-3">
          <h1>TIME</h1>

          <input type="time" name="time1" />
          <input type="time" name="time2" />
          <input type="time" name="time3" />
          <input type="time" name="time4" />
          <input type="time" name="time5" />
          <input type="time" name="time6" />
          <input type="time" name="time7" />
          <input type="time" name="time8" />
          <input type="time" name="time9" />
          <input type="time" name="time10" />
        </div>
        <div className="flex flex-col *:border *:rounded-lg *:p-[17px] mx-4 *:mt-3">
          <h1>ACTIVITY</h1>
          <input type="text" name="activity1" id="" />
          <input type="text" name="activity2" id="" />
          <input type="text" name="activity3" id="" />
          <input type="text" name="activity4" id="" />
          <input type="text" name="activity5" id="" />
          <input type="text" name="activity6" id="" />
          <input type="text" name="activity7" id="" />
          <input type="text" name="activity8" id="" />
          <input type="text" name="activity9" id="" />
          <input type="text" name="activity10" id="" />
        </div>
        <div className="flex flex-col *:border *:rounded-lg *:p-[18px]  *:mt-3">
          <h1>STATUS</h1>
          <select  onChange={handleStatus1} name="" id="">
            <option  value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
          <select onChange={handleStatus2} name="" id="">
            <option   value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
          <select onChange={handleStatus3} name="" id="">
            <option   value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
          <select onChange={handleStatus4} name="" id="">
            <option   value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
          <select onChange={handleStatus5} name="" id="">
            <option   value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
          <select onChange={handleStatus6} name="" id="">
            <option   value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
          <select onChange={handleStatus7} name="" id="">
            <option   value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
          <select onChange={handleStatus8} name="" id="">
            <option   value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
          <select onChange={handleStatus9} name="" id="">
            <option   value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
          <select onChange={handleStatus10} name="" id="">
            <option   value=" pending">
              pending
            </option>
            <option value="done">done</option>
          </select>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full btn btn-outline btn-success mt-5"
        >
          Save Routin
        </button>
      </div>
    </form>
  );
}

export default DailyRoutin;
