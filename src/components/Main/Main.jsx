import React from 'react';
import NavBar from "../NavBar.jsx";
import Post from "../Post.jsx";
import FilterBox from "../FilterBox.jsx";
import Footer from "../Footer.jsx";

export default function Main() {
  return (
    <div class="main">
      <NavBar title='jellovent' />
      <div class="search">
        <div class="container">
          <FilterBox />
          <Post image="https://clicklovegrow.com/wp-content/uploads/2019/08/1-2.jpg" name="Sample Name 1" caption="Sample Caption 1" />
          <Post image="https://assets.mixbook.com/images/optimized/jpg/inside/1073/2560/3fa25_christian_bowen_w_Oe_DB_Kn5sdo_unsplash_4c13550ced.webp" name="Sample Name 2" caption="Sample Caption 2" />
        </div>
      </div>
      <Footer />
    </div>
  )
}