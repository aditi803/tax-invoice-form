import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPost: {},
  allDashboardData: {},
  dashboardOpportunity: {},
  postFeature: {},
  savedReduxAllData: {},
  updateUserProfileStatus: {},
  loading: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    allPostList: (state) => {
      state.loading = true;
    },
    setAllPost: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },
    allDashboardData: (state) => {
      state.loading = true;
    },
    setAllDashboardData: (state, action) => {
      state.loading = false;
      state.allDashboardData = action.payload;
    },
    userPost: (state) => {
      state.loading = true;
    },
    setUserPost: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },
    userPostLike: (state) => {
      state.loading = true;
    },
    setUserPostLike: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },
    userPostComment: (state) => {
      state.loading = true;
    },
    setUserPostComment: (state, action) => {
      state.loading = false;
    },
    imageUplaod: (state) => {
      state.loading = true;
    },
    allPostComment: (state) => {
      state.loading = true;
    },
    setAllPostComment: (state) => {
      state.loading = false;
    },
    getDashboardOpportunity: (state) => {
      state.loading = true;
    },
    setGetDashboardOpportunity: (state, action) => {
      state.loading = false;
      state.dashboardOpportunity = action.payload;
    },
    postFeature: (state) => {
      state.loading = true;
    },
    setPostFeature: (state, action) => {
      state.loading = false;
      state.postFeature = action.payload;
    },
    setImageUplaod: (state, action) => {
      state.loading = false;
    },
    postImageUplaod: (state) => {
      state.loading = true;
    },
    setPostImageUplaod: (state, action) => {
      state.loading = false;
    },
    getPendingEndorsement: (state) => {
      state.loading = false;
    },
    setGetPendingEndorsement: (state, action) => {
      state.loading = true;
    },
    updateEndorsementsRequest: (state) => {
      state.loading = false;
    },
    setUpdateEndorsementsRequest: (state, action) => {
      state.loading = true;
    },
    allUserWithSearch: (state) => {
      state.loading = false;
    },
    setAllUserWithSearch: (state, action) => {
      state.loading = true;
    },
    updateUserProfileStatus: (state) => {
      state.loading = false;
    },
    setUpdateUserProfileStatus: (state, action) => {
      state.loading = true;
      state.updateUserProfileStatus = action.payload;
    },
    postUserLikeList: (state) => {
      state.loading = false;
    },
    setPostUserLikeList: (state, action) => {
      state.loading = true;
    },
    disableEnableComment: (state) => {
      state.loading = true;
    },
    setDisableEnableComment: (state) => {
      state.loading = false;
    },
    getPostSingleDetails: (state) => {
      state.loading = true;
    },
    setPostSingleDetails: (state) => {
      state.loading = false;
    },
    deletePost: (state) => {
      state.loading = true;
    },
    setDeletePost: (state) => {
      state.loading = false;
    },
    editPost: (state) => {
      state.loading = true
    },
    setEditPost: (state) => {
      state.loading = false
    },
    commentLike: (state) => {
      state.loading = true
    },
    setCommentLike: (state) => {
      state.loading = false
    },
    getNestedComments: (state) => {
      state.loading = true
    },
    setNestedComments: (state) => {
      state.loading = false
    },
    getPaymentSession: (state) => {
      state.loading = true
    },
    setPaymentSession: (state) => {
      state.loading = false
    },
    verifySession: (state) => {
      state.loading = true
    },
    setVerifySession: (state) => {
      state.loading = false
    },
    getMemberShipPlans: (state) => {
      state.loading = true
    },
    setMemberShipPlans: (state) => {
      state.loading = false
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  allPostList,
  setAllPost,
  allDashboardData,
  setAllDashboardData,
  userPost,
  setSavedReduxData,
  setUserPost,
  userPostLike,
  setUserPostLike,
  userPostComment,
  setUserPostComment,
  imageUplaod,
  setImageUplaod,
  allPostComment,
  setAllPostComment,
  getDashboardOpportunity,
  setGetDashboardOpportunity,
  postFeature,
  setPostFeature,
  getPendingEndorsement,
  setGetPendingEndorsement,
  updateEndorsementsRequest,
  setUpdateEndorsementsRequest,
  allUserWithSearch,
  setAllUserWithSearch,
  updateUserProfileStatus,
  setUpdateUserProfileStatus,
  postUserLikeList,
  setPostUserLikeList,
  postImageUplaod,
  setPostImageUplaod,
  disableEnableComment,
  setDisableEnableComment,
  deletePost,
  setDeletePost,
  getPostSingleDetails,
  setPostSingleDetails,
  editPost,
  setEditPost,
  commentLike,
  setCommentLike,
  getNestedComments,
  setNestedComments,
  getPaymentSession,
  setPaymentSession,
  verifySession,
  setVerifySession,
  getMemberShipPlans,
  setMemberShipPlans,
  onErrorStopLoad,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
