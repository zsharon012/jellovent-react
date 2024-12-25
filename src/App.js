import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function NavBar(props) {
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

function Post(props) {
  return (
    <div class="profile_box">
      <div class="name_space">
        <div class="icons"></div>
        <div>{props.name}</div>
      </div>
      <img src={props.image} class="image" alt="event post image"/>
      <div class="icon_space">
        <div class="icons"></div>
        <div class="icons"></div>
        <div class="icons"></div>
      </div>
      <div class="captions">{props.caption}</div>
    </div>
  )
}

function App() {
  return (
    <div class="main">
      <NavBar title='jellovent' />
      <div class="search">
        <div class="container">
          <div class="box">
            <h2>Event Type</h2>
            <h2 class="category">
              event type name <br />
              event type name <br />
              event type name <br />
              event type name<br />
              event type name<br />
              event type name<br />
            </h2>
          </div>
          <Post image="https://clicklovegrow.com/wp-content/uploads/2019/08/1-2.jpg" name="Sample Name 1" caption="Sample Caption 1" />
          <Post image="https://assets.mixbook.com/images/optimized/jpg/inside/1073/2560/3fa25_christian_bowen_w_Oe_DB_Kn5sdo_unsplash_4c13550ced.webp" name="Sample Name 2" caption="Sample Name 2" />
        </div>
      </div>
      <footer class="footer">
        <div>
          <h2 align="center">footer</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
