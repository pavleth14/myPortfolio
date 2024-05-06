import contactImg from '../assets/imgs/contact-img.svg'

const Contact = () => {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(123);
    }

    return (
        <div style={container}>
            <div style={outerDiv}>
                <div style={imgDiv}>
                    <img style={imgStyle} src={contactImg} />
                </div>
                <div style={formDiv}>
                    <h1>Get In Touch</h1>
                    <form onSubmit={handleSubmit}>
                        <div style={formRow}>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type='text' className="form-control" placeholder="First Name" />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type='text' className="form-control" placeholder="Last Name" />
                            </div>
                        </div>
                        <div style={formRow}>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type='text' className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type='text' className="form-control" placeholder="Phone No." />
                            </div>
                        </div>
                        <div style={formRow}>
                            <div className="col-12">
                                <textarea className="form-control" placeholder='Message'></textarea>
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