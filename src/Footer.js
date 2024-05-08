import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p style={{marginTop: '20px'}}>&copy; 2024 My Website</p>
        </footer>
    );
};

const footerStyle = {
    'background': 'linear-gradient(to right bottom, rgb(3, 3, 61), rgb(96, 3, 96) 75%)',
    'background': 'rgb(96, 3, 96)',
    color: '#fff',
    textAlign: 'right',
    padding: '3rem',     
    left: 0,
    bottom: 0,
    width: '100%',
};

export default Footer;