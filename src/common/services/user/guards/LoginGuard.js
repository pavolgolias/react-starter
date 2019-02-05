import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { routerActions } from 'connected-react-router';

import { ROUTE_PATHS } from '../../../../app/Root';

import { selectIsLoggedIn, selectIsAuthenticating } from '../';

const locationHelper = locationHelperBuilder({});

export default connectedReduxRedirect({
  allowRedirectBack: false,
  authenticatedSelector: state => !selectIsLoggedIn(state),
  authenticatingSelector: selectIsAuthenticating,
  redirectAction: routerActions.replace,
  redirectPath: (state, props) => locationHelper.getRedirectQueryParam(props) || ROUTE_PATHS.root,
  wrapperDisplayName: 'LoginGuard',
});