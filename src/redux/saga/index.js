// import userSaga from "./user";
import { all, fork, spawn } from "redux-saga/effects";
import authSaga from "./auth";
// import dashboardSaga from "./dashboard";
import invoiceSaga from "./invoice";

export default function* rootSaga() {
    yield all([
        // spawn(userSaga),
        spawn(authSaga),
        // spawn(dashboardSaga),
        spawn(invoiceSaga),
        // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        // fork(saga2),
    ]);
}
