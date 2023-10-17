import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { singleInvoice, updateInvoice } from '../../redux/slices/invoice'
import { useDispatch } from 'react-redux'
import {toast} from "react-toastify"

const EditInvoice = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const invoiceId = location ? location?.state?.invoiceId : ""

    const getSingleInvoiceDetail = () => {
        let params = {
            id: invoiceId
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
                    toast.error("Error occured");
                }
            }
        }))
    }

    const handleUpdateInvoice = (e) => {
        e.preventDefault()
        let params = {
            id: invoiceId
        }
        dispatch(updateInvoice({
            ...params, cb(res) {
                if (res.status) {

                    // setData() 
                    // setPhotoUpload(res?.data?.payload?.url);
                    // setPhotoInfo(res?.data?.payload)
                    //   setData()
                }
                else {
                   toast.error("Error occured");
                }
            }
        }))
    }

    useEffect(() => {
        getSingleInvoiceDetail()
    }, [])

    return (
        <div>
            <p>Edit invoice</p>
            <button onClick={(e) => handleUpdateInvoice(e)}>Update</button>
        </div>
    )
}

export default EditInvoice