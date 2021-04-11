import { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import {
  getContactsSelector,
  isLoadingSelector,
} from '../redux/phoneBook/selectors';
import { fetchContacts } from '../redux/phoneBook/operations';

class Phonebook extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const contacts = this.props.contacts;

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm />

        <h2 className="title">Contacts</h2>
        {contacts.length > 1 ? <Filter /> : null}

        {contacts.length < 1 && (
          <p className="title">You don't have contacts </p>
        )}
        <ContactsList />
        {this.props.isLoading && <h1 className="title">Loading...</h1>}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getContactsSelector(state),
    isLoading: isLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
