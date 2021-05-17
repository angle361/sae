import React from "react";

const resources = [
    {
        id: 1,
        name: "Event Brouchre",
        link: ""
    },
    {
        id: 2,
        name: "Project Details",
        link: ""
    },
    {
        id: 3,
        name: "IIT BHU Drive",
        link: ""
    },
    {
        id: 4,
        name: "SNTC IIT BHU",
        link: ""
    },
    {
        id: 5,
        name: "IC Engines",
        link: "/icengine"
    },
    {
        id: 6,
        name: "Transmission system",
        link: ""
    },
    {
        id: 7,
        name: "Steering and Suspension",
        link: ""
    },
    {
        id: 8,
        name: "Brakes and Tyres",
        link: ''
    }
];

function ResourceEntry(item) {
    return (
        //<h1>Rohan</h1>
        <div className="col-lg-3 col-6"><a href={item.link}>{item.name}</a></div>
    );
}


function Resources() {
    return (
        <div>
            <h5>Resources & Important Links</h5>
            <div className="row footer-box-resources">
                {resources.map(props =>
                    <ResourceEntry
                        key={props.id}
                        name={props.name}
                        link={props.link}
                    />
                )}
            </div>
        </div>
    )
}

export default Resources;