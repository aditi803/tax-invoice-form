const ApiPath = {
  // CREATE_USER: '/api/users',
  // PATCH_USER: '/api/users/2',
  // DELETE_USER: '/api/users/2',

  AuthApiPath: {
    SIGNUP_USER: "/api/v1/users/signup",
    LOGIN_USER: "api/v1/users/login",
    FORGET_PASSWORD_USER: "/api/v1/users/forgot-password",
    CHANGE_PASSWORD: "/api/v1/users/change-password",
    RESET_PASSWORD: "/api/v1/users/reset-password",
    VERIFY_EMAIL: "/api/v1/users/reset-password",
    RESET_OTP: "/api/v1/users/reset-password",
    USER_INFO: "/api/v1/users/user-info",
    UPLOAD_IMAGE: "/api/v1/users/user-info",
  },

  DashboardApiPath: {
    GET_ALL_POST: "/api/v1/post",
    GET_ALL_DASHBOARD_DATA: "/api/v1/dashboard/index",
    ADD_POST: "/api/v1/post/add",
    EDIT_POST: "/api/v1/post/update",
    LIKE_POST: "/api/v1/post/like",
    POST_LIKE_USER_LIST: "/api/v1/post/like/list",
    COMMENT_POST: "/api/v1/post/comment",
    ATTACHMENT_UPLOAD: "/api/v1/user_photos/upload",
    POST_ALL_COMMENT_LIST: "api/v1/post/get_comments",
    NESTED_COMMENT_LIST: "api/v1/post/nested_comments",
    LIKE_COMMENT: "/api/v1/comment_like",
    DASHBOARD_POST_OPPORTUNITY: "/api/v1/post_opportunity/my",
    POST_FEATURE: "api/v1/post/feature",
    PENDING_ENDORSEMENT: "api/v1/endorsement/endorsement-list-to-approve",
    UPDATE_STATUS_ENDORSEMENT: "/api/v1/endorsement/update-status",
    ALL_USER_WITH_SEARCH: `/api/v1/users/all`,
    USER_UPDATE_PROFILE_STATUS: "/api/v1/users/update/status",
    GET_SINGLE_POST: "/api/v1/post/by_id",
  },
};

export default ApiPath;
