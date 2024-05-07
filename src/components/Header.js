import React from 'react';

const Header = ({ setActivePage, activePage, handleSetActivePage }) => {
    const container = {
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        padding: '10px 20px',
        zIndex: 5,
        height: '100px',
    };

    const innerDiv = {
        width: '80%',
        display: 'flex',
        height: '100px',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto'
    }

    const ulStyle = {
        display: 'flex',
        listStyleType: 'none',
        width: '300px',
        justifyContent: 'space-between',
    };

    const handleItemClick = (itemName) => {
        if (itemName === 'Home') {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
        } else {

            handleSetActivePage(itemName);
        }
        setActivePage(itemName);
    };

    const liStyle = (itemName) => ({
        cursor: 'pointer',
        fontSize: '20px',
        color: activePage === itemName ? 'white' : 'lightblue',
        fontWeight: activePage === itemName ? 700 : 400,
    });

    return (
        <div style={container}>
            <div style={innerDiv}>
                <div>
                    <h2>LOGO</h2>
                </div>
                <div>
                    <ul style={ulStyle}>
                        <li
                            style={liStyle('Home')}
                            onClick={() => handleItemClick('Home')}>
                            Home
                        </li>
                        <li
                            style={liStyle('Skills')}
                            onClick={() => handleItemClick('Skills')}>
                            Skills
                        </li>
                        <li
                            style={liStyle('Projects')}
                            onClick={() => handleItemClick('Projects')}
                        >
                            Projects
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
