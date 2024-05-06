import { useEffect, useState } from "react";
import headerImg from '../assets/imgs/header-img.svg'
import { FaArrowCircleRight } from "react-icons/fa";


const Home = () => {

    const container = {
        width: '80%',
        margin: '0 auto',
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const profession = ['Web Developer', 'Web Designer', 'UX/UI Designer'];
    const [text, setText] = useState(profession[0]);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(profession[i % profession.length]);
            setShowText(true); // Set showText to true when text updates
            setTimeout(() => setShowText(false), 2000); // Reset showText after 0.3 seconds
            i = i + 1;
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={container}>
            <div style={{ width: '60%' }}>
                <div className="welcomeToMyPortfolio">Welcome to my Portfolio</div>
                <h1>Hi, I'm Pavle. I'm <span className={`fadeProfessionText ${showText ? 'show' : ''}`}>{text}.</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className="letsConnect">
                    Let's Connect
                    <span className="faArrowCircleRight"><FaArrowCircleRight /></span>
                </button>
            </div>
            <div style={{ width: '30%' }}>
                <img style={{ width: '100%', animation: 'moveUpDown 3s infinite linear' }} src={headerImg} alt="header-img" />
            </div>
        </div>
    );
}

export default Home;
