import createApiClient from '../../packages/api-client';
import { startApiCallAction, finishApiCallAction } from '../../packages/spinner';

import { store } from '../../app/store/configureStore';

import { selectToken, logoutAction } from './user';
import AlertService from './alert';

export default createApiClient({
  axiosConfig: {
    baseURL: process.env.REACT_APP_API_URL,
  },
  selectToken: () => selectToken(store.getState()),
  onApiCallStart: apiCallId =>
    store.dispatch(
      startApiCallAction({
        apiCallId,
      })
    ),
  onApiCallFinish: apiCallId =>
    store.dispatch(
      finishApiCallAction({
        apiCallId,
      })
    ),
  onError: error => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logoutAction());
    }

    showErrorMessage(error);
  },
});

function showErrorMessage(error) {
  const errorMsg = extractErrorMsg(error);

  if (Array.isArray(errorMsg)) {
    errorMsg.forEach(err => AlertService.error(`${err}`, 5));
  } else {
    AlertService.error(`${errorMsg}`);
  }
}

function extractErrorMsg(error) {
  return error.response && error.response.data
    ? error.response.data.message || error.response.data.error.inner
    : error;
}