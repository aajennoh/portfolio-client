import React from 'react';
import YouTube from 'react-youtube';
import {Divider} from 'antd';


class Projects extends React.Component {
  videoOnPlay(event) {
    // access to player in all event handlers via event.target
    event.target.playVideoAt(0);
  }

  
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        // autoplay: 1
      }
    };
 
    return (
      <div className="project-body">
        {/* <Divider/> */}
        <YouTube
          className="youtube-video"
          videoId="PCJDXS3jWGI"
          opts={opts}
          // onReady={this.videoOnReady}
          onPlay={this.videoOnPlay}
        />
        <div className="projects">
          <h1>BURP</h1>
          <ul>
            <li>Created an application for users to search, save, upvote, and downvote breweries</li>
            <li>Applied Ruby on Rails Rails API backend allowing users to persist favorited, liked, and disliked breweries</li>
            <li>Implemented Google Geolocation API to locate users’ current location and map breweries nearby</li>
            <li>Ablilty to search for breweries through an interactive SVG Map</li>
            <br></br>
            <li className="used">React, Rails API, ActiveRecord, Google Geolocation API, Open Brewery DB, React Infinite-Scroll, React Tooltip, JSON Web Tokens, Rails BCrypt, React SVG-Map, Semantic UI/Custom CSS</li>
          </ul>
        </div>
        <Divider/>
        <YouTube
          className="youtube-video"
          videoId="OpF81sbnZP0"
          opts={opts}
          // onReady={this.videoOnReady}
          onPlay={this.videoOnPlay}
        />
        <div className="projects">
          <h1>POSTCARD</h1>
          <ul>
            <li>Created a location sharing application where users can upload photos on Google Maps and can also look at other users’ locations</li>
            <li>Utilized a location marker on Google Maps for either the users’ current location or by creation upon click</li>
            <li>Populated a form for the user to upload a photo and description of said location</li>
            <li>Ability to click on location marker to render a modal of locations’ photo and description</li>
            <li>Ability to see other users’ map and location markers through a dropdown menu</li>
            <br></br>
            <li className="used">JavaScript, Rails API, ActiveRecord, Google Maps JavaScript API, Google Geolocation API, Cloudinary API, PostgreSQL, SQLite3, Custom CSS</li>
          </ul>
        </div>        
        <Divider/>
        <YouTube
          className="youtube-video"
          videoId="IsxyKe8ifRE"
          opts={opts}
          // onReady={this.videoOnReady}
          onPlay={this.videoOnPlay}
        />
        <div className="projects">
          <h1>COOKSTARTER</h1>
          <ul>
            <li>Created a cooking application to create and share ingredients and recipes with other users</li>
            <li>Developed a budget tracker that helps users find recipes under said budget</li>
            <li>Ability to sort through categories of breakfast, snack, and dinner for each recipe</li>
            <li>Supplied users with information such as calories, amount of protein, and cost per ingredient, which is added up when creating a recipe to give the user total sum of all categories</li>
            <br></br>
            <li className="used">Ruby, Rails API, Object-Oriented Programming, ActiveRecord, Custom CSS</li>
          </ul>
        </div>
        <Divider/>

      </div>

    );
  }
}

export default Projects