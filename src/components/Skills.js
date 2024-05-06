import { useState } from 'react';
import meter1 from '../assets/imgs/meter1.svg';
import meter2 from '../assets/imgs/meter2.svg';
import meter3 from '../assets/imgs/meter3.svg';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Skills = () => {
    const container = {
        textAlign: 'center',
        width: '80%',
        margin: '0 auto',
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const outerDiv = {
        border: '1px solid white',
        borderRadius: '10px',
        padding: '100px 250px',
        backgroundColor: '#222831',
        opacity: 0.9
    };

    const imgContainer = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        transition: 'transform 0.5s ease',
        transform: 'translateX(0)'
    };

    const [skills, setSkills] = useState([
        {
            img: meter1,
            description: 'Web Development'
        },
        {
            img: meter2,
            description: 'Brand Industry'
        },
        {
            img: meter3,
            description: 'Logo Design'
        },
        {
            img: meter1,
            description: 'Javascript'
        },
        {
            img: meter2,
            description: 'React'
        }
    ]);

    const handleRightArrow = () => {
        setSkills(prevSkills => {
            const rotatedSkills = [...prevSkills.slice(1), prevSkills[0]];
            return rotatedSkills;
        });
    };

    const handleLeftArrow = () => {
        setSkills(prevSkills => {
            const rotatedSkills = [prevSkills[prevSkills.length - 1], ...prevSkills.slice(0, prevSkills.length - 1)];
            return rotatedSkills;
        });
    };

    const visibleSkills = skills.slice(0, 3); // Prikazujemo samo prve tri slike

    return (
        <div style={container}>
            <div style={outerDiv}>
                <h1>Skills</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum has been the industry's standard dummy text.</p>

                <div style={imgContainer}>
                    <FaArrowCircleLeft onClick={handleLeftArrow} style={{ fontSize: '2em', marginRight: '20px' }} />

                    {visibleSkills.map((skill, index) => (
                        <div key={index}>
                            <div>
                                <img src={skill.img} alt={`meter${index + 1}`} />
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}

                    <FaArrowCircleRight onClick={handleRightArrow} style={{ fontSize: '2em', marginLeft: '20px' }} />
                </div>
            </div>
        </div>
    );
}

export default Skills;