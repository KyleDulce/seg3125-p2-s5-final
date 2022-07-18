import React, { createRef } from "react";
import { Form } from "react-bootstrap";

export default class License extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            license: undefined
        }

        this.formRef = createRef();

        const refThis = this;
        this.props.setFunc(2, {
            validate: () => { 
            refThis.setState({validate: true});
            if (refThis.formRef.current.checkValidity() == false) {
                return false;
            } else {
               return true;
            }
        }})
    }

    handleChange(value) {
        this.props.handleChange('license')({target: {value: value}})
    }

    render() {
        const data = this.props.getData;
        let defRadio = data.license;
        return (
            <>
                <h3 className="title">License</h3>
                <p>You can always change this later</p>
                <Form role="form" aria-label="License Selection" className="mt-1" ref={this.formRef} validated={this.state.validate} noValidate>
                    {engines.map((item) => (
                        <div className="my-2" style={{display: "flex", flexWrap: "wrap", border: "2px solid #ffc400"}}>
                            <Form.Check type="radio" name="engine" id={item.label} label={item.label} aria-label={`Radio ${item.label}`} defaultChecked={defRadio == item.label} onChange={() => this.handleChange(item.label)} required/>
                            <div className="mx-3">
                                <p>{item.description}</p>
                            </div>
                            <div className="ms-auto me-3">
                                <p>{`Price: ${item.price}`}</p>
                            </div>
                        </div>
                    ))}
                </Form>
            </>
        )
    }
}

const engines = [
    {
        label: "Free License",
        description: "The minium number of tools to create great games",
        price: "Free!"
    },
    {
        label: "Pro License",
        description: "For the hobbyist or independent developers who wants to make some money from their games",
        price: "$15.00/Month"
    },
    {
        label: "Enterprise License",
        description: "For companies needs advanced tools and support",
        price: "$35.00/User/Month"
    }
]