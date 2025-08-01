import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  const teamMembers = data[0].team.slice(0, 3); // get first 3 members

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Our Team</h1>
          <p>
            At the heart of our restaurant is a passionate team that brings every dish to life. 
            From expert chefs crafting recipes with precision, to our warm-hearted servers who treat 
            every guest like family.
          </p>
        </div>

        {teamMembers.map((member, index) => (
          <div
            className="team_single"
            key={member.id}
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className="image">
              <img className="member-image" src={member.image} alt={member.name} />
            </div>
            <div className="description">
              <h2>{member.name}</h2>
              <h4>{member.designation}</h4>
              <p>
                {member.name} plays a vital role in ensuring our guests receive the best experience.
                Their dedication and skill make them a pillar of our restaurant.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;