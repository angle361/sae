import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";

import axios from 'axios';

function CardEntryOnMobile(item) {

    const [variable, setVariable] = useState(false);
    let name="";
    function ChangeStateOver() {
        setVariable(true);
    }
    function ChangeStateAway() {
        setVariable(false);
    }

    const animate = {
        animationName: "fadeInUp",
        animationDuration: "0.5s"
    }


        const getUser = async ()=>{
            const res = await axios({
                method: "GET",
                withCredentials: true,
                url: "http://localhost:3000/registerforevent",
            });
            console.log(res.data);
            name=res.data.username;
            console.log(name);
        }
        
    
    // style={animate}
    return (
        <div className="card-custom">
            <div className="event-card-mobile">
                <div className="event-card-elements-box">
                    {!variable &&
                        <div className={"event-card-elements"} style={animate}>
                            {/*  */}
                            <div >
                                <img className="event-images" src={item.img} alt={item.name} />
                                <h3>{item.name}</h3>
                                
                                <Button onClick={ChangeStateOver} variant="outlined" style={{ backgroundColor: "white", color: "black" }}>Description</Button>
                            </div>
                        </div>
                    }
                    {variable &&
                        <div className={"event-card-elements-secondary"} style={animate}>
                            {/* event-card-elements-secondary */}
                            <div>
                                <img className="event-images" style={{ height: "50px", width: "50px" }} src={item.img} alt={item.name} />
                                <h3>{item.name}</h3>
                           
                                <p style={{ whiteSpace: "pre-line" }}>{item.description.slice(0, 200) + "............"}</p>
                                <Button onClick={ChangeStateAway} variant="outlined" style={{ backgroundColor: "white", color: "black", size:"small" ,marginRight:"20px"  }}>Back</Button>
                               <Link to={name? "/registerforevent" : "/"}> <Button onClick={getUser} variant="outlined" style={{ backgroundColor: "white", color: "black" }}>Register</Button></Link>
                            
                                
                            </div>
                        </div>
                    }


                </div>
            </div>
        </div>

    );
}



function CardEntry(item){
    //console.log(item.style);
    const [onHover, setHover] = useState(false);

    let name="";
    function ChangeStateOver() {
        setHover(true);
    }
    function ChangeStateAway() {
        setHover(false);
    }

    const animate = {
        animationName: "fadeInUp",
        animationDuration: "0.5s"
    }
    const getUser = async ()=>{
        const res = await axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3000/registerforevent",
        });
        console.log(res.data);
        name=res.data.username;
        console.log(name);
    }
    
    
    return (
        <div className="col-lg-3 col-6 event-box" >
            <div className="event-card" onMouseEnter={ChangeStateOver} onMouseLeave={ChangeStateAway}>
                <div className={"event-card-elements"} style={{ display: (!onHover ? "block" : "none") }} >
                    <img className="event-images" src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
              
                </div>
                <div className={"event-card-elements"} style={{ display: (!onHover ? "none" : "block"), ...animate }}>
                    <div style={{ padding: "5%", fontWeight: "600" }}>
                        <h3>{item.name}</h3>
                        <p style={{ fontSize: "0.8rem" }}>{item.description.slice(0, 320)}........</p>
                        <button type="button" className="btn btn-dark btn-sm">Know more</button>
                  
                        <Link to={name==""? "/registerforevent" : "/"}><Button onClick={getUser} variant="outlined" style={{ backgroundColor: "white", color: "black" }}>Register</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {CardEntryOnMobile, CardEntry};