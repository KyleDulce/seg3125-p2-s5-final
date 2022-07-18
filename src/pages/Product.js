import maze from '../resources/maze.jpg';
import { backgroundImageCss, centerText, blackBackgroundCss, whiteText } from '../util/CommonCss';
import { CheckCircleFill } from 'react-bootstrap-icons'
import { Table } from 'react-bootstrap';

export default function Product() {
    const headers = [
        "Features", 
        "Free",
        "Pro",
        "Enterprise"
    ]
    
    const rowFeatures = [
        {
            title: "C# Scripting",
            value: [true, true, true]
        },
        {
            title: "C Scripting",
            value: [true, true, true]
        },
        {
            title: "Javascript Scripting",
            value: [false, true, true]
        },
        {
            title: "Visual Scripting",
            value: [false, true, true]
        },
        {
            title: "Shaders Editor",
            value: [true, true, true]
        },
        {
            title: "Physics Engine",
            value: [true, true, true]
        },
        {
            title: "Advanced Physics Engine",
            value: [false, true, true]
        },
        {
            title: "Source Control",
            value: [false, true, true]
        },
        {
            title: "Create Multiplayer games",
            value: [false, true, true]
        },
        {
            title: "Game Analytics",
            value: [false, false, true]
        },
        {
            title: "Multiplayer game hosting",
            value: [false, false, true]
        },
        {
            title: "Premium Technical Support",
            value: [false, false, true]
        }
    ]

    return (
        <>
            <div className="position-relative" style={Object.assign({}, backgroundImageCss)}>
                <img alt="" style={Object.assign({backgroundSize: "cover", filter: "brightness(60%)", width: "100%", height: "100%"}, {backgroundImage: `url(${maze})`})}/>
                <div className='position-absolute translate-middle top-50 start-50'>
                    <h1 className='title' style={Object.assign({}, centerText, whiteText)}>For Real Engine</h1>
                </div>
            </div>
            <div className='py-4' style={blackBackgroundCss}>
                <h2 className='title my-3' style={Object.assign({}, whiteText, centerText)}>Compare Features</h2>
                <div className='childrenNormalText mt-4'>
                    <Table className='mx-auto' style={Object.assign({width: "50%"}, yellowTableBorder)}>
                        <thead>
                            <tr>
                                {headers.map((item) => (
                                    <th style={Object.assign({}, yellowTableBorder, whiteText, centerText)}>{item}</th>
                                ))}
                            </tr> 
                        </thead>
                        <tbody style={yellowTableBorder}>
                            {rowFeatures.map((item) => (
                                <tr>
                                    <th style={Object.assign({}, yellowTableBorder, whiteText)}>{item.title}</th>
                                    {item.value.map((check) => (
                                        <th style={Object.assign({}, yellowTableBorder, greenText, centerText)}>{check && <CheckCircleFill />}</th>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            
        </>
    )
};

const yellowTableBorder = {
    border: '1px solid yellow'
}

const greenText = {
    color: "green"
}