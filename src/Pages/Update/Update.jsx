import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { useContext } from 'react';

import moment from 'moment';
import './style.css';
import toast from 'react-hot-toast';
import { ContextAPI } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
function Update() {
  const AxiosSecure = useAxiosSecure();
  const [data,setData]= useState([])
  const [difficulty, setDifficulty] = useState('Low');
  const [startDate, setStartDate] = useState(new Date());
const navigate = useNavigate()
  const { user } = useContext(ContextAPI);
  const { id } = useParams();
 

  useEffect(() => {
    AxiosSecure.get(`/details?id=${id}`)
      .then(res => {
     setData(res.data);
    })
  },[])



  const handleUpdateAssignment = (e) => {
    e.preventDefault();


    const form = e.target;

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

    AxiosSecure.put(`/update?id=${id}`,  newAssignment )
    .then(res => {
      if (res.data.modifiedCount > 0) {
        toast.success('update successfully')
        navigate('/AllAssignment')
      }
    });
  };

  const handleDifficulty = e => {
    setDifficulty(e.target.value);
  };

  if(!data) return <div>loding from update .......</div>
  return (
    <>
      {data.map(item => {
        return (
          <div className="bg-[#F4F3F0] min-h-screen p-24">
            <h2 className="text-3xl font-extrabold">Update Assignment</h2>
            <form onSubmit={handleUpdateAssignment}>
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
                      defaultValue={item?.name}
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
                      defaultValue={item?.thumbnail}
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
                    defaultValue={moment(item?.startDate).format('DD/MM/YYYY')}
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
                      defaultValue={item?.Marks}
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
                      defaultValue={item?.description}
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
                value="Update Assignment"
                className="btn btn-block"
              />
            </form>
          </div>
        );
      })}
    </>
  );
}

export default Update;
