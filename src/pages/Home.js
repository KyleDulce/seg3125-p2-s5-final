import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import testLogo from '../resources/testlogo.jpg';
import codeYellow from '../resources/code-yellow.jpg';
import maze from '../resources/maze.jpg';
import basket from '../resources/basketball.jpg';
import bolt from '../resources/lightningbolt.jpg';
import community from '../resources/community.jpg';
import { backgroundImageCss, centerText, whiteText, whiteBackgroundCss, blackBackgroundCss, itemsContainer } from '../util/CommonCss';
import { useState } from 'react';

export default function Home() {

    const [subscribed, setSubscribed] = useState(false);
    const [isValidated, setValidated] = useState(false);

    const features = [
        {
            title: "Easy to Learn API",
            image: codeYellow,
            text: "Hundreds of tutorials so you can learn to create as easily as possible",
            alt: "Decorative image of some code on a yellow screen"
        },
        {
            title: "2D and 3D game creation with ease",
            image: basket,
            text: "A flexible and capable engine that allows you to make any type of game",
            alt: "Decorative image of people playing basketball in a cartoon style"
        },
        {
            title: "Endless Special Effects",
            image: bolt,
            text: "Endless number of particles and special effects for anything you want to create",
            alt: "Decorative image of lightning effects"
        }
    ];

    const tutorials = [
        {
            title: "FPS Shooter Tutorial",
            description: "Create a First person Shooter game from scratch using For-Real"
        },
        {
            title: "Beginner Multiplayer game Tutorial",
            description: "Create a game you can play with your friends using multiplayer 2d. Keep track of scoreboards and see who comes out on top"
        },
        {
            title: "Puzzle Game Tutorial",
            description: "Create a puzzle game with ease using the simple physics engine in For-Real"
        }
    ];

    const engineVariations = [
        {
            title: "Free License",
            description: "For the hobbyists and small creators",
            link: "#link"
        },
        {
            title: "Pro License",
            description: "For those who wants to create professional games",
            link: "#link"
        }
    ];

    const onSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() == false) {
        } else {
            setSubscribed(true);
        }
        setValidated(true);
    };

    return (
        <>
            <div className="position-relative" style={backgroundImageCss}>
                <img alt="" style={Object.assign({backgroundSize: "cover", filter: "brightness(60%)", width: "100%", height: "100%"}, {backgroundImage: `url(${maze})`})}/>
                <div className='position-absolute translate-middle top-50 start-50'>
                    <h1 className='title' style={Object.assign({}, centerText, whiteText)}>For-Real Engine</h1>
                    <p className='title bigFont' style={Object.assign({}, centerText, whiteText)}>Your gateway to real games</p>
                </div>
            </div>

            <div style={blackBackgroundCss}>
                <div className='py-5' style={itemsContainer}>
                    <h2 className='title' style={whiteText}>For Real Features</h2>
                    <div className='justify-content-between' style={{ display: "flex", flexWrap: "wrap" }}>
                        {features.map((featureItem) => (
                            <Card className='noBackground' style={Object.assign({width: `${(1/features.length) * 100 - 5}%`, height: '500px'}, cardStyle)}>
                                <Card.Img style={{width: '100%', objectFit: "cover", height: "60%"}} variant='top' src={featureItem.image} alt={featureItem.alt}/>
                                <Card.Body>
                                    <Card.Title className='normalText whiteColor mt-3'><b>{featureItem.title}</b></Card.Title>
                                    <Card.Text className='normalText whiteColor'>{featureItem.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div style={whiteBackgroundCss}>
                <div className='pt-5' style={itemsContainer}>
                    <h2 className='title'>Tutorials</h2>
                    <p className='normalText'>Create any game you want with hundreds of tutorials waiting for you to complete</p>
                    <Link to="./learn">
                        <Button className='normalText accentSolidButton' variant="primary">See Tutorials</Button>
                    </Link>
                </div>
                <div className='py-5' style={itemsContainer}>
                    <div className='justify-content-between' style={{display: "flex", flexWrap: "wrap"}}>
                        {tutorials.map((tutorialItem) => (
                            <div style={{width: `${(1/features.length) * 100 - 5}%`}}>
                                <div>
                                    <h4 className='normalText'><b>{tutorialItem.title}</b></h4>
                                    <p className='normalText'>{tutorialItem.description}</p>
                                </div>
                                <Button className='normalText accentOutlineButtonWhite'>Play this tutorial</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="position-relative" style={backgroundImageCss}>
            <img alt="" style={Object.assign({backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(50%)", width: "100%", height: "100%"}, {backgroundImage: `url(${community})`})}/>
                <div className='position-absolute translate-middle top-50 start-50'>
                    <h2 className="mb-4 title" style={Object.assign({textAlign: "center"}, whiteText)}>Join The For-Real Community</h2>
                    <p className='bigFont' style={Object.assign({}, whiteText, centerText)}>Large supportive community created for you</p>
                    <div className='text-center'>
                        <Link to="./forums">
                            <Button className='mx-auto normalText accentSolidButton'>Join Community</Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div style={whiteBackgroundCss}>
                <div className='py-5' style={itemsContainer}>
                    
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div className='mx-auto' style={{width: `${(1/(engineVariations.length + 1)) * 100 - 5}%`}}>
                            <h2 className='title'>Download For-Real Engine Now</h2>
                            <p className='normalText'>For-Real comes with multiple options to fit your needs</p>
                            <Link to="./product">
                                <Button className='mx-auto normalText accentSolidButton' variant="primary">See More Options</Button>
                            </Link>
                        </div>
                            {engineVariations.map((engineItem) => (
                                <Card className='mx-auto' style={Object.assign({width: `${(1/(engineVariations.length + 1)) * 100 - 5}%`}, cardStyle)}>
                                    <Card.Body>
                                        <Card.Title className='normalText'><b>{engineItem.title}</b></Card.Title>
                                        <Card.Text className='normalText' style={{height: "50px"}}>{engineItem.description}</Card.Text>
                                        <Link to={`${engineItem.link}`}>
                                            <Button className='mx-auto mb-2 normalText accentOutlineButtonWhite' variant="primary">Try it out!</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
            
            <div style={blackBackgroundCss}>
                <div className='py-5' style={itemsContainer}>
                    <h1 className='title' style={Object.assign({}, whiteText, centerText)}>Join our newsletter!</h1>
                    <p className='normalText' style={Object.assign({}, whiteText, centerText)}>Get up to date with all the new features, news and deals</p>
                    <div className='mx-auto' style={{width: "fit-content"}}>
                        <Form role="form" aria-label="Subscribe Form" validated={isValidated} onSubmit={onSubmit} noValidate >
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <Form.Group>
                                    <Form.Control type="email" placeholder='Email' aria-label="Email" style={{width:"300px"}} required/>
                                    <Form.Control.Feedback style={{position: "relative !important"}} type="invalid" tooltip>
                                        Email must be valid e.g JohnDoe@email.com
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type='submit' className='normalText accentSolidButton'>Subscribe</Button>
                            </div>
                        </Form>
                    </div>
                    {subscribed && (
                        <p className='normalText mt-3' style={Object.assign({}, whiteText, centerText)}>Thank you for subscribing!</p>
                    )}
                </div>
            </div>
        </>
    )
};

//css

const cardStyle = {
    backgroundColor: "none",
    borderColor: "#ffc400",
    borderWidth: "3px"
}
