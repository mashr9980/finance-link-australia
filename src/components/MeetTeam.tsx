import React from 'react'
import "./MeetTeam.css"
import { Team } from '@/Static/Team'
const MeetTeam = () => {
  return (
    <section className="section-team" >
    <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
                <div className="header-section">
                    <h2 className="title">Our Experts</h2>
                    <h2 className="title">Let's meet with our team members</h2>
                </div>
            </div>
        </div>
        <div className="row">
            {Team.map((team, indec) => 
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <div className="single-person">
                    <div className="person-image">
                        <img src={team.image} alt=""/>
                    </div>
                    <div className="person-info grayscale">
                        <h3 className="full-name">{team.name}</h3>
                        <span className="speciality">{team.role}</span>
                        <p className="speciality">{team.description}</p>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
</section>

  )
}

export default MeetTeam