import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

export default function PageNotFound() {
    const navigate = useNavigate();
    return (
        <>
            <div className="mx-auto my-5" style={{width: "500px"}}>
                <h2>We're Sorry</h2>
                <p className="bigFont">The page you requested does not exist</p>
                <Button className="accentSolidButton" onClick={() => navigate(-1)}>Go Back</Button>
            </div>
        </>
    )
}