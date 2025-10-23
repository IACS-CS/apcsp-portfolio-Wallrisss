
// src/scripts/utils/renderMenu.js
export function renderMenu() {
  /* html */
  return `   
    <!-- code generated in renderMenu.js -->
    <nav>
      <ul>
      <ul> boring links<ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/binary-search">Binary Search Project</a></li>
      <li><a href="#/citations">citations</a></li>
      <li><a href="#/bomb">bomb</a></li>
      </ul>
    </nav>
    <button id="spin-btn">Spin the Wheel!</button>
    <div style="


      display: flex; 
      justify-content: center; align-items: stretch; flex-direction: column;">
      <div class="arrow"
      style="width: 0; 
      height: 0; 
      border-left: 10px solid transparent; 
      border-right: 10px solid transparent; 
      border-top: 30px solid red;
      align-self: center;
      position: relative; 
      margin-bottom: -10px;"
      ></div>
      <div id="wheel"></div>
    </div>
    <!-- end code generated in renderMenu.js -->
    `;
}