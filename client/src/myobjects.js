import selfDriving from "./images/self-driving.jpg";
import atv from "./images/atv.jpg";
import smartbike from "./images/smartbike.jpg";

import aquadrive from "./images/aquadrive.jpg";
import axelerate from "./images/Axelerate.jpg";
import designing from "./images/design.jpg";
import workshop from "./images/workshop.jpg";

export const projects = [
    {
        id: 1,
        name: "Smart Bike",
        description: "A self balancing bike with elevated features.",
        img: smartbike
    },
    {
        id: 2,
        name: "Self Driving Technology",
        description: "Automobiles that can prevent accident to happen.",
        img: selfDriving
    },
    {
        id: 3,
        name: "E-ATV",
        description: "An Electrical all terrain vehicle that can travel on any surface.",
        img: atv
    }

];

export const events = [
    {
        id: 1,
        name: "Aqua Drive",
        description: "An event featuring fluid dynamics in action",
        img: aquadrive
    },
    {
        id: 2,
        name: "Axelerate",
        description: "A racing event-compete with racers",
        img: axelerate
    },
    {
        id: 3,
        name: "Designing",
        description: "Complete courses on powerful designing tools",
        img: designing
    },
    {
        id: 4,
        name: "Workshops",
        description: "All the technical knowlegde from experts",
        img: workshop
    }

];

export default events;
//export projects;
//export events;
