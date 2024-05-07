import { useState } from "react";
import AllProjects from "./AllProjects";

const Projects = () => {

    const outerContainer = {
        backgroundColor: 'black',
        marginTop: '150px'
    }

    const containerStyle = {
        width: '80%',
        margin: '0 auto',
        textAlign: 'center',
        
    };

    const tabsContainerStyle = {
        ...containerStyle,
        border: '1px solid purple',
        borderRadius: '30px',
        display: 'flex',
        width: '65%',
        margin: '0 auto',
        marginTop: '50px', 
        marginBottom: '50px'
    };

    const tabStyle = {
        width: '33.33%',
        padding: '20px',
        cursor: 'pointer',
        borderRadius: '30px',
    };

    const activeTabStyle = {
        'background': 'linear-gradient(to right bottom, rgb(3, 3, 61), rgb(96, 3, 96) 75%)',
        'color': 'white',
    };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const generateTab = (index, label) => {
        return (
            <div
                key={index}
                onClick={() => handleTabClick(index)}
                style={{
                    ...tabStyle,
                    ...(activeTab === index && activeTabStyle),
                }}
            >
                {label}
            </div>
        );
    };

    return (
        <div style={outerContainer}>
        <div style={containerStyle}>
            <h1 style={{marginBottom: '50px'}}>Projects</h1>
            <p style={{marginBottom: '150px', width: '1220px', margin: '0 auto'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
            </p>
            <div style={tabsContainerStyle}>
                {generateTab(1, 'Tab 1')}
                {generateTab(2, 'Tab 2')}
                {generateTab(3, 'Tab 3')}
            </div>
            {activeTab === 1 && <AllProjects />}
        </div>
        </div>
    );
};

export default Projects;
