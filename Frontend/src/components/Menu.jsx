import React from "react";
import {data} from "../restApi.json";

const Menu = () => {
  return (
    <section className="menu" id="menu">
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">Populer dishes</h1>
                <p>Savor our most loved dishes, handpicked by our guests! From spicy street-style snacks to rich, flavorful mains and delightful desserts—each bite is crafted with care and bold taste. These crowd favorites are guaranteed to satisfy your cravings and leave you wanting more.</p>

            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map((element)=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu