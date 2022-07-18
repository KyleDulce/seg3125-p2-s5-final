import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { itemsContainer } from '../util/CommonCss';
import { useNavigate, createSearchParams } from "react-router-dom"

export default function ForumPost() {
    const navigate = useNavigate();
    const [isValidated, setValidated] = useState(false);

    const onSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() == false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            navigate({
                pathname: "/forums/thread",
                search: createSearchParams({
                    id: "5",
                    success: true
                }).toString()
            })
        }

        setValidated(true);
    };

    return (
        <>
            <div className='my-5' style={itemsContainer}>
                <Form role="form" aria-label="Create Post" className='mx-auto' style={{width: "80%"}} validated={isValidated} onSubmit={onSubmit} noValidate >
                    <h2 className='title'>Create Post</h2>
                    <div className='mx-auto normalText my-3' style={{display: "flex", flexWrap: "wrap"}}>
                        <Form.Group style={{width: "65%"}}>
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control aria-label="Post Title" placeholder="Title" required/>
                            <Form.Control.Feedback type="invalid" >
                                You must have a title for your post
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group style={{width: "35%"}}>
                            <Form.Label>Post Tag</Form.Label>
                            <Form.Select aria-label="Post Tags">
                                <option>General Question</option>
                                <option>Discussion</option>
                                <option>Tools</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <Form.Group className='normalText my-3' style={{width: "100%"}}>
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control aria-label="Post Contents" as="textarea" placeholder="Type your post here" rows={10}/>
                    </Form.Group>
                    <Button type='submit' className='normalText my-3 accentSolidButton'>Create Post</Button>
                </Form>
            </div>
        </>
    )
};