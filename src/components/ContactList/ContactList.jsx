import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ onDeleteUser, contacts, filter }) => {
  return (
    <ul>
      {filter
        ? contacts
            .filter(contact => contact.name.toLowerCase().includes(filter))
            .map(contact => (
              <ContactItem
                onDeleteUser={onDeleteUser}
                key={contact.id}
                contact={contact}
              />
            ))
        : contacts.map(contact => (
            <ContactItem
              onDeleteUser={onDeleteUser}
              key={contact.id}
              contact={contact}
            />
          ))}
    </ul>
  );
};
