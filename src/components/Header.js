import React from 'react';

const Header = ({ setActivePage, activePage }) => {
    const container = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        margin: '0 auto'        
    };

    const ulStyle = {
        display: 'flex',
        listStyleType: 'none',
        width: '300px',
        justifyContent: 'space-between',
    };

    const handleItemClick = (itemName) => {
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
                        style={liStyle('About')}
                        onClick={() => handleItemClick('About')}>
                        Skills
                    </li>
                    <li
                        style={liStyle('Contact')}
                        onClick={() => handleItemClick('Contact')}
                    >
                        Projects
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
