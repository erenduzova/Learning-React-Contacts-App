import React from "react";

import Card from "./Card.jsx";
import contacts from "../contacts.js";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4E03AQHgUV-N80Vpmw/profile-displayphoto-shrink_200_200/0/1581514808020?e=1659571200&v=beta&t=qK2ySDu-ZS6M36AjyDM0v-w813XezERVrzMJYrygnAs" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
