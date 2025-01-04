import React from 'react';

export default function NavBar(props) {
    return (
      <div class='nav'>
        <div class="icons"></div>
        <h1>{props.title}</h1>
        <div class="body"></div>
        <div class="icons"></div>
        <div class="icons"></div>
        <div class="icons"></div>
      </div>
    )
  }