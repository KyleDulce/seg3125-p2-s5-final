import React, { createRef } from "react";
import { Form } from "react-bootstrap";

export default class Personal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            fname: undefined,
            lname: undefined,
            phone: undefined
        }

        this.formRef = createRef();

        const refThis = this;
        this.props.setFunc(1, {
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
                <h3 className="title">Personal Information</h3>
                <Form role="form" aria-label="Personal Information" ref={this.formRef} validated={this.state.validate} noValidate>
                    <Form.Group className="mt-1" style={{width: "400px"}}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control aria-label="First Name" type="text" placeholder="First Name" defaultValue={data.fname} onChange={this.props.handleChange('fname')} required/>
                        <Form.Control.Feedback type="invalid">
                            You must provide your First name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{width: "400px"}}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control  aria-label="Last Name" type="text" placeholder="Last Name" defaultValue={data.lname} onChange={this.props.handleChange('lname')} required/>
                        <Form.Control.Feedback type="invalid">
                            You must provide your Last name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{width: "400px"}}>
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control aria-label="Telephone Number" type="number" placeholder="Phone No." defaultValue={data.phone} onChange={this.props.handleChange('phone')} required/>
                        <Form.Control.Feedback type="invalid">
                            You must provide a phone number (no spaces or characters between numbers)
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </>
        )
    }
}