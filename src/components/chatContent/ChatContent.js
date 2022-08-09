import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://media.istockphoto.com/vectors/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-vector-id1316420668?k=20&m=1316420668&s=612x612&w=0&h=Z2cc0HZXkovLCVmoJ8LCIG5eWMetgOX9oLe-lF0OWJM=",
      type: "",
      msg: "Very Good Evening Prathan Manthri ji, How are you?",
    },
    {
      key: 2,
      image:
        "https://i.pinimg.com/originals/90/9b/a9/909ba91bd9e826985b6546d37491ef30.jpg",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://i.pinimg.com/originals/90/9b/a9/909ba91bd9e826985b6546d37491ef30.jpg",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://media.istockphoto.com/vectors/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-vector-id1316420668?k=20&m=1316420668&s=612x612&w=0&h=Z2cc0HZXkovLCVmoJ8LCIG5eWMetgOX9oLe-lF0OWJM=",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://i.pinimg.com/originals/90/9b/a9/909ba91bd9e826985b6546d37491ef30.jpg",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://media.istockphoto.com/vectors/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-vector-id1316420668?k=20&m=1316420668&s=612x612&w=0&h=Z2cc0HZXkovLCVmoJ8LCIG5eWMetgOX9oLe-lF0OWJM=",
      type: "",
      msg: "what plan ?",
    },
    {
      key: 7,
      image:
        "https://i.pinimg.com/originals/90/9b/a9/909ba91bd9e826985b6546d37491ef30.jpg",
      type: "other",
      msg: "I'm taliking about the assembly",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://media.istockphoto.com/vectors/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-vector-id1316420668?k=20&m=1316420668&s=612x612&w=0&h=Z2cc0HZXkovLCVmoJ8LCIG5eWMetgOX9oLe-lF0OWJM=",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://i.pinimg.com/originals/90/9b/a9/909ba91bd9e826985b6546d37491ef30.jpg"
              />
              <p>Narendra Modi</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
