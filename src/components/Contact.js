import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';
function Contact(props) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={props.avatar} 
        alt={props}
      />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div className={props.online ? 'status-online' : 'status-offline'}/>
          <p className="status-text">{props.online? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
}
Contact.propTypes = {
    ContactAvatar: PropTypes.string.isRequired,
    ContactName: PropTypes.string.isRequired,
    ContactOnline: PropTypes.string.isRequired,
};
export default Contact;
