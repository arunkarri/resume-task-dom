let mainDiv = createElement("div");
setAttribute(mainDiv, "class", "mainbox");
append(mainDiv);

let bg1 = createElement("div");
let img = createElement("img");

setAttribute(bg1, "class", "bg1");
setAttribute(img, "src", "arun.jpg");
setAttribute(img, "class", "avatar");
appendChild(bg1, img);
appendChild(mainDiv, bg1);

let bg2 = createElement("div");
let name = createElement("div");
name.innerText = "Arun Kashyap";
setAttribute(bg2, "class", "bg2");
setAttribute(name, "class", "name");

appendChild(bg2, name);
appendChild(mainDiv, bg2);

let bg3 = createElement("div");
setAttribute(bg3, "class", "bg3");
appendChild(mainDiv, bg3);

let details = createElement("div");
setAttribute(details, "class", "details");
appendChild(mainDiv, details);

let addr = createElement("span");
addr.innerText = " 302, Avantika's Saraswathi, Miyapur, 500049 | ";

let phone = createElement("span");
phone.innerText = "8886861616 | ";

let mail = createElement("span");
mail.innerText = " kashyap1049@gmail.com  | ";

let linkedin = createElement("span");
linkedin.innerText = " https://www.linkedin.com/in/arun-kashyap-42a4767a/";

let hr = createElement("hr");
setAttribute(hr, "color", "#CFCFCF");

appendChild(details, addr);
appendChild(details, phone);
appendChild(details, mail);
appendChild(details, linkedin);
appendChild(details, hr);



//reusable functions created for DOM manipulations
function createElement(element) {
    return document.createElement(element);
  }
  
  function append(element) {
    return document.body.append(element);
  }
  
  function appendChild(element, child) {
    return element.appendChild(child);
  }
  
  function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
  }