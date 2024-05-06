import projImg1 from '../assets/imgs/project-img1.png'
import projImg2 from '../assets/imgs/project-img2.png'
import projImg3 from '../assets/imgs/project-img3.png'

const AllProjects = () => {

    const containerDiv = {
        display: 'flex',
        flexDirection: 'column', // Change to column
        alignItems: 'center', // Center items horizontally
        width: '100%',
        margin: '0 auto',
        
    };

    const rowDiv = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', // Center items horizontally  
        border: '1px solid purple',
        width: '100%',
        backgroundColor: '#222831'
    };

    const projectStyle = {
        margin: '10px', // Add some space between projects        
        width: '33.33%',
        border: '1px solid white'
    };

    const imgStyle = {
        width: '100%'
    }

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    const chunks = projects.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 3);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new row
        }

        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    return (
        <div style={containerDiv}>
            <h1>All Projects</h1>
            {chunks.map((row, index) => (
                <div key={index} style={rowDiv}>
                    {row.map((project, projectIndex) => (
                        <div key={projectIndex} style={projectStyle}>
                            <img style={imgStyle} src={project.imgUrl} alt={`project-${index}-${projectIndex}`} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default AllProjects;
