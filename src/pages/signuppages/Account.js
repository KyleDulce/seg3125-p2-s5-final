import React, { createRef } from "react";
import { Form } from "react-bootstrap";

export default class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            email: undefined,
            username: undefined,
            password: undefined,
        }

        this.formRef = createRef();

        const refThis = this;
        this.props.setFunc(0, {
            validate: () => { 
            refThis.setState({validate: true});
            if (refThis.formRef.current.checkValidity() == false) {
                return false;
            } else {
               return true;
            }
        }})
    }

    render() {
        const data = this.props.getData;
        return (
            <>
                <h3 className="title">Account</h3>
                <Form role="form" aria-label="Account Information" ref={this.formRef} validated={this.state.validate} noValidate>
                    <Form.Group className="mt-1" style={{width: "400px"}} required>
                        <Form.Label>Email</Form.Label>
                        <Form.Control aria-label="Email" defaultValue={data.email} type="Email" placeholder="Email" onChange={this.props.handleChange('email')} required/>
                        <Form.Control.Feedback type="invalid">
                            You must provide a valid email. e.g JohnDoe@email.com
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{width: "400px"}}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control aria-label="Username" defaultValue={data.username} placeholder="Username" onChange={this.props.handleChange('username')} required/>
                        <Form.Control.Feedback type="invalid">
                            You must provide a username
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{width: "400px"}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control  aria-label="Password" defaultValue={data.password} type="password" placeholder="Password" onChange={this.props.handleChange('password')} required/>
                        <Form.Control.Feedback type="invalid">
                            You must provide a password
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </>
        )
    }
}