import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiClient } from '../../../utilities/api';
// import ApiPath from '../../../constants/apiPath';
import ApiPath from "../../../constants/apiPath"
import { toast } from 'react-toastify';
import { onErrorStopLoad, setAddInvoice, setAllCountries, setDeleteInvoice, setInvoiceData, setSingleInvoice, setUpdateInvoice } from '../../slices/invoice';
// import { onErrorStopLoad, setAllDashboardData, setAllPost, setImageUplaod, setUserPost,setUserPostLike,setUserPostComment, setAllPostComment, setGetDashboardOpportunity, setPostFeature, setGetPendingEndorsement, setUpdateEndorsementsRequest, setAllUserWithSearch,setUpdateUserProfileStatus, setPostUserLikeList, setPostImageUplaod, setDisableEnableComment, setDeletePost, setPostSingleDetails, setEditPost, setCommentLike, setNestedComments, setPaymentSession, setVerifySession, setMemberShipPlans} from '../../slices/dashboard';

// import { updateUserStep } from '../../slices/auth';

// // Worker saga will be fired on USER_FETCH_REQUESTED actions
function* allCountries(action) {
  try {                                                     
    const resp = yield call(ApiClient.getStatic, action.url = "https://example.com/api/indian-states", action.payload = action.payload);
    if (resp.status) {
      yield put(setAllCountries(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setAllCountries({}));
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
  }
}

function* addInvoice(action) {
  try {
    const resp = yield call(ApiClient.post, action.url = ApiPath.InvoiceApiPath.ADD_INVOICE, action.payload = action.payload);
    if (resp.status) {
      yield put(setAddInvoice(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      // toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setAddInvoice({}));
    yield put(onErrorStopLoad())
    // toast.error(e.response.data.msg);
  }
}

function* updateInvoice(action) {
  try {
    const resp = yield call(ApiClient.put, action.url = ApiPath.InvoiceApiPath.UPDATE_INVOICE, action.payload = action.payload);
    if (resp.status) {
      yield put(setUpdateInvoice(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      // toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setUpdateInvoice({}));
    yield put(onErrorStopLoad())
    // toast.error(e.response.data.msg);
  }
}

function* singleInvoice(action) {
  try {
    const resp = yield call(ApiClient.get, action.url =`${ApiPath.InvoiceApiPath.SINGLE_INVOICE}/${action.payload.id}`,
      action.payload = action.payload);
    if (resp.status) {
      yield put(setSingleInvoice(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      // toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setSingleInvoice({}));
    yield put(onErrorStopLoad())
    // toast.error(e.response.data.msg);
  }
}


function* allInvoice(action) {
  try {
    const resp = yield call(ApiClient.get, action.url = ApiPath.InvoiceApiPath.ALL_INVOICE, action.payload = action.payload);
    if (resp.status) {
      // yield put(setAllDashboardData(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
    }
    else {
      throw resp
    }
  } catch (e) {
    // yield put(setAllDashboardData({}));
    yield put(onErrorStopLoad())
    // toast.error(e.response.data.msg);
  }
}

function* deleteInvoice(action) {
  try {

    const dataToSend = {...action.payload}
    delete dataToSend.cb

    const resp = yield call(ApiClient.delete, action.url = ApiPath.InvoiceApiPath.DELETE_INVOICE+"/"+action.payload.id , action.params = {});
    if (resp.status) {
      yield put(setDeleteInvoice(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      //toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setDeleteInvoice({}));
    // yield put(setUpdateUserProfileStatus({}));
    yield put(onErrorStopLoad())
    // toast.error(e?.response?.data?.msg);
  }
}

function* userInvoice() {
  yield all([
    
    takeLatest('invoice/addInvoice', addInvoice),
    takeLatest('invoice/updateInvoice', updateInvoice),
    takeLatest('invoice/singleInvoice', singleInvoice),
    takeLatest('invoice/allInvoice', allInvoice),
    takeLatest('invoice/deleteInvoice', deleteInvoice),
  ])
}

export default userInvoice;