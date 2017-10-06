<<<<<<< HEAD
import * as types from '../constants';
import ApiFailAction from './api_fail_action.js';
import API from '../utils/api.js';
=======
import * as types from "../constants";
import ApiFailAction from "./api_fail_action.js";
import API from "../utils/api.js";
>>>>>>> 88b91d354bf998f22f5095d0450e44f1f932e484

// This action uses the Thunk middleware pattern: instead of returning a plain
// action object, it returns a function that takes the store dispatch fucntion —
// which Thunk automatically provides — and can then dispatch a series of plain
// actions to be handled by the store.
// This is how actions with side effects — such as API calls — are handled in
// Redux.
export function submitNeedHelpAlert(data) {
  return function (dispatch) {
    dispatch({ type: types.NEED_HELP_ALERT_SUBMITTED });
<<<<<<< HEAD
    return API.createNeedHelpAlert(data)
      .then(() => (dispatch({ type: types.NEED_HELP_ALERT_CREATED })))
      // TODO: The Flux stores still handle API failures, so we delegate to a
      // Flux action. Once all API_FAIL actions can be handled by Redux, we can
      // replace this with a regular action dispatch.
      .catch(response => (ApiFailAction.fail(response)));
=======
    return (
      API.createNeedHelpAlert(data)
        .then(() => dispatch({ type: types.NEED_HELP_ALERT_CREATED }))
        // TODO: The Flux stores still handle API failures, so we delegate to a
        // Flux action. Once all API_FAIL actions can be handled by Redux, we can
        // replace this with a regular action dispatch.
        .catch(response => ApiFailAction.fail(response))
    );
>>>>>>> 88b91d354bf998f22f5095d0450e44f1f932e484
  };
}

export const resetNeedHelpAlert = () => ({ type: types.RESET_NEED_HELP_ALERT });
