import React, { useContext } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'
import { ContextAPI } from '../../AuthProvider/AuthProvider';
import { Hinge, JackInTheBox } from 'react-awesome-reveal';
function AssignmentCard({ item, refetch }) {
  const {user} = useContext(ContextAPI)
  const AxiosSecure = useAxiosSecure()
  const handleDelete = id => {
    

Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!',
}).then(result => {



  if (result.isConfirmed) {

    AxiosSecure.delete(`/delete?id=${id}&email=${user?.email}`)
      .then(res => {

        if (res.data?.deletedCount > 0) {
           Swal.fire({
             title: 'Deleted!',
             text: 'Your file has been deleted.',
             icon: 'success',
           });
          refetch();
        } 

        else {
         
        Swal.fire({
          title: 'Unauthorized!',
          text: 'You can not delete it',
          icon: 'error',
        }
      );
        }
       
      })
      .catch(err => {
      console.log('delete hocce na');
    })
      
    

    
  }
});

   
  };

  return (
    <JackInTheBox duration={1500}>
      <div className="border border-cyan-300 bg-cyan-50 hover:shadow-lg  h-full   transition duration-300 rounded-lg p-4  hover:-translate-y-2  ">
        <img
          className="object-cover w-full rounded-lg h-64"
          src={item?.thumbnail}
          alt="Article"
        />

        <div className="py-6">
          <div>
            <span className="text-xs font-medium uppercase  text-blue-400 bg-blue-100 p-2 rounded-full">
              {item?.difficulty}
            </span>
            <div className="block mt-4 text-xl font-semibold  transition-colors duration-300 transform   ">
              {item?.name}
            </div>
            <p className="mt-3 text-gray-500 text-sm ">
              {item?.description}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <h1 className=" mr-4 font-semibold text-gray-500   ">
                  {' '}
                  Marks : {item?.Marks}
                </h1>
                <span className=" ">
                  {moment(item?.startDate).format('DD/MM/YYYY')}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-8  flex gap-8">
              <Link
                to={`/Details/${item?._id}`}
                className="btn btn-outline rounded-full btn-info "
              >
                View
              </Link>
              <div
                onClick={() => handleDelete(item?._id)}
                className=" btn btn-outline rounded-full cursor-pointer btn-error "
              >
                Delete
              </div>
              <Link
                to={`/Update/${item?._id}`}
                className="btn btn-outline rounded-full cursor-pointer btn-success "
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </JackInTheBox>
  );
}

export default AssignmentCard