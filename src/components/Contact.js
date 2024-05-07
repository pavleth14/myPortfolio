import { useRef, useState } from 'react';
import contactImg from '../assets/imgs/contact-img.svg'

const Contact = () => {

    const contactRef = useRef(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const container = {
        marginTop: '50px',
        'background': 'linear-gradient(to right bottom, rgb(3, 3, 61), rgb(96, 3, 96) 75%)'
    }

    const outerDiv = {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const imgDiv = {
        width: '40%',
        border: '1px solid white'
    }

    const imgStyle = {
        width: '100%'
    }

    const formDiv = {
        border: '1px solid white',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',

    }

    const formRow = {
        display: 'flex',
        gap: '10px',
        paddingLeft: '10px',
        paddingRight: '20px'
    }

    const buttonStyle = {
        padding: '10px 30px',
        background: 'white',
        border: 'none',
        marginTop: '20px',
        marginLeft: '10px',
        borderRadius: '10px'
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        try {
            const response = await fetch('http://localhost/myPortfolio/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Email sent successfully');
                // Optionally, you can reset the form fields after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <div style={container} ref={contactRef}>
            <div style={outerDiv}>
                <div style={imgDiv}>
                    <img style={imgStyle} src={contactImg} />
                </div>
                <div style={formDiv}>
                    <h1>Get In Touch</h1>
                    <form onSubmit={handleSubmit} action="http://localhost/myPortfolio/index.php">
                        <div style={formRow}>
                            <div className="col-lg-6 col-sm-12 mb-3" style={{ border: '1px solid white' }}>
                                <input
                                    style={{ width: '100%' }}
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input
                                    style={{ width: '100%' }}
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                        </div>
                        <div style={formRow}>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input
                                    style={{ width: '100%' }}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input
                                    style={{ width: '100%' }}
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone No."
                                    required
                                />
                            </div>
                        </div>
                        <div style={formRow}>
                            <div className="col-12">
                                <textarea
                                    style={{ width: '100%' }}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <button style={buttonStyle} type="submit"><span>Send</span></button>
                    </form>

                </div>
            </div>

        </div>
    );
}

export default Contact;