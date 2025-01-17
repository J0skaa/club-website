import React from "react";

const contacts = [
  {
    name: "id. Széplaki József",
    title: "Elnök",
    phone: "+36 30 389 66 26",
    email: "andrea.szplaki28@gmail.com",
    image: "../assets/szeplakijozsef.jpg",
  },
  {
    name: "Triff Gergely",
    title: "Felnőtt vezetőedző",
    phone: "+36 30 328 5558",
    email: "triffgeri13@gmail.com",
    image: "../assets/triffgergely.jpg",
  },
  {
    name: "ifj. Széplaki József",
    title: "Edző, technikai vezető",
    phone: "+36 30 773 7978",
    email: "szeplaki.jozsef97@gmail.com",
    image: "../assets/ifjszeplakijozsef.jpg",
  },
];

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Kapcsolatok</h1>
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
              📞 <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </p>
            <p>
              ✉️ <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
