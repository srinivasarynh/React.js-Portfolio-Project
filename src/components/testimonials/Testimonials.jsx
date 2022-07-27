import React from "react";
import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    return (
        <div className="testimonials" id="testimonilas">
            <h1>Testimonials</h1>
            <div className="container">
                { data.map(p => (
                    <div className={p.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" alt="" className="left"/>
                        <img src={p.img} alt="" className="user" />
                        <img src={p.icon} alt="" className="right"/>
                    </div>
                    <div className="center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui corrupti illo.
                    </div>
                    <div className="bottom">
                        <h3>{p.name}</h3>
                        <h4>{p.title}</h4>
                    </div>
                </div>
                ))    
                }    
            </div>
        </div>
    )
}