import { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import MyButton from '../components/MyButton/MyButton';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="div">
        <h1 className="title">Phonebook</h1>

        <form onSubmit={this.handleSubmit} className="form" autoComplete="off">
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              placeholder="name:"
              onChange={this.handleChange}
            />
          </label>

          <label className="label">
            E-mail
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              placeholder="e-mail:"
              onChange={this.handleChange}
            />
          </label>

          <label className="label">
            Password
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              placeholder="password:"
              onChange={this.handleChange}
            />
          </label>
          <MyButton
            style="button"
            disable={email === '' || password === '' ? true : false}
            value="Sign in"
            handleClick={() => {}}
          />

          {/* <button type="submit" className="button">
            Sign up
          </button> */}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
