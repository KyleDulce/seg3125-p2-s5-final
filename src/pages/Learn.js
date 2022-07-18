import { Button, Container, Row, Col } from 'react-bootstrap';
import { backgroundImageCss, centerText, itemsContainer, whiteText } from '../util/CommonCss';
import { Link } from 'react-router-dom';
import maze from '../resources/maze.jpg';
import fps from '../resources/fps.jpg';
import games from '../resources/games.jpg';
import space from '../resources/space.jpg';
import platformer from '../resources/platformer.png';

export default function Learn() {
    const tutorials = [
        {
            title: "FPS Shooter Tutorial",
            image: fps,
            description: "Create a First person Shooter game from scratch using For-Real"
        },
        {
            title: "Beginner Multiplayer game Tutorial",
            image: games,
            description: "Create a game you can play with your friends using multiplayer 2d. Keep track of scoreboards and see who comes out on top"
        }
    ]

    const samples = [
        {
            title: "FPS Shooter Sample",
            image: fps,
            tag: "3D",
            level: "Beginner",
            time: "30 Minutes"
        },
        {
            title: "Board Games",
            image: games,
            tag: "Multiplayer",
            level: "Intermediate",
            time: "2 hours"
        },
        {
            title: "Space Adventure",
            image: space,
            tag: "2D",
            level: "Beginner",
            time: "1 hour"
        },
        {
            title: "Simple Platformer",
            image: platformer,
            tag: "Platformer",
            level: "Intermediate",
            time: "2 hours"
        }
    ]

    function setupSampleProjectColumns() {
        let newHtmlGroup = [];
        let index = 0;
        
        for(let i = 0; index < samples.length; i++) {
            newHtmlGroup.push(<Row className='my-3'>
                <Col>{setupSampleProjectCard(samples[index++])}</Col>
                <Col>{setupSampleProjectCard(samples[index++])}</Col>
            </Row>)
        }
        return newHtmlGroup;
    }

    function setupSampleProjectCard(data) {
        return (
            <>
                <div style={{width: "100%", height: "fit-content", display: "flex", flexWrap: "wrap", border: "#ffc400 solid 3px", borderRadius: "5px"}}>
                    <img className='me-3 my-1 ms-1' style={{width: "150px", height:"90px", borderRadius: "5px", objectFit: "cover"}} src={data.image} alt="Project Cover Image" />
                    <div className='mt-auto'>
                        <Link to="#title"><h5 className='normalText'>{data.title}</h5></Link>
                        <p className='normalText'>{`${data.tag} > ${data.level} > ${data.time}`}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="position-relative" style={Object.assign({}, backgroundImageCss)}>
            <img alt="" style={Object.assign({backgroundSize: "cover", filter: "brightness(60%)", width: "100%", height: "100%"}, {backgroundImage: `url(${maze})`})}/>
                <div className='position-absolute translate-middle top-50 start-50'>
                    <h1 className='title' style={Object.assign({}, centerText, whiteText)}>Learn For-Real</h1>
                </div>
            </div>

            <div className='py-5' style={itemsContainer}>
                <h2 className='title'>Tutorials</h2>
                {tutorials.map((item) => (
                    <>
                        <Container>
                            <hr style={hrFormat} />
                            <Row style={{width: "100%", height: "fit-content", display: "flex", flexWrap: "wrap"}}>
                                <Col>
                                    <img className='mx-auto' style={{objectFit: "cover", width: "350px", height: "150px"}} src={item.image} alt="Tutorial Cover Image" />
                                </Col>
                                <Col className='mx-auto'>
                                    <h3 className='normalText'><b>{item.title}</b></h3>
                                    <Button className='accentSolidButton' variant="primary">Start Tutorial</Button>
                                </Col>
                                <Col className='mx-auto normalText'>
                                    <p>{item.description}</p>
                                </Col>
                            </Row>
                        </Container>
                    </>
                ))}
            </div>

            <div className='py-5' style={itemsContainer}>
                <h2>Sample Projects</h2>
                <Container>
                    {setupSampleProjectColumns()}
                </Container>
            </div>
        </>
    )
};

const hrFormat = {
    height: "3px",
    opacity: "100%"
}