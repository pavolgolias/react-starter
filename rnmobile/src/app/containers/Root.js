import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  prepareRequestInterceptor,
  handleResponsesInterceptor,
} from '../../common/services/apiClient';
import { relogin } from '../../features/auth/ducks';
import { Spinner } from '../../features/spinner/components';
import configureStore from '../store/configureStore';
import App from './App';

export default class Root extends Component {
  state = {
    store: undefined,
  };

  componentWillMount() {
    this.initStore().then(store => this.setState({ store }));
  }

  async initStore() {
    const store = await configureStore();

    prepareRequestInterceptor(store);
    handleResponsesInterceptor(store);

    const state = store.getState();

    if (state && state.auth) {
      store.dispatch(relogin(state.auth));
    }

    return store;
  }

  render() {
    const { store } = this.state;

    if (!store) {
      return <Spinner large />;
    }

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
