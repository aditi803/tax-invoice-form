// import { all, call, put, takeLatest } from 'redux-saga/effects'
// import { ApiClient } from '../../../utilities/api';
// import { onErrorStopLoad, setAllDashboardData, setAllPost, setImageUplaod, setUserPost,setUserPostLike,setUserPostComment, setAllPostComment, setGetDashboardOpportunity, setPostFeature, setGetPendingEndorsement, setUpdateEndorsementsRequest, setAllUserWithSearch,setUpdateUserProfileStatus, setPostUserLikeList, setPostImageUplaod, setDisableEnableComment, setDeletePost, setPostSingleDetails, setEditPost, setCommentLike, setNestedComments, setPaymentSession, setVerifySession, setMemberShipPlans} from '../../slices/dashboard';
// import ApiPath from '../../../constants/apiPath';
// import { toast } from 'react-toastify';
// import { updateUserStep } from '../../slices/auth';

// // Worker saga will be fired on USER_FETCH_REQUESTED actions
// function* getAllPosts(action) {
//   try {                                                     
//     const resp = yield call(ApiClient.get, action.url = `${ApiPath.DashboardApiPath.GET_ALL_POST}?page=${action.payload.page}&limit=${action.payload.limit}`, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setAllPost(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setAllPost({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* userPosts(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.DashboardApiPath.ADD_POST, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setUserPost(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUserPost({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* userPostLike(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.DashboardApiPath.LIKE_POST, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setUserPostLike(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUserPostLike({}));
//     yield put(onErrorStopLoad())
//     // toast.error(e.response.data.msg);
//   }
// }

// function* PostUserLikeListData(action) {
//   try {
//     const resp = yield call(ApiClient.get, action.url =`${ApiPath.DashboardApiPath.POST_LIKE_USER_LIST}/${action.payload.id}`,
//       action.payload = action.payload);
//     if (resp.status) {
//       yield put(setPostUserLikeList(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setPostUserLikeList({}));
//     yield put(onErrorStopLoad())
//     // toast.error(e.response.data.msg);
//   }
// }

// function* userPostComment(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.DashboardApiPath.COMMENT_POST, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setUserPostComment(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUserPostComment({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* getAllDashboardData(action) {
//   try {
//     const resp = yield call(ApiClient.get, action.url = ApiPath.DashboardApiPath.GET_ALL_DASHBOARD_DATA, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setAllDashboardData(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setAllDashboardData({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// // Worker saga will be fired on USER_FETCH_REQUESTED actions
// function* userPostImageUpload(action) {
//   try {
//     const resp = yield call(ApiClient.postFormData, action.url = ApiPath.DashboardApiPath.ATTACHMENT_UPLOAD, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setPostImageUplaod(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setPostImageUplaod({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* allPostCommentList(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb
//     delete dataToSend.id

//     const resp = yield call(ApiClient.get, action.url = `${ApiPath.DashboardApiPath.POST_ALL_COMMENT_LIST}/${action.payload.id}`, action.params = {params:dataToSend});
//     if (resp.status) {
//       yield put(setAllPostComment(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setAllPostComment({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* dashboardPostOpportunities(action) {
//   try {
//     const resp = yield call(ApiClient.get, action.url = `${ApiPath.DashboardApiPath.DASHBOARD_POST_OPPORTUNITY}?page=${action.payload.page}&limit=${action.payload.limit}`, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setGetDashboardOpportunity(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setGetDashboardOpportunity({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* PendingEndorsement(action) {
//   try {
//     const resp = yield call(ApiClient.get, action.url = `${ApiPath.DashboardApiPath.PENDING_ENDORSEMENT}`, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setGetPendingEndorsement(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setGetPendingEndorsement({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* UpdateEndorsements(action) {
//   try {
//     const resp = yield call(ApiClient.patch, action.url = `${ApiPath.DashboardApiPath.UPDATE_STATUS_ENDORSEMENT}/${action.payload.id}`, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setUpdateEndorsementsRequest(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUpdateEndorsementsRequest({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* postFeatures(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.DashboardApiPath.POST_FEATURE, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setPostFeature(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setPostFeature({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* AllUserWithSearch(action) {
//   try {
//     const resp = yield call(ApiClient.get, action.url = `${ApiPath.DashboardApiPath.ALL_USER_WITH_SEARCH}${action.payload.search ? `?search=${action.payload.search}`  : ""}`  , action.payload = action.payload);
//     if (resp.status) {
//       yield put(setAllUserWithSearch(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setAllUserWithSearch({}));
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }

// function* userUpdateProfileStatus(action) {
//   try {
//     const resp = yield call(ApiClient.patch, action.url = ApiPath.DashboardApiPath.USER_UPDATE_PROFILE_STATUS, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setUpdateUserProfileStatus(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUpdateUserProfileStatus({}));
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }

// function* editPost(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb
//     delete dataToSend.id

