
//Achievements section starts
let achievementSection = createElement('div');
setAttribute(achievementSection, 'class', 'profile');

let achievementsIcon = createElement('img');
setAttribute(achievementsIcon, 'src', 'badge.png');
setAttribute(achievementsIcon, 'class', 'icons');
appendChild(achievementSection, achievementsIcon);

let achievementsHeader = createElement('span');
setAttribute(achievementsHeader, 'class', 'header');
achievementsHeader.innerText = ' Achievememts';
appendChild(achievementSection, achievementsHeader);

achUl = createElement('ul');

li1 = createElement('li');
li1.innerText = "Won React.js Hackathon event - Reached Super 6 out of 150 teams, and then won the first prize out of the 6 teams - by embedding maximum functionalities in the solution within a span of 3 days.";
appendChild(achUl, li1);

li2 = createElement('li');
li2.innerText = "Stood 3rd in DevOps Cup out of 50 teams. Played a key role in the contribution by fixing 100's of source code issues, making the application secure";
appendChild(achUl, li2);

li3 = createElement('li');
li3.innerText = "Received spot award for leading entire development effort and delivering Vendor Analytics Project to Sourcing Team.";
appendChild(achUl, li3);

li4 = createElement('li');
li4.innerText = "Stood 3rd in DevOps Cup out of 50 teams. Played a key role in the contribution by fixing 100's of source code issues, making the application secure";
appendChild(achUl, li4);

li5 = createElement('li');
li5.innerText = "Received spot award for building a web portal for users, bringing down the manual effort of IT team by saving 1000 hours and enabling 2200 users to Access Review Automation Portal.";
appendChild(achUl, li5);

appendChild(achievementSection, achUl);
appendChild(section1, achievementSection);

//Achievements section ends