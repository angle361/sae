import React from "react";
var count = 0;


const galleryitems = [
  // {
  //   id: 3,
  //   title: '"The Gyroscope in action"',
  //   img: require("../images/self-balance.jpg"),
  //   description: '"You may not need to struggle with cycles anymore"'
  // },

  // {
  //   id: 2,
  //   title: '"Race against the best in Technex"',
  //   img: require("../images/axelerate20.jpg"),
  //   description: '"Speed Matters....."'
  // },
  // {
  //   id: 1,
  //   title: "Empowering Workshops",
  //   img: require("../images/workshopontransmission.jpg"),
  //   description: '"Interaction is a part of learning"'
  // },
  {
    id: 4,
    title: "The SAE Team",
    img: require("../images/team.png"),
    description: '"Interaction is a part of learning"' 
  },
  {
    id: 5,
    title: "All Terrain Vehicle",
    img: require("../images/atv-gallery.png"),
    description: '"Interaction is a part of learning"' 
  },
  {
    id: 6,
    title: "The Bullet",
    img: require("../images/axelerate20-1.jpg"),
    description: '"Interaction is a part of learning"' 
  }

]


function GalleryEntry(item) {
  count++;

  return (
    <div className={`carousel-item ${count === 1 ? 'active' : ''}`}  >
      <img className="gallery-image" src={item.img} alt="First slide" />
      <p className="gallery-description-head">{item.title}</p>
      {/* <p className="gallery-description-sub-head">{item.description}</p> */}
    </div>
  );
}


function Gallery() {
  count=0;
  return (
    <section id="gallery">
      {/* <h2>GALLERY</h2> */}
      <div id="gallery-carousel" className="carousel slide" data-ride="false">
        <div className="carousel-inner">{
          galleryitems.map(props =>
            <GalleryEntry
              key={props.id}
              title={props.title}
              img={props.img}
              description={props.description}
            />)
        }</div>
        <a className="carousel-control-prev" href="#gallery-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#gallery-carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  );
}

export default Gallery;





















/* <section id="gallery">
            <h2>GALLERY</h2>
            <div id="gallery-carousel" className="carousel slide" data-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item ">
                  <img className="gallery-image" src="images/workshopontransmission.jpg" alt="First slide">
                    <p className="gallery-description-head">Empowering Workshops by experienced seniors</p>
                    <p className="gallery-description-sub-head">"Interaction is a part of learning"</p>
        </div>
                  <div className="carousel-item active">
                    <img className="gallery-image" src="images/self-balance.jpg" alt="Second slide">
                      <p className="gallery-description-head">The Gyroscope in action</p>
                      <p className="gallery-description-sub-head">"You may not need to struggle with cycles anymore"</p>
        </div>
                    <div className="carousel-item">
                      <img className="gallery-image" src="images/axelerate20.jpg" alt="Third slide">
                        <p className="gallery-description-head">Race against the best in Technex</p>
                        <p className="gallery-description-sub-head">"Speed Matters....."</p>
        </div>
                    </div>
                    <a className="carousel-control-prev" href="#gallery-carousel" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#gallery-carousel" role="button" data-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </a>
                  </div>

  </section> */