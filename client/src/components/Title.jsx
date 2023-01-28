import React from "react";
import Gallery from "./Gallery";
import { useMediaQuery } from 'react-responsive';


const saeAboutHeader = '“All those cars were once just a dream in somebody’s head.”'
const saeAboutDescription = 'SAE Collegiate club is a platform where students sharing a vehement passion for automobile sciences involve themselves in various projects. It is a platform for students to complement the theoretical knowledge imparted in the classroom, with emphasis on the practical aspects of engineering. We work together as a strong team not only on amassing knowledge but also gaining experience in the technical field of design and manufacturing.';

function About() {
    return (
        <div className="about">
            <h3>ABOUT</h3>
            <h4>{saeAboutHeader}</h4>
            <p>{saeAboutDescription}</p>
        </div>
    );
}

function Pictures() {
    return (
        <div >
        <Gallery />
        </div>
    );
}


export default function () {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    });
    return (
        <section id="title">
            <div className="title-description">
            {isMobile? <h1>Welcome to Sanyam's official Website</h1> : <h1>Welcome to SAE's official Website</h1> }
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <About />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Pictures />
                    </div>
                </div>
            </div>
        </section>
    )
}
