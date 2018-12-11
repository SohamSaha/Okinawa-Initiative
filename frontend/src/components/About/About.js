import React, { Component } from 'react';
import './About.css'

class About extends Component {
  render() {
    return (
        <div>
            <div className="bgvid-container">
            <video iconstyle="100%" margin="auto" autoPlay="autoplay" muted loop>
                <source src={require('./website_clip.mp4')} type="video/mp4" />
            </video>
            </div>

            <div className="main">
            <h2>Our Mission</h2>
            <p id="mission">The Okinawa Memories Initiative goal is to provide a cultural and historical center piece to facilitate all things Okinawan.</p>
        
            <h1>The Founders</h1>
            <div className="row">
                <div className="column1"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><div className="name">MEMBER NAME</div></div>
                <div className="column1"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><div className="name">MEMBER NAME</div></div>
                <div className="column1"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><div className="name">MEMBER NAME</div></div>
            </div>
        
            <h1>Our Story</h1>
            <p id="desc">Our story begins with The Gail Project. A project dedicated to presenting one of the last remaining pictures of transitional Okinawa from World War II veteran Charles Gail. As The Gail Project grew, disciplines of all types began to emerge from the group such as digital media, web design, podcast, historical and much more. As we grew exponentially, our focus wayned from the original Gail Project and began covering all aspects of Okinawa. Thus the Okinawa Memories Initiative was born.</p>
        
            <h1>The Professionals</h1>
            <p id="desc">The Professionals lead team members and proivde a solid foundation for OMI. They also provide us with insight and connections from their respective professions.</p>
            <div className="row">
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            </div>
        
            <h1>The Team</h1>
            <p id="desc">The Team is composed of students, both undergraduate and graduate, of all types of disciplines and all grade levels. They comprise the core of OMIS task force and determine OMIs future.</p>
            <div className="row">
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            </div>
        
            <h1>The Alumni</h1>
            <p id="desc">The Alumni are members who have previously contributed to OMI but are no longer active.</p>
            <div className="row">
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            </div>
        
            <h1>The Sponsors</h1>
            <p id="desc">The Sponsors allow us to continue innovating as a project. They are the catalyst for the ability for OMI members to succeed</p>
            <div className="row">
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column2"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            </div>
        
            </div>
      </div>
    );
  }
}

const iconstyle = {
  width: "200px",
  height: "200px"
};

export default About;
