import React, { useContext } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'
import { ContextAPI } from '../../AuthProvider/AuthProvider';
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
    <div class="max-w-2xl border border-gray-300 p-6 overflow-hidden bg-white rounded-lg shadow-md  ">
      <img
        class="object-cover w-full rounded-lg h-64"
        src={item?.thumbnail}
        alt="Article"
      />

      <div class="py-6">
        <div>
          <span class="text-xs font-medium uppercase  text-blue-400 bg-blue-100 p-2 rounded-full">
            {item?.difficulty}
          </span>
          <div class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform   hover:text-gray-600 ">
            {item?.name}
          </div>
          <p class="mt-2 text-sm text-gray-600  ">{item?.description}</p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <h1 class=" mr-4 font-semibold text-gray-700  ">
                {' '}
                Marks : {item?.Marks}
              </h1>
              <span class=" text-gray-600  ">
                {moment(item?.startDate).format('DD/MM/YYYY')}
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-8  flex gap-8">
            <Link
              to={`/Details/${item?._id}`}
              class="btn btn-outline rounded-full btn-info "
            >
              View
            </Link>
            <div
              onClick={() => handleDelete(item?._id)}
              class=" btn btn-outline rounded-full cursor-pointer btn-error "
            >
              Delete
            </div>
            <Link
              to={`/Update/${item?._id}`}
              class="btn btn-outline rounded-full cursor-pointer btn-success "
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentCard