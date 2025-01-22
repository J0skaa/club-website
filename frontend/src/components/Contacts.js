import useFetch from "../useFetch";

const Contacts = () => {
  const { data: contacts, error } = useFetch(
    "http://localhost:5000/api/contacts"
  );

  return (
    <div className="contact-page">
      {error ? (
        <div>An error occurred: {error}</div>
      ) : !contacts ? (
        <div>Loading...</div>
      ) : (
        <div className="contacts">
          {contacts.map((contact, index) => (
            <div className="contact-card" key={index}>
              <img
                src={contact.image}
                alt={contact.name}
                className="contact-image"
              />
              <h2>{contact.name}</h2>
              <p>{contact.title}</p>
              <p>
                📞 <a href={`tel:${contact.phone}`}>+{contact.phone}</a>
              </p>
              <p>
                ✉️ <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contacts;
