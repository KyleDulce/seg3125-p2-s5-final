import { useSearchParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

import pfp1 from '../resources/profilepics/63457-1-1.png';
import pfp2 from '../resources/profilepics/63457-1-3.png';
import pfp3 from '../resources/profilepics/63457-1-5.png';
import pfp4 from '../resources/profilepics/63457-3-1.png';
import pfp5 from '../resources/profilepics/63457-3-3.png';
import pfp6 from '../resources/profilepics/63457-3-5.png';

export default function FourmPostPage() {
    const [searchParam, setSearchParam] = useSearchParams();
    const thread = threadMaps.get(searchParam.get("id"));

    let isPost = true;
    if(thread === undefined) {
        isPost = false;
    }
    let [postSuccess, setPostSuccess] = useState(searchParam.get("success") === 'true');

    const navigate = useNavigate();
    return (
        <>
            {postSuccess && (
                <div className='accentBackground px-5 py-1' style={{display: "flex"}}>
                    <button type="button" className="btn-close mx-3" aria-label="Close" onClick={() => setPostSuccess(false)}></button>
                    <p className="my-0"><strong>You submitted your post successfuly</strong></p>
                </div>
            )}
            {isPost && (
                <div className='mx-auto my-3' style={{width: "80%", minWidth: "200px"}}>
                    <Button className="accentOutlineButtonWhite" onClick={() => navigate(-1)}>Go Back</Button>
                    <div className='mt-5' style={{display: "flex"}}>
                            <div className='me-3'>
                                <img style={{width: "60px"}} src={thread.pfp} alt="A User's profile picture"/>
                            </div>
                            <div>
                                <p className='normalText'>Post by: {thread.author}</p>
                                <h3 className='title'>{thread.title}</h3>
                                <p className='normalText'>{thread.content}</p>
                            </div>
                        </div>

                    <h4 className='title'>{thread.replies.length} Replies:</h4>
                    <hr/>
                    {thread.replies.map(post => (
                        <>
                        <div className='childrenNormalText' style={{display: "flex"}}>
                            <div className='me-3'>
                                <img style={{width: "60px"}} src={post.pfp} alt="A User's profile picture"/>
                            </div>
                            <div>
                                <p>Reply by {post.author}</p>
                                <p>{post.content}</p>
                            </div>
                        </div>
                        <hr/>
                        </>
                    ))}

                    <h3 className='title'>Your Reply</h3>
                    <Form.Group role="form" aria-label="Create Reply" className='normalText my-3' style={{width: "100%"}}>
                        <Form.Control aria-label="Reply Contents" as="textarea" placeholder="Type your reply here" rows={10}/>
                    </Form.Group>
                    <Button className='normalText my-3 accentSolidButton'>Create Reply</Button>
                </div>
            )}
            {!isPost && (
                <div className="mx-auto my-5" style={{width: "500px"}}>
                    <h2>We're Sorry</h2>
                    <p className="bigFont">The fourm thread you requested either does not exist or was deleted</p>
                    <Button className="accentSolidButton" onClick={() => navigate(-1)}>Go Back</Button>
                </div>
            )}
            
        </>
    )
}

const threadMaps = new Map();

threadMaps.set("5", {
    title: "Question Regarding Vectors",
    content: "Wondering how to get the magnitude of a vector. I have done all I can but can not figure it out help!",
    author: "Zep",
    pfp: pfp4,
    replies: [
        {
            content: "Have you tried doing some research?",
            author: "Anonymous",
            pfp: pfp6
        },
        {
            content: "Here is some math help: here",
            author: "Anonymous",
            pfp: pfp3
        }
    ]
});

threadMaps.set("6", {
    title: "Something isn't working!!",
    content: "I was using the multiplayer engine and it crashed randomly help please!",
    author: "Roni",
    pfp: pfp6,
    replies: [
        {
            content: "Have you tried doing some research?",
            author: "Anonymous",
            pfp: pfp6
        },
        {
            content: "Here is some math help: here",
            author: "Anonymous",
            pfp: pfp2
        }
    ]
});

threadMaps.set("7", {
    title: "Features I want in the next version",
    content: "I was coding earlier and I was wondering what if we can make things blow up faster. What do you think",
    author: "Kevin",
    pfp: pfp3,
    replies: [
        {
            content: "I don't like it. Next!",
            author: "Anonymous",
            pfp: pfp3
        },
        {
            content: "but why?",
            author: "Anonymous",
            pfp: pfp6
        }
    ]
});

threadMaps.set("10", {
    title: "Looking for partners for a project",
    content: "I had a question about stuff. Anyone wanna join?",
    author: "Kyle",
    pfp: pfp1,
    replies: [
        {
            content: "I will send a DM",
            author: "Anonymous",
            pfp: pfp3
        },
        {
            content: "need more?",
            author: "Anonymous",
            pfp: pfp6
        }
    ]
});

threadMaps.set("11", {
    title: "Rigidbody goes flying",
    content: "I was wondering why did this strange bug occur. Turning up gravity makes everyone fly, help!",
    author: "Hanna",
    pfp: pfp5,
    replies: [
        {
            content: "Make sure the body has a thicker hitbox",
            author: "Anonymous",
            pfp: pfp2
        },
        {
            content: "They are clipping, increase the mass as well",
            author: "Anonymous",
            pfp: pfp6
        }
    ]
});

threadMaps.set("12", {
    title: "Webgl Library",
    content: "I was wondering if any webgl libraries exist to put these games on browser. I want to go on a webpage",
    author: "John",
    pfp: pfp2,
    replies: [
        {
            content: "Checkout my github I got one",
            author: "Anonymous",
            pfp: pfp5
        },
        {
            content: "Any luck? I want this too",
            author: "Anonymous",
            pfp: pfp3
        }
    ]
});