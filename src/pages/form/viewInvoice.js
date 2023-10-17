import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { singleInvoice } from '../../redux/slices/invoice'
import { useDispatch } from 'react-redux'
import {toast} from "react-toastify"

const ViewInvoice = () => {

    const [data, setData] = useState("")
    const location = useLocation()
    const dispatch = useDispatch()
    const invoiceId = location ? location?.state?.invoiceId : ""

    const getSingleInvoiceDetail = () => {
        let params = {
            id:invoiceId
        }
        dispatch(singleInvoice({
          ...params, cb(res) {
            if (res.status) {
              // setData() 
              // setPhotoUpload(res?.data?.payload?.url);
              // setPhotoInfo(res?.data?.payload)
            //   setData()
            }
            else {
              toast.error("Error in dispatch");
            }
          }
        }))
      }

      useEffect(() => {
        getSingleInvoiceDetail()
      },[])

  return (
    <div>ViewInvoice</div>
  )
}

export default ViewInvoice