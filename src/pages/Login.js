import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <div className="mx-auto my-5" style={{width: "fit-content"}}>
                <h2 className='title'>Sign In</h2>
                <Form role="form" aria-label="Sign in" className='childrenNormalText'>
                    <Form.Group className='my-3' style={{width: "500px"}}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className='my-3' style={{width: "500px"}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='my-3' style={{display: "flex", flexWrap: "wrap", width: "100%"}}>
                        <Form.Group>
                            <Form.Check id="remember" label="Remember me"/>
                        </Form.Group>
                        <div className='ms-auto'>
                            <Link to="#forgot">Forgot my password</Link>
                        </div>
                    </div>
                    <div className='my-3'>
                        <Link to="../signup">Don't have an account? Create an Account now.</Link>
                    </div>
                    <Button className='accentSolidButton'>Sign in</Button>
                </Form>
            </div>
        </>
    )
};
