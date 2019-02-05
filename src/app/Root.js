import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import { Route, Switch, Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

import RouterScrollToTop from '../packages/router-scroll-to-top';
import { GlobalSpinnerProvider } from '../packages/spinner';

// must be first
import { store, history } from './store/configureStore';
import StorePersistGate from './store/StorePersistGate';
// order matters
import IsLoggedIn from '../common/services/user/guards/IsLoggedIn';
import { ErrorBoundary, NotFound, Spin } from '../common/components';
import AuthRoutes, { ROUTE_PATHS as AUTH_ROUTE_PATHS } from '../features/auth/routes';

export const ROUTE_PATHS = {
  root: '/',
};

const Root = () => (
  <ErrorBoundary>
    <LocaleProvider locale={enUS}>
      <Provider store={store}>
        <StorePersistGate>
          <ConnectedRouter history={history}>
            <RouterScrollToTop>
              <GlobalSpinnerProvider>
                {({ isVisible }) => (
                  <Spin spinning={isVisible} size="large">
                    <Switch>
                      <Route
                        exact
                        path={ROUTE_PATHS.root}
                        component={IsLoggedIn(() => (
                          <Link to={AUTH_ROUTE_PATHS.logout}>
                            <Trans i18nKey="logout">Logout</Trans>
                          </Link>
                        ))}
                      />
                      <AuthRoutes />
                      <Route component={NotFound} />
                    </Switch>
                  </Spin>
                )}
              </GlobalSpinnerProvider>
            </RouterScrollToTop>
          </ConnectedRouter>
        </StorePersistGate>
      </Provider>
    </LocaleProvider>
  </ErrorBoundary>
);

export default Root;