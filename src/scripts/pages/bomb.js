import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

export function renderbomb() {
  /* html */

  return ` 
  <h1>bomb</h1>
    ${renderMenu()}
    <p> bye bye <p>
    ${renderIframe("https://wallrisss.github.io/bomb//")}
  `;
}