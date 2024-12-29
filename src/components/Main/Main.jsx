import React from 'react';
import { useState, useEffect } from 'react';

/* interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  major: string;
  graduationYear: string;
  profilePicture: string;
  created_at: string;
} */

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
        <div class="icons"></div>
        <div>{props.name}</div>
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

export default function Main() {

/*   const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users")
        .catch((err) => console.log("fetching user data failed"));
      const data = await response.json();
      setLoading(false);
      setUsers(data);
    };

    fetchUsers();
  }, []); */

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
          <Post image="https://assets.mixbook.com/images/optimized/jpg/inside/1073/2560/3fa25_christian_bowen_w_Oe_DB_Kn5sdo_unsplash_4c13550ced.webp" name="Sample Name 2" caption="Sample Caption 2" />
        </div>
      </div>
      <footer class="footer">
        <div>
          <h2 align="center">footer</h2>
        </div>
      </footer>
    </div>
  )
}