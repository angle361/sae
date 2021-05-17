import React from "react";
// import People from "./People"
import Resources from "./Resources"
import Social from "./Social"


export default function Footer() {
    const year = new Date().getFullYear(); 
    return (
        <footer id="footer">
            {/* <People /> */}
            <hr />
            <Resources />
            <Social />
            <p className="footer-end">© {year} All Rights Reserved</p>
        </footer>
    );
}

