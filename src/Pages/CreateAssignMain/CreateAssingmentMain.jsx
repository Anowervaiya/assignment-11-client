import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';


import { useContext } from 'react';


import './style.css'
import toast from 'react-hot-toast'
import { ContextAPI } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
function CreateAssingmentMain() {
  const AxiosSecure= useAxiosSecure()
  const [difficulty , setDifficulty]= useState('Low')
  const [startDate, setStartDate] = useState(new Date());


  const { user } = useContext(ContextAPI)
  const handleAddAssignment = event => {
   
    event.preventDefault();

    const form = event.target;

    const name = form.Title.value;
    const description = form.description.value;
    
    const Marks = form.Marks.value;
    const thumbnail = form.Photo.value;
    const UserName = user?.displayName;
    const UserEmail = user?.email;
    const UserPhoto = user?.photoURL;


    
    const newAssignment = {
      name,
      startDate,
      thumbnail,
      UserName,
      UserEmail,
      UserPhoto,
      Marks,
      description,
      difficulty,
    };
    AxiosSecure.post('/assignment', { newAssignment })
      .then(res => {
        if (res.data.acknowledged == true) {
          toast.success('Assignment Added')
          form.reset()
        }
    })
    

  };

  

  const handleDifficulty = e => {
    setDifficulty(e.target.value);
  };

  return (
    <div className="bg-[#F4F3F0] min-h-screen p-24">
      <h2 className="text-3xl font-extrabold">Add An Assignment</h2>
      <form onSubmit={handleAddAssignment}>
        {/* form name and thumbnail row */}
        <div className="flex flex-col md:flex-row ">
          <div className=" md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Title"
                placeholder="Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className=" md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="url"
                name="Photo"
                placeholder="Photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* difficulties and date */}

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 ">
            <label className="label">
              <span className="label-text"> Difficulties</span>
            </label>
            <select
              name="dropdown"
              className="w-full focus:outline-2 focus:outline-gray-300 h-[50px] px-4 rounded-lg border border-gray-300"
              onChange={handleDifficulty}
              
              id=""
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className=" md:w-1/2 md:ml-4 ">
            <label className="label">
              <span className="label-text"> Date</span>
            </label>
            <DatePicker
              className="w-full focus:outline-2 focus:outline-gray-300 p-3 border border-gray-300 rounded-lg"
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </div>
        </div>
        {/* marks and description  */}

        <div className="flex flex-col md:flex-row mb-8">
          <div className=" md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Marks</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="Marks"
                placeholder="Marks"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className=" md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <textarea
                name="description"
                className="w-full p-4 focus:outline-2 focus:outline-gray-300   rounded-lg border border-gray-300 "
                placeholder="Write Some Description "
                rows={6}
                id=""
              ></textarea>
            </label>
          </div>
        </div>
        {/*  */}
        <input
          type="submit"
          value="Add Assignment"
          className="btn btn-block"
        />
      </form>
    </div>
  );
}

export default CreateAssingmentMain;
