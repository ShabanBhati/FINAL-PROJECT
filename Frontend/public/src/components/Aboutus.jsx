import React from "react";
import { data } from "../restApi.json";

const Aboutus = () => {
  return (
    <section className="Aboutus" id="Aboutus">
        <div className="container">
            <div className="text_banner">
                {
                    data[0].oursite.slice(0,2).map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <h1 style={{fontWeight:"300"}} className="heading">{element.number}</h1>
                                <p>{element.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="image_banner">
                
                <img src="/aboutus.jpg" alt="aboutus" />
            </div>
             <div className="text_banner">
                {
                    data[0].oursite.slice(2).map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <h1 style={{fontWeight:"300"}} className="heading">{element.number}</h1>
                                <p>{element.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Aboutus