import React from 'react';
import './Footer.css'


const Footer = () => {
	return (
		<div>
			<footer className="text-white bg-dark position-footer">
                <h2>You can find us at..</h2>
                <br />
                <h1><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i> <i className="fab fa-twitter-square"></i></h1>
                <br />
                <p>Copyright 2021</p>
            </footer>

		</div>
	);
};

export default Footer;