import React from 'react';
import './compo.css';

function Contact(){
    return(
    <div className="Contact">
        <img className =" avatar" alt='' src='https://randomuser.me/api/portraits/women/17.jpg'/>
        <div>
            <h4 className =" name">
            Erika Perry
            </h4>
            <div className="status">
                <div className="  status-online"></div>
                <p className="  status-text">
                online
                </p>
            </div>    
        </div>
    </div>
    );
}

export default Contact;
