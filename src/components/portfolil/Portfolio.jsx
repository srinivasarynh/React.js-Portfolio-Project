import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio, 
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setDate] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "content",
            title: "Content"
        },
    ];

    useEffect(() => {
        switch(selected){
            case "featured": setDate(featuredPortfolio);
            break;

            case "web": setDate(webPortfolio);
            break;

            case "mobile": setDate(mobilePortfolio);
            break;

            case "design": setDate(designPortfolio);
            break;

            case "content": setDate(contentPortfolio);
            break;

            default: setDate(featuredPortfolio);
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map((item) => (
                <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}
                id={item.id}/>
               ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                        </div>
                ))} 
            </div>
        </div>
    )
}