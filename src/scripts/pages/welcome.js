// src/scripts/pages/welcome.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderCitations } from "./citations.js";

export function renderWelcome() {
  /* html */
  return `
    <!-- code generated in welcome.js -->
    <h1>Student Portfolio</h1>
    ${renderMenu()}

    <h2>About Me</h2>
    <p>All About me...</p>
    <!-- an example image: Notice that images live in public/ -->
    <img src="./example-circle.svg" alt="A blue circle" >
<a href="https://creativecommons.org">portfolio</a> by <a href="https://creativecommons.org">Robby</a> is marked <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/zero.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
    <!-- end code generated in welcome.js -->
  `;
}
