import React, { useState} from "react";
import { Button } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import aquadrive from "../images/aquadrivelow.jpg";
import axelerate from "../images/Axelerate.jpg";
import designing from "../images/design.jpg";
import workshop from "../images/screws.png";
import quiz from "../images/quiz.png";
import outfest from "../images/rc2.jpg"


const events = [
    {
        id: 1,
        name: "Aqua Drive",
        description: "An event featuring fluid dynamics in action. Get to build racing boats that require no engine but still has enough potential to beat the quickest in the business. Briing all your innovative skills together and produce the best.",
        img: aquadrive,
        link: ""
    },
    {
        id: 2,
        name: "Axelerate",
        description: "A racing event to compete with racers. Build the best RC cars on your own and drive as fast as you can in events like technex. Remember more you build your own more the chances you win",
        img: axelerate,
        link: ""
    },
    {
        id: 3,
        name: "Designing",
        description: "Complete courses on powerful designing tools such as ANSYS, Catia and solidworks. The team will lead you the become on of the best designers of modern times with real-time projects and assignments",
        img: designing,
        link: ""
    },
    {
        id: 4,
        name: "Workshops",
        description: "All the technical knowlegde from experts with practical envolvement. We have workshops on separate topics on different days. Other informal meets give you more interaction and update you up to the latest technology",
        img: workshop,
        link: "https://www.w3schools.com/cssref/pr_background-attachment.asp"
    },
    {
        id: 5,
        name: "Quiz Sessions",
        description: "Develop Skills with real-time practice, these quizzes help you extend your command over concepts of automobiles and and their practical application. Questions are asked primarily from technical background and recent technology",
        img: quiz
    },
    {
        id: 6,
        name: "Outfests",
        description: "Extend your participation to extent competition in external fests such as Techfest IITB and many more. These events expose you to the toughest of level with humongous competition",
        img: outfest
    }

];

const CardEntryOnMobile = (item)=> {

    const [variable, setVariable] = useState(false);
    
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
       // name="";
        const res = await axios({
            method: "GET",
            withCredentials: true,
            url: "/getUser",
        });
        console.log(res.data);
        // if(res.data)name=res.data.username;
        // console.log("dcfs");
        if(res.data!==""){
            window.location = "/registerforevent";
         }  
        else{
            window.location = "/login";        
        }
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
                                <Button onClick={getUser} variant="outlined" style={{ backgroundColor: "white", color: "black" }}>Register</Button>
                            
                                
                            </div>
                        </div>
                    }


                </div>
            </div>
        </div>

    );
}



const CardEntry= (item)=> {
    //console.log(item.style);
    const [onHover, setHover] = useState(false);
   

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
                    url: "/getUser",
                });
                console.log(res.data);
                //if(res.data!=="")name=res.data.username;
                //name=res.data.username;
                console.log("gg");
                
            
            if(res.data!==""){
                window.location = "/registerforevent";
             }  
            else{
                window.location = "/login";        
            }
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
                        <Button onClick={getUser} variant="outlined" style={{ backgroundColor: "white", color: "black" }}>Register</Button>
                         {/* {clicked && name===""?<Redirect to="/login" />:<Redirect to="/registerforevent" />} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Events = () => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    });
    
    if (!isMobile) {
        return (
            <section id="events" className="">
                <h2>EVENTS</h2>
               
                <div className="row">
                    {events.map(props =>
                        <CardEntry
                            key={props.id}
                            img={props.img}
                            name={props.name}
                            description={props.description}
                        />
                    )}
                </div>
            </section>
        );
    } else {
        return (
            <section id="events">
                <h2>EVENTS</h2>
               
                <div className="row row-custom">
                    {events.map(props =>
                        <CardEntryOnMobile
                            key={props.id}
                            img={props.img}
                            name={props.name}
                            description={props.description}
                        />
                    )}
                </div>
                
            </section>
        );

    }
}

export default Events;