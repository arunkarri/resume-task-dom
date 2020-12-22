
//Work experience starts
let section2 = createElement("div");
setAttribute(section2, "class", "section2");
appendChild(sections, section2);

let section2Child = createElement('div');
setAttribute(section2Child, 'class', 'profile');

let suitcaseImg = createElement('img');
setAttribute(suitcaseImg, 'src', 'suitcase.png');
setAttribute(suitcaseImg, 'class', 'icons');

let workExHeader = createElement('span');
setAttribute(workExHeader, 'class', 'header');
workExHeader.innerText = ' Work Experience';
appendChild(section2Child, suitcaseImg);
appendChild(section2Child, workExHeader);

 // DLT Labs code start
  let workSection = createElement('div');
  setAttribute(workSection, 'class', 'sections');

  let dlHeader = createElement('div');
  setAttribute(dlHeader, 'class', 'skillsection2 years');
  let dlTitle = createElement('h5');
  dlTitle.innerText = 'Senior Software Engineer';
  appendChild(dlHeader, dlTitle);
  appendChild(workSection, dlHeader);


  let yearHeader = createElement('div');
  setAttribute(yearHeader, 'class', 'skillsection1 skills');
  let dlYear = createElement('h5');
  dlYear.innerText = '2019 - Current';
  appendChild(yearHeader, dlYear);
  appendChild(workSection, yearHeader);

  let dlCompany = createElement('div');
  let dlCompanyHeader = createElement('h5');
  dlCompanyHeader.innerText = 'DLT Labs, Hyderabad';
  appendChild(dlCompany, dlCompanyHeader);
  appendChild(workSection, dlCompany);


  let dlUl = createElement('ul');
 
  let dlLi1 = createElement('li');
  dlLi1.innerText = 'Build end to end modules using Angular 7.';
  appendChild(dlUl, dlLi1);

  let dlLi2 = createElement('li');
  dlLi2.innerText = 'Develop live mobile applications for cross platforms using Flutter.';
  appendChild(dlUl, dlLi2);

  let dlLi3 = createElement('li');
  dlLi3.innerText = 'Work in multiple applications, while working on POCs to explore new functionalities for upcoming projects and process improvements';
  appendChild(dlUl, dlLi3);

  let dlLi4 = createElement('li');
  dlLi4.innerText = 'Built a CICD pipeline using Jenkins and fastlane for Android and iOS ';
  appendChild(dlUl, dlLi4);

  let dlLi5 = createElement('li');
  dlLi5.innerText = 'Follow coding standards and design patterns while working on the projects.';
  appendChild(dlUl, dlLi5);

  appendChild(workSection, dlUl);
  appendChild(section2Child, workSection);

  // Verizon code start

  let workSection2 = createElement('div');
  setAttribute(workSection2, 'class', 'sections');

  let vzHeader = createElement('div');
  setAttribute(vzHeader, 'class', 'skillsection1 skills');
  let vzTitle = createElement('h5');
  vzTitle.innerText = 'Analyst System Development';
  appendChild(vzHeader, vzTitle);
  appendChild(workSection2, vzHeader);


  let vzyearHeader = createElement('div');
  setAttribute(vzyearHeader, 'class', 'skillsection2 years');
  let vzYear = createElement('h5');
  vzYear.innerText = '2015 - 2019';
  appendChild(vzyearHeader, vzYear);
  appendChild(workSection2, vzyearHeader);

  let vzCompany = createElement('div');
  let vzCompanyHeader = createElement('h5');
  vzCompanyHeader.innerText = 'Verizon, Hyderabad';
  appendChild(vzCompany, vzCompanyHeader);
  appendChild(workSection2, vzCompany);


  let vzUl = createElement('ul');
 
  let vzLi1 = createElement('li');
  vzLi1.innerText = 'Work in detailed design, requirement gathering for the Web application project, and implementation of business requirements.';
  appendChild(vzUl, vzLi1);

  let vzLi2 = createElement('li');
  vzLi2.innerText = 'Work in implementation of business requirements, defects resolution. Support application maintenance releases and deliverables.';
  appendChild(vzUl, vzLi2);

  let vzLi3 = createElement('li');
  vzLi3.innerText = 'Work on POCs to provide an opportunity for the management to evaluate a new tool/technology.';
  appendChild(vzUl, vzLi3);

  let vzLi4 = createElement('li');
  vzLi4.innerText = 'Lead the team in standardizing the web design and procedures for better UX. Involve in smaller projects or phases of a larger project with accountability for tasks assigned; providing project updates or timelines as needed.';
  appendChild(vzUl, vzLi4);

  appendChild(workSection2, vzUl);

  appendChild(section2Child, workSection2);

