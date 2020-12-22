
let sections = createElement("div");
setAttribute(sections, "class", "sections");
appendChild(mainDiv, sections);

let section1 = createElement("div");
setAttribute(section1, "class", "section1");
appendChild(sections, section1);

let section1details = createElement("div");
setAttribute(section1details, "class", "section1details");
appendChild(section1, section1details);

// Profile section starts
let profile = createElement("div");
setAttribute(profile, "class", "profile");
let profileIcon = createElement("img");
setAttribute(profileIcon, "src", "user.png");
setAttribute(profileIcon, "class", "icons");
appendChild(profile, profileIcon);

let profileHeader = createElement("span");
setAttribute(profileHeader, "class", "header");
profileHeader.innerText = " Profile";
appendChild(profile, profileHeader);

let profileContent = createElement("span");
setAttribute(profileContent, "class", "content");
profileContent.innerText =
  "Focused and skilful Frontend and mobile Developer. Played a successful role as the lead in a couple of projects. Developed and simplified numerous applications, standardized various processes and saved thousands of hours through my work. Trained and helped developers on AngularJS, Javascript, RPA and Chatbots. A firm believer in building various competencies- to get exposure and increase networking-  along with work.";
appendChild(profile, profileContent);
// Profile section ends
appendChild(section1details, profile);