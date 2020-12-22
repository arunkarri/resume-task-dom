
// Skill section starts
let skills = createElement("div");
setAttribute(skills, "class", "profile");

// Skills icon
let skillsIcon = createElement("img");
setAttribute(skillsIcon, "src", "flask.png");
setAttribute(skillsIcon, "class", "icons");
appendChild(skills, skillsIcon);

//Skills header
let skillsHeader = createElement("span");
setAttribute(skillsHeader, "class", "header");
skillsHeader.innerText = " Skills";
appendChild(skills, skillsHeader);

//Tech skills
let skillSection = createElement('div');
setAttribute(skillSection, 'class', 'sections');
let techSkillHeader =  createElement('h4');
setAttribute(techSkillHeader, 'class', 'skillheader');
techSkillHeader.innerText = 'Technical Skills';
appendChild(skillSection, techSkillHeader);

let techSection = createElement('div');
setAttribute(techSection, 'class', 'skillsection1 skills');
//Ratings headers start
let js = createElement('div');
js.innerText = 'Javascript';
appendChild(techSection, js);

let css = createElement('div');
css.innerText = 'CSS';
appendChild(techSection, css);

let html = createElement('div');
html.innerText = 'HTML';
appendChild(techSection, html);

let angular = createElement('div');
angular.innerText = 'Angular';
appendChild(techSection, angular);

let flutter = createElement('div');
flutter.innerText = 'Flutter';
appendChild(techSection, flutter);

let rpa = createElement('div');
rpa.innerText = 'RPA';
appendChild(techSection, rpa);

let cf = createElement('div');
cf.innerText = 'Cloud Foundry';
appendChild(techSection, cf);
appendChild(skillSection, techSection);

//Range sliders code starts

let techBars = createElement('div');
setAttribute(techBars, 'class', 'skillsection2 sliders');

let jsR = createElement('input');
setAttribute(jsR, 'type', 'range');
setAttribute(jsR, 'value', '80');
setAttribute(jsR, 'disabled', 'true');
appendChild(techBars, jsR);

let cssR = createElement('input');
setAttribute(cssR, 'type', 'range');
setAttribute(cssR, 'value', '50');
setAttribute(cssR, 'disabled', 'true');
appendChild(techBars, cssR);

let htmlR = createElement('input');
setAttribute(htmlR, 'type', 'range');
setAttribute(htmlR, 'value', '50');
setAttribute(htmlR, 'disabled', 'true');
appendChild(techBars, htmlR);

let angularR = createElement('input');
setAttribute(angularR, 'type', 'range');
setAttribute(angularR, 'value', '90');
setAttribute(angularR, 'disabled', 'true');
appendChild(techBars, angularR);

let flutterR = createElement('input');
setAttribute(flutterR, 'type', 'range');
setAttribute(flutterR, 'value', '80');
setAttribute(flutterR, 'disabled', 'true');
appendChild(techBars, flutterR);

let rpaR = createElement('input');
setAttribute(rpaR, 'type', 'range');
setAttribute(rpaR, 'value', '90');
setAttribute(rpaR, 'disabled', 'true');
appendChild(techBars, rpaR);

let cfR = createElement('input');
setAttribute(cfR, 'type', 'range');
setAttribute(cfR, 'value', '60');
setAttribute(cfR, 'disabled', 'true');
appendChild(techBars, cfR);

appendChild(skillSection, techBars);

let br1 = createElement('br');
appendChild(section1, br1);
let br2 = createElement('br');
appendChild(section1, br2);
let br3 = createElement('br');
appendChild(section1, br3);
let br4 = createElement('br');
appendChild(section1, br4);

appendChild(skills, skillSection);
appendChild(section1details, skills);

// Skill section ends