import { connect } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { getUsername } from '../../redux/auth/authSelectors';

const UserMenu = ({ name, onLogout }) => (
  <div className="div">
    <span className="span">Welcome, {name}</span>
    <button type="button" className="logoutButton" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
