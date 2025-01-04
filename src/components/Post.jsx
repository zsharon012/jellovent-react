import React from 'react';
import { useState, useEffect } from 'react';

export default function Post(props) {
    const [mode, setLike] = useState('unliked');
  
    const switchLike = () => {
      if (mode == 'unliked') {
        setLike('liked');
      } else if (mode == 'liked') {
        setLike('unliked');
      }
    }
  
    useEffect(() => {
      console.log(mode);
    }, [mode]);
  
    return (
      <div class="profile_box">
        <div class="name_space">
          <div class="profile_pic"></div>
          <h3>{props.name}</h3>
        </div>
        <img src={props.image} class="image" alt="event post image" />
        <div class="icon_space">
          <div style={{ backgroundColor: mode == 'unliked' ? 'black' : 'lightpink' }} class="icons" onClick={switchLike}></div>
          <div class="icons"></div>
          <div class="icons"></div>
        </div>
        <div class="captions">{props.caption}</div>
      </div>
    )
  }