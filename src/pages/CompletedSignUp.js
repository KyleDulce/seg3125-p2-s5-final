import { centerText } from "../util/CommonCss";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function CompletedSignUp() {
    return (
        <>
            <div className="mx-auto my-5" style={{width: "400px"}}>
                <h2 style={centerText}>Your Account is complete</h2>
                <p>Your Account was created. You can <Link to="../signin">sign in here.</Link></p>
                <Link to="../signin">
                    <Button className="accentSolidButton">Sign in</Button>
                </Link>
            </div>
        </>
    )
}