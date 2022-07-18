import { useState } from 'react'
import { Navbar, Container, Nav, Button, NavDropdown, Form, Row, Col, Collapse } from 'react-bootstrap'
import { PersonCircle, Search, BoxArrowInRight, List } from 'react-bootstrap-icons'
import { Route, Routes, useLocation } from 'react-router-dom';
import { centerText } from '../util/CommonCss';
import logo from '../resources/FOR-REAL.png';

import Home from './Home';
import Learn from './Learn';
import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import ForumHome from './/ForumHome';
import ForumPost from './ForumPost';
import CompletedSignUp from './CompletedSignUp';
import PageNotFound from './PageNotFound';
import FourmPostPage from './FourmPostPage';

export default function Layout() {

    const [isShown, setIsShown] = useState(false);
    const [attribution, setAttribution] = useState(false);
    const location = useLocation();

    let shouldShowGetStarted = true;
    if(location.pathname == "/signup") {
        shouldShowGetStarted = false;
    }

    function handleSearchOpen() {
        setIsShown(true);
    }
    
    return (
        <>
            <div style={{height: "100%", display: "flex", flexWrap: "wrap"}}>
                <div style={flexItem}>
                    <div style={Object.assign({backgroundColor: "#ff6666"})}>
                        <p className="my-0"><strong>These pages are for a school assignment. This is not a real company and there are no real services!
                            Refer to my home page for information about me <a href="https://kyledulce.github.io/">here.</a>
                        </strong></p>
                    </div>
                    <Navbar role="navigation" className='py-0' expand="md" style={Object.assign({}, navBarStyle)}>
                        <Container className="mx-0 w-100" style={{maxWidth: "100%"}}>
                            <Navbar.Brand href="/seg3125-p2-engine" className="ml-1 my-0">
                                <img aria-label='Home' src={logo} alt="logo" style={Object.assign({height: "5rem"}, logoStyle)}/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls='collapse-header' style={{color: "white", borderColor: "white"}}> 
                                <List />
                            </Navbar.Toggle>
                            <Navbar.Collapse id="collapse-header">
                                    <Nav className='childrenNormalText bigFontChild'>
                                        <Nav.Link className='mx-3' style={navText} href="/seg3125-p2-engine/#/product"><b>Product</b></Nav.Link>
                                        <Nav.Link className='mx-3' style={navText} href="/seg3125-p2-engine/#/learn"><b>Learn</b></Nav.Link>
                                        <Nav.Link className='mx-3' style={navText} href="/seg3125-p2-engine/#/forums"><b>Forums</b></Nav.Link>
                                    </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse className='justify-content-end' id="collapse-header">
                                <Nav>
                                    {shouldShowGetStarted && (
                                        <Nav.Link style={navText} href="/seg3125-p2-engine/#/signup">
                                            <Button className='normalText blackColor bigFont mx-2 accentSolidButton'>Get Started</Button>
                                        </Nav.Link>
                                    )}

                                    {isShown && (
                                        <div style={{flexDirection: "row", display: "flex"}} className='my-auto mx-2'>
                                            <div style={{display: "flex"}}>
                                                <Form.Control type='search' placeholder='Search' className='me-2 my-auto' aria-label="Search" />
                                            </div>
                                            <div style={{width: "100px"}}>
                                                <Button className='normalText whiteColor blackBackground bigFont me-1 accentOutlineButton'>Search</Button>
                                            </div>
                                        </div>
                                    )}
                                    {!isShown && (
                                        <Button className='normalText accentBackground accentBorder blackColor bigFont my-auto mx-2' 
                                            style={{height: "45px", backgroundColor: "black", borderColor: "black", color: "white"}} onClick={handleSearchOpen}><Search /></Button>
                                    )}
                                        
                                    <NavDropdown className='my-auto childrenNormalText mx-2' style={centerText} align="end" title={<PersonCircle style={navText}/>}>
                                        <NavDropdown.Item href='/seg3125-p2-engine/#/signup'><PersonCircle />  Create an Account</NavDropdown.Item>
                                        <NavDropdown.Item href='/seg3125-p2-engine/#/signin'><BoxArrowInRight />  Sign in</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    {/* <Outlet /> */}
                    <Routes>
                            <Route exact path="/learn" element={<Learn />} />
                            <Route exact path="/signin" element={<Login />} />
                            <Route exact path="/signup" element={<Signup />} />
                            <Route exact path="/completed-signup" element={<CompletedSignUp />} />
                            <Route exact path="/product" element={<Product />} />
                            <Route exact path="/forums/post" element={<ForumPost />} />
                            <Route exact path="/forums/thread" element={<FourmPostPage />} />
                            <Route exact path="/forums" element={<ForumHome />} />
                            <Route exact path="/" element={<Home />} />
                            <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                </div>
                

                <div className='blackBackground py-3 px-3 mt-auto whiteColorChildren childrenNormalText' style={flexItem}>
                    <hr className='whiteColor mx-auto mt-1 mb-3' style={{height: "3px", opacity: "100%", width: "80%"}} />

                    <Button
                        className='accentOutlineButton'
                        onClick={() => setAttribution(!attribution)}
                        aria-controls="attribution"
                        aria-expanded={attribution}
                    >See Attributions</Button>
                    <Collapse in={attribution}>
                        <div>
                            <p className='whiteColor my-1'>Some images are from freepik.com</p>
                            <p className='my-1'><a href='https://www.freepik.com/vectors/career-jobs'>Avatar pictures by studiogstock - www.freepik.com</a></p>
                            <p className='my-1'><a href="https://www.freepik.com/photos/html-code">Html code photo created by nikitabuida - www.freepik.com</a></p>
                            <p className='my-1'><a href='https://www.freepik.com/vectors/basketball-ring'>Basketball ring vector created by macrovector - www.freepik.com</a></p>
                            <p className='my-1'><a href='https://www.freepik.com/vectors/thunderbolt'>Thunderbolt vector created by upklyak - www.freepik.com</a></p>
                            <p className='my-1'><a href='https://www.freepik.com/photos/software-engineer'>Software engineer photo created by DCStudio - www.freepik.com</a></p>
                            <p className='my-1'><a href='https://www.freepik.com/vectors/table-game'>Table game vector created by freepik - www.freepik.com</a></p>
                            <p className='my-1'><a href='https://www.freepik.com/vectors/game-menu'>Game menu vector created by vectorpouch - www.freepik.com</a></p>
                            <p className='my-1'><a href='https://www.freepik.com/vectors/punctuation-marks'>Punctuation marks vector created by rawpixel.com - www.freepik.com</a></p>
                            <p className='my-1'><a href='https://www.freepik.com/vectors/creative-doodle'>Creative doodle vector created by rawpixel.com - www.freepik.com</a></p>
                            <p className='my-1'><a href='https://www.freepik.com/vectors/toolkit'>Toolkit vector created by studiogstock - www.freepik.com</a></p>
                            <p className='whiteColor mt-3 mb-1'>Some images are from pixabay.com</p>
                            <p className='my-1'>Image by <a href="https://pixabay.com/users/publicdomainpictures-14/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2264">PublicDomainPictures</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2264">Pixabay</a></p>
                            <p className='my-1'>Image by <a href="https://pixabay.com/users/roboxinvasion-998191/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=764971">RoboxInvasion</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=764971">Pixabay</a></p>
                            <p className='my-1'>Image by <a href="https://pixabay.com/users/davidrockdesign-2595351/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1736462">DavidRockDesign</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1736462">Pixabay</a></p>
                            <p className='whiteColor mt-3 mb-1'>Logo Created using Canvas.com and templates</p>                                 
                        </div>
                    </Collapse>                       
                    
                    <p className='whiteColor my-3'>Project by Kyle Dulce for SEG-3125</p>
                </div>       
            </div>                                                          
        </>
    )
};

const logoStyle = {
    width: "5rem"
}

const navText = {
    color: "white"
}

const navBarStyle = {
    backgroundColor: "black"
}
const flexItem = {
    width: "100%",
    height: "fit-content",
    flex: "1 100%",
}