import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://media.istockphoto.com/vectors/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-vector-id1316420668?k=20&m=1316420668&s=612x612&w=0&h=Z2cc0HZXkovLCVmoJ8LCIG5eWMetgOX9oLe-lF0OWJM=" />
          </div>
          <h4>Abhiram Jogimahanthi</h4>
          <p>Member of Cognizance Club</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}