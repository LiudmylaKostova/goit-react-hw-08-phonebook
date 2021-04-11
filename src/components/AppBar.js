import React from 'react';
import { connect } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
import { getIsAuthenticated } from '../redux/auth/authSelectors';

const AppBar = ({ isAuthenticated }) => (
  <header>{isAuthenticated ? <UserMenu /> : <AuthNav />}</header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
