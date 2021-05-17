import React from "react";

function CardEntry(item) {
    //console.log(item.style);
    return (
        <div className={"col-lg-" + item.quantity + " " + item.mainStyle + " col-lg-offset-3"} >
        <a href={item.link}>
            <div>
            <img className={item.imgStyle} src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            </div>
        </a>
        </div>
    );
}

export default CardEntry;

//"https://www.google.com/"