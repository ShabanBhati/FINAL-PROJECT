import React from "react";
import {data} from "../restApi.json";

const Otherinfo = () => {
  return (
    <section className="otherinfo" id="otherinfo">
        <div className="container">
            {
                data[0].info.map(element=>(
                    <div className="card" key={element.id}>
                        
                        <p className="title">{element.title}</p>
                        <p className="description">{element.description}</p>
                    </div>
                ))
            }

        </div>
    </section>
  )
}

export default Otherinfo