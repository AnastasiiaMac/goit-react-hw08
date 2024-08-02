import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts) || [];
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
