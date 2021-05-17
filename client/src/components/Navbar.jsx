import React, { useState, useEffect } from "react";
import logo from "../images/saelogohd2.png";
import EventNoteIcon from '@material-ui/icons/EventNote';
import GroupIcon from '@material-ui/icons/Group';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import ListIcon from '@material-ui/icons/List';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import Searchbar from "./Searchbar";
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

// const isMobile = useMediaQuery({
//     query: '(max-device-width: 768px)'
// });



// const notifications = [
//     {
//         id: 1,
//         date: "October 28, 2020",
//         description: "SAE official quiz to be taken. Click here to register."
//     },
//     {
//         id: 2,
//         description: "The club is started interviews for the core members of session 2020-21",
//         date: "October 8, 2020"
//     },
//     {
//         id: 3,
//         description: "SAE anounces its new secretaries for session 2020",
//         date: "July 20, 2020"
//     }

// ]

function NotificationItem(props) {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    });

    if (isMobile) {
        return (
            <div className="notification-item">
                {/* <a href=""> */}
                    <div className="ss">
                        <p style={{ color: "white" }}> <EventNoteIcon /></p>
                    </div>
                    <div className="sm">
                        <p style={{ fontWeight: "600", display: "inline", color: "white" }}> {props.date} | {props.description}</p>
                    </div>
                {/* </a> */}
                <hr className="notification-separator" />
            </div>
        );
    }
    else {
        return (
            <div className="notification-item">
                <a className={"dropdown-item"} href="">
                    <p style={{ fontWeight: "600" }}><EventNoteIcon /> {props.date} |</p>
                    <p style={{ fontWeight: "500" }}>{props.description}</p>
                </a>
                <hr className="notification-separator" />
            </div>
        );

    }
}

function Notifications() {
    const [notify, setNotify] = useState([]);
    const apiURL = "http://localhost:5000/notifications";
    const fetchData = async () => {
        const response = await axios.get(apiURL);
        // console.log(response.data.length);
        setNotify(response.data);
        //console.log(notify);
    }
    useEffect(() => { fetchData(); });
    // console.log("cvcvfgbfsanyamgbbv");
    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    });
    return (

        <div >

            <div className="dropdown" >
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ border: "1px solid white", position: "relative", float: "right" }}>
                    {isMobile ? <NotificationsIcon style={{ fontSize: "1rem" }} /> : "Notifications"}
                </button>
                <div className="dropdown-container" >
                    <div className="dropdown-menu dropdown-style" aria-labelledby="dropdownMenuButton">

                        {notify.length && notify.map((notification) =>
                            <NotificationItem
                                key={notification.id}
                                description={notification.description}
                                date={notification.date}
                            />
                        )}
                        {/* {!notify.length && <h1>{notify}</h1>} */}
                    </div>
                </div>
            </div>
        </div>

    );
}


function Navbar() {

    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    });
    const [searchEnabled, SearchEnableToggle] = useState(false);//it means initial value of searchEnabled is false

    function SearchToggle() {
        if (searchEnabled === true) {
            SearchEnableToggle(false);
        } else {
            SearchEnableToggle(true);
        }
    }

    return (
        <div className="header-navigator">
            <nav className="navbar navbar-expand-lg navbar-primary pad-mgn fixed-top">

                <div >
                    <img className="saelogo" src={logo} alt="saelogo" />
                    <a className="navbar-brand" href="" >
                        <h6 >{isMobile ? "SAE IIT BHU" : "Society of Automotive Engineers - IIT BHU Varanasi"}</h6>
                    </a>
                </div>

                <button className="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: "1px white solid" }}>
                    <ListIcon style={{ color: "white" }} />
                </button>

                {isMobile && <li className="nav-item"><Notifications /></li>}


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-pills">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home <HomeIcon style={{ fontSize: "18" }} /></Link>
                        </li>

                        {isMobile && <li>
                            <Link className="nav-link" onClick={SearchToggle} to="/">Search <SearchIcon style={{ fontSize: "18" }} /></Link>
                        </li>}

                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects <AccountTreeIcon style={{ fontSize: "18" }} /></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/events">Events <EmojiEventsIcon style={{ fontSize: "19" }} /></Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact <GroupIcon style={{ fontSize: "20" }} /></a>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log In <EmojiEventsIcon style={{ fontSize: "19" }} /></Link>
                        </li>
                        {!isMobile && <li className="nav-item">
                            <Notifications />
                        </li>}


                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;