//     const resp = yield call(ApiClient.patch, action.url = ApiPath.DashboardApiPath.EDIT_POST+"/"+action.payload.id , action.params = dataToSend);
//     if (resp.status) {
//       yield put(setEditPost(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setEditPost());
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }

// function* likeComment(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb
  
//     const resp = yield call(ApiClient.post, action.url = ApiPath.DashboardApiPath.LIKE_COMMENT , action.params = dataToSend);
//     if (resp.status) {
//       yield put(setCommentLike(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setCommentLike());
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }

// function* getNestedComments(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb
//     delete dataToSend.id

//     const resp = yield call(ApiClient.get, action.url = ApiPath.DashboardApiPath.NESTED_COMMENT_LIST+"/"+action.payload.id , action.params = {params:dataToSend} );
//     if (resp.status) {
//       yield put(setNestedComments(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setNestedComments());
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }

// function* deletePost(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb

//     const resp = yield call(ApiClient.delete, action.url = ApiPath.DashboardApiPath.GET_ALL_POST+"/"+action.payload.id , action.params = {});
//     if (resp.status) {
//       yield put(setDeletePost(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       //toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUpdateUserProfileStatus({}));
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }

// function* getPostSingleDetails(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb

//     const resp = yield call(ApiClient.get, action.url = ApiPath.DashboardApiPath.GET_SINGLE_POST+"/"+action.payload.id , action.params = {});
//     if (resp.status) {
//       yield put(setPostSingleDetails(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       //toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }

//   } catch (e) {
//     yield put(setPostSingleDetails());
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }

// function* enableDisableComment(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb

//     const resp = yield call(ApiClient.patch, action.url = ApiPath.DashboardApiPath.GET_ALL_POST+"/"+action.payload.id , action.params = dataToSend);
//     if (resp.status) {
//       yield put(setDisableEnableComment(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUpdateUserProfileStatus({}));
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }


// function* getPaymentSession(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb

//     const resp = yield call(ApiClient.post, action.url = ApiPath.Payments.GET_PAYMENT_SESSION , action.params = dataToSend);
//     if (resp.status) {

//       yield put(setPaymentSession());
//       yield call(action.payload.cb, action.res = resp)

//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setPaymentSession());
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }


// function* verifySession(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb

//     const resp = yield call(ApiClient.post, action.url = ApiPath.Payments.VERIFY_SESSION , action.params = dataToSend);
//     if (resp.status) {

//       yield put(setVerifySession());
//       yield put(updateUserStep(resp.data?.payload?.data))
//       yield call(action.payload.cb, action.res = resp)

//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setVerifySession());
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }


// function* getMemberShipPlans(action) {
//   try {

//     const dataToSend = {...action.payload}
//     delete dataToSend.cb

//     const resp = yield call(ApiClient.get, action.url = ApiPath.Payments.GET_MEMBERSHIP_PLANS , action.params = {params:dataToSend});
//     if (resp.status) {

//       yield put(setMemberShipPlans());
//       yield call(action.payload.cb, action.res = resp)
    
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setMemberShipPlans());
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }





// function* userDashboard() {
//   yield all([
//     takeLatest('dashboard/allPostList', getAllPosts),
//     takeLatest('dashboard/allDashboardData', getAllDashboardData),
//     takeLatest('dashboard/userPost', userPosts),
//     takeLatest('dashboard/userPostLike', userPostLike),
//     takeLatest('dashboard/postUserLikeList', PostUserLikeListData),
//     takeLatest('dashboard/userPostComment', userPostComment),
//     takeLatest('dashboard/postImageUplaod', userPostImageUpload),
//     takeLatest('dashboard/allPostComment', allPostCommentList),
//     takeLatest('dashboard/getDashboardOpportunity', dashboardPostOpportunities),
//     takeLatest('dashboard/getPendingEndorsement', PendingEndorsement),
//     takeLatest('dashboard/updateEndorsementsRequest', UpdateEndorsements),
//     takeLatest('dashboard/postFeature', postFeatures),
//     takeLatest('dashboard/allUserWithSearch', AllUserWithSearch),
//     takeLatest('dashboard/updateUserProfileStatus', userUpdateProfileStatus),
//     takeLatest('dashboard/disableEnableComment', enableDisableComment),
//     takeLatest('dashboard/deletePost', deletePost),
//     takeLatest('dashboard/getPostSingleDetails', getPostSingleDetails),
//     takeLatest('dashboard/editPost', editPost),
//     takeLatest('dashboard/commentLike', likeComment),  
//     takeLatest('dashboard/getNestedComments', getNestedComments),
//     takeLatest('dashboard/getPaymentSession', getPaymentSession),
//     takeLatest('dashboard/verifySession', verifySession),
//     takeLatest('dashboard/getMemberShipPlans', getMemberShipPlans)


    
         
//   ])
// }

// export default userDashboard;