import React from "react";
import { Table } from "react-bootstrap";

export default class Verify extends React.Component {

    render() {
        const data = this.props.getData;
        return (
            <>
                <h3>Verify your information</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Information</th>
                            <th>Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>{data.email}</th>
                        </tr>
                        <tr>
                            <th>Username</th>
                            <th>{data.username}</th>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <th>******</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>{`${data.fname} ${data.lname}`}</th>
                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <th>{data.phone}</th>
                        </tr>
                        <tr>
                            <th>License</th>
                            <th>{data.license}</th>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}