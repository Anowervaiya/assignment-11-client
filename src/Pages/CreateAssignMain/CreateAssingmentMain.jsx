import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import axios from 'axios';
import { useContext } from 'react';
import Swal from 'sweetalert2';

import  './style.css'
function CreateAssingmentMain() {
    const [startDate, setStartDate] = useState(new Date());
  const handleAddAssignment = event => {
    console.log('aice');
    event.preventDefault();

    const form = event.target;

    const name = form.Title.value;
    const TotalVisitors = form.TotalVisitors.value;
    const description = form.description.value;

    const photo = form.Photo.value;

    const User_Name = form.User_Name.value;

    // **
    // https://i.ibb.co/1TKJy35/download.jpg
    // https://i.ibb.co/dB6VtJ5/download.jpg
    // https://i.ibb.co/WFGhPm2/download.jpg
    // https://i.ibb.co/b7Mp63G/download.jpg
    // *

    const newTourist_Spot = {
      name,
      TotalVisitors,
      Email,
      average_cost,
      User_Name,
      country_Name,
      seasonality,
      travel_time,
      description,
      location,
      photo,
    };

    // send data to the server

    // fetch('https://tourism-a-10-server.vercel.app/tour', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(newTourist_Spot),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: 'Success!',
    //         text: 'Tourist_Spot Added Successfully',
    //         icon: 'success',
    //         confirmButtonText: 'Cool',
    //       });
    //       form.reset();
    //     }
    //   })
    //   .catch(err => {
    //     alert('oopps!');
    //   });
  };

  

  const handleDifficulty = e => {
    console.log(e.target.value);
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
                type="text"
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
