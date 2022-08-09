import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://i.pinimg.com/originals/90/9b/a9/909ba91bd9e826985b6546d37491ef30.jpg",
      id: 1,
      name: "Narendra Modi",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://media.vanityfair.com/photos/58910ced1eeeaa1f3b7f5e92/master/w_1600,h_2000,c_limit/ceos-fortune-500-immigrants-ss01.jpg",
      id: 2,
      name: "Sundar Pichai",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://im.rediff.com/cricket/2020/apr/11kohli1.jpg?w=670&h=900",
      id: 3,
      name: "Virat Kohli",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://cutewallpaper.org/21/shahrukh-khan-wallpaper/204+-Shahrukh-Khan-Images,-Wallpaper-and-Photo-Hd-Gallery-Download.jpg",
      id: 4,
      name: "Shah Rukh Khan",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://i.guim.co.uk/img/media/8a1950ae09e3eae29f091c79eedfca98f92f08ee/0_62_3484_2092/master/3484.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0aa90e4e4a71cf989dacd15a5119d270",
      id: 5,
      name: "Neeraj Chopra",
      active: false,
      isOnline: false,
    },
    {
      image:
        "http://starsunfolded.com/wp-content/uploads/2014/05/Katrina-Kaif.jpg",
      id: 6,
      name: "Katrina Kaif",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://images.news18.com/ibnlive/uploads/2022/06/mithali-raj-bcci.jpg",
      id: 7,
      name: "Mithali Raj",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      id: 8,
      name: "M S Dhoni",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.pinimg.com/originals/18/fd/64/18fd644e9cdf81ab785d606584a384fb.jpg",
      id: 9,
      name: "Elon Musk",
      active: false,
      isOnline: true,
    },
    {
      image: "https://bestprofilepictures.com/wp-content/uploads/2020/08/Allu-Arjun-Profile-Picture.jpg",
      id: 10,
      name: "Allu Arjun",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <span>Add Chat</span>
          <i className="fa fa-plus"></i>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

