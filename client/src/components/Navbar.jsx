import React, { useState, useEffect} from "react";
import logo from "../images/saelogohd2.png";
//import { Button } from '@material-ui/core';
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
//import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

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
                <div className="ss">
                    <p style={{ color: "white" }}> <EventNoteIcon /></p>
                </div>
                <div className="sm">
                    <p style={{ fontWeight: "600", display: "inline", color: "white" }}> {props.date} | {props.description}</p>
                </div>
                <hr className="notification-separator" />
            </div>
        );
    }
    else {
        return (
            <div className="notification-item">
               <div className="ss">
                    <p style={{ color: "white" }}> <EventNoteIcon /></p>
                </div>
                <div className="sm">
                    <p style={{ fontWeight: "600", display: "inline", color: "white" }}> {props.date} | {props.description}</p>
                </div>
                <hr className="notification-separator" />
            </div>
        );

    }
}

const fetchData = async ()=>{
    const apiURL = "/notifications";
    let res = await axios.get(apiURL);
    //console.log(res);
    return res.data;
}

function Notifications() {
    const [notify, setNotify] = useState([]);
    useEffect(()=>{
        const setData = async ()=>{
            setNotify(await fetchData())
        }
        setData()
    },[]) 
    
    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    });
    
    return (

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
                        
                    </div>
                </div>
            </div>
        

    );
}

const logOut = async () => {

    try {
        let res = await axios.post("/logout");
        //console.log(res);

        if (res.status === 200) {
            console.log("logged out");
            window.location.replace("/");
        }
    } catch (error) {
        console.error("Logout failed:", error);
    }
}

function Navbar() {

    
    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    });
    // const [searchEnabled, SearchEnableToggle] = useState(false);//it means initial value of searchEnabled is false

    // function SearchToggle() {
    //     if (searchEnabled === true) {
    //         SearchEnableToggle(false);
    //     } else {
    //         SearchEnableToggle(true);
    //     }
    // }

    // const [collapseEnable,setCollapseEnable] = useState(false);
    // function Collapse(){
    //     window.addEventListener('click', ()=>{
    //     setCollapseEnable(true);
    //     });
    // }

    return (
        <div className="header-navigator">
            <nav className="navbar navbar-expand-lg navbar-primary pad-mgn fixed-top">

                <div >
                <img className="saelogo" src={logo} alt="saelogo" />
                    <Link className="navbar-brand" to="/">
                        
                        <h6 >{isMobile ? "SAE IIT BHU" : "SAE - IIT BHU Varanasi"}</h6>
                    </Link>
                </div>

                {isMobile && <div className="nav-item dropdown"><Notifications /></div>}
                
                <button className="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-haspopup="true" aria-expanded="false" style={{ border: "1px white solid" }}>
                    <ListIcon style={{ color: "white" }} />
                </button>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-pills">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home <HomeIcon style={{ fontSize: "18" }} /></Link>
                        </li>

                        {/* {isMobile && <li>
                            <Link className="nav-link" onClick={SearchToggle} to="/">Search <SearchIcon style={{ fontSize: "18" }} /></Link>
                        </li>} */}

                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects <AccountTreeIcon style={{ fontSize: "18" }} /></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/events">Events <EmojiEventsIcon style={{ fontSize: "19" }} /></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contacts">Contacts <GroupIcon style={{ fontSize: "19" }} /></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">LogIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">SignUp</Link>
                        </li>
                        {!isMobile && <li className="nav-item">
                            <button onClick= {logOut}className="nav-link">LogOut</button>
                        </li>}
                        {!isMobile && <li className="nav-item"><Notifications /></li>}
                            
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;




