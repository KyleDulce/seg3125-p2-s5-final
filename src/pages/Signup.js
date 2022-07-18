import { useState } from 'react';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Account from './signuppages/Account';
import License from './signuppages/License';
import Personal from './signuppages/Personal';
import Verify from './signuppages/Verify';

export default function Signup() {
    const [selectedSection, setSection] = useState(0);

    const [getData, setdata] = useState({}) 

    const handleChange = (dataStr) => 
        (data) => {
            console.log(dataStr);
            let newData = getData;
            newData[dataStr] = data.target.value;
            setdata(newData);
        };

    const [getFuncAccount, setFuncAccount] = useState({});
    const [getFuncPersonal, setFuncPersonal] = useState({});
    const [getFuncLicense, setFuncLicense] = useState({});

    const setFunc = function(id, data) {
        switch(id) {
            case 0: 
                setFuncAccount(data);
                break;
            case 1: 
                setFuncPersonal(data);
                break;
            case 2: 
                setFuncLicense(data);
                break;
        }
    }

    const getFuncFromId = (id) => {
        switch(id) {
            case 0: 
                return getFuncAccount;
            case 1: 
                return getFuncPersonal;
            case 2: 
                return getFuncLicense;
        }
        return undefined;
    }

    const onNext = function() {
        const func = getFuncFromId(selectedSection);
        if(func.validate()) {
            setSection(selectedSection + 1);
        }
    }

    return (
        <>
            <Container className="mx-auto my-5 childrenNormalText" style={{width: "500px"}}>
                <div style={{padding: "20px"}}>
                    <Row>
                        <h2 className='title'>Create an Account</h2>
                    </Row>
                    <Row>
                        <Link to="../signin">Already have an account? Sign in now</Link>
                    </Row>
                </div>
                <div style={inputArea}>
                    <Row>
                        <Breadcrumb className='my-0'>
                            <Breadcrumb.Item className='linkless' active={selectedSection === 0}><b>Account</b></Breadcrumb.Item>
                            <Breadcrumb.Item className='linkless' active={selectedSection === 1}><b>Personal Information</b></Breadcrumb.Item>
                            <Breadcrumb.Item className='linkless' active={selectedSection === 2}><b>License</b></Breadcrumb.Item>
                            <Breadcrumb.Item className='linkless' active={selectedSection === 3}><b>Verify</b></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <hr className='my-0'/>
                    <Row className='mt-3'>
                        {selectedSection === 0 &&
                            (<Account handleChange={handleChange} setFunc={setFunc} getData={getData}/>)
                        }
                        {selectedSection === 1 &&
                            (<Personal handleChange={handleChange} setFunc={setFunc} getData={getData}/>)
                        }
                        {selectedSection === 2 &&
                            (<License handleChange={handleChange} setFunc={setFunc} getData={getData}/>)
                        }
                        {selectedSection === 3 &&
                            (<Verify getData={getData}/>)
                        }
                    </Row>
                    

                    <Row className='mt-3' style={{width: "100%"}}>
                        <Col>
                            {selectedSection !== 0 &&
                                (<Button className='accentSolidButton' onClick={() => setSection(selectedSection - 1)}>Go Back</Button>)
                            }
                        </Col>
                        <Col>
                            {selectedSection !== 3 &&
                                (<Button className='float-end accentSolidButton' onClick={() => onNext()}>Next</Button>)
                            }
                            {selectedSection === 3 &&
                                (<Link to="../completed-signup"><Button className='float-end accentSolidButton'>Submit</Button></Link>)
                            }
                        </Col>
                    </Row>
                </div>
                
            </Container>
        </>
    )
};

const inputArea = {
    border: "3px solid black",
    borderRadius: "10px",
    padding: "20px"
}
