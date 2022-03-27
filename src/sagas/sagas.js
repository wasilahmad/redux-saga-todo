import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_TODOS, FETCH_TODOS_SUCCESS } from "../constants/action-types";

/* HELPER FUCNTION DEFINITION */
// call: Just as in Redux you use action creators to create a plain object describing the action that will get executed by the Store, call creates a plain object describing the function call. The redux-saga middleware takes care of executing the function call and resuming the generator with the resolved response.
// put: The library provides, another function "put" which creates the dispatch Effect.
// takeEvery: takeEvery allows multiple fetchtTodos() instances to be started concurrently. At a given moment, we can start a new fetchtTodos() task while there are still one or more previous fetchtTodos tasks which have not yet terminated
// takeLatest: If we want to only get the response of the latest request fired (e.g. to always display the latest version of data) we can use the takeLatest helper


const BASE_URL = "https://my-json-server.typicode.com/wasilahmad/redux-saga-todo";
const headers = { "Content-Type": "application/json" };

function* fetchTodosFromAPI() {
    try {
        const todos = yield call(() =>
            fetch(`${BASE_URL}/todos`, {
                method: "GET"
            }).then(response => response.json())
        ); 
        console.log("fetchTodosFromAPI():", todos);    
        yield put({ type: FETCH_TODOS_SUCCESS, payload: { todos:todos }})
    } catch (e) {
        console.log(e.message)
    }
}

function* watchFetchTodos() {
    yield takeEvery(FETCH_TODOS, fetchTodosFromAPI);
}

const sagas = [watchFetchTodos()];

export default sagas;