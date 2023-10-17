import React, { useDebugValue, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { allInvoice, deleteInvoice } from '../../redux/slices/invoice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import "../../styles/listing.css"
import { useNavigate } from 'react-router';
import { fullDateFormat } from '../../common/utility';
import {toast} from "react-toastify"

const Documents = () => {
  const [data, setData] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const columns = [
  //   {
  //     name: 'ID',
  //     selector: 'id',
  //     sortable: true,
  //   },
  //   {
  //     name: 'Name',
  //     selector: 'name',
  //     sortable: true,
  //   },
  //   {
  //     name: 'Email',
  //     selector: 'email',
  //     sortable: true,
  //   },
  //   {
  //     name: "Actions",
  //     selector: row => (
  //       <>
  //         <div className='actionBtns'>
  //           <div className='actionBTN me-2'
  //             onClick={() => {
  //               navigate('/edit-invoice', { invoiceId: row._id })
  //             }}
  //           >
  //             <i className="fas fa-pen"
  //             >
  //               <p>Edit</p>
  //             </i>
  //           </div>
  //           <div className='actionBTN me-2' onClick={() => {
  //             handleDeleteProduct(row._id)
  //           }}>
  //             <i className="fas fa-trash"
  //             >
  //               <p>Delete</p>
  //             </i>
  //           </div>
  //           <div className='actionBTN'
  //             onClick={() => {
  //               navigate('/view-invoice', { invoiceId: row._id })
  //             }}
  //           >
  //             <i className="fas fa-eye" >
  //               <p>View</p>
  //             </i>
  //           </div>
  //         </div>
  //       </>
  //     ),
  //     width: '200px'
  //   },
  // ];


  const handleDeleteProduct = (invoiceId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms, proceed with the delete operation
        let params = {
          id: invoiceId,
          // token: props.auth.token,
        }
        dispatch(deleteInvoice({
          ...params, cb(res) {
            if (res.status) {
              allInvoices()
            }
            else {
              toast.error("Error occured");
            }
          }
        }))
      }
    });

  }

  const columns = [
    {
      name: "Sr. No.",
      selector: (row, index) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: row => row.name,
      // selector: "productName",
    },
    {
      name: "Created On",
      selector: row => fullDateFormat(row.created_at),
      // selector: "productName",
    },
    {
      name: "Invoice Date",
      selector: row => row.invoiceDate ? fullDateFormat(row.invoiceDate) : "N/A",
      // selector: "productName",
    },
    {
      name: "Due Date",
      selector: row => row.dueDate ? fullDateFormat(row.dueDate) : "N/A",
      // selector: "productName",
    },
    {
      name: "Actions",
      selector: row => (
        <>
          <div className='actionBtns'>
            <div className='actionBTN me-2'
              onClick={() => {
                navigate('/edit-invoice', { invoiceId: row._id })
              }}
            >
              <i class="fas fa-pen"
              >
                Edit
              </i>
            </div>
            <div className='actionBTN me-2' onClick={() => {
              handleDeleteProduct(row.id)
            }}>
              <i class="fas fa-trash"
              >
                Delete
              </i>
            </div>
            <div className='actionBTN'
              onClick={() => {
                navigate('/view-invoice', { invoiceId: row._id })
              }}
            >
              <i class="fas fa-eye" >View</i>
            </div>
          </div>
        </>
      ),
      width: '200px'
    },
  ]

  const obj = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    // Add more data objects here
  ];



  const allInvoices = () => {
    let params = {

    }
    dispatch(allInvoice({
      ...params, cb(res) {
        if (res.status) {
          setData(res?.data?.data)
          // setPhotoUpload(res?.data?.payload?.url);
          // setPhotoInfo(res?.data?.payload)
          // setData()
        }
        else {
          toast.error("Error in dispatch");
        }
      }
    }))
  }


  useEffect(() => {
    allInvoices()
    // setData(obj)
  }, [])

  return (
    <div className='container'>
      <h3>All saved documents</h3>

      <DataTable
        striped
        columns={columns}
        data={data}
      />
    </div>
  )
}

export default Documents