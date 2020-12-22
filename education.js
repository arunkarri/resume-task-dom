//Education section


let graduateImg = createElement('img');
setAttribute(graduateImg, 'src', 'graduate.png');
setAttribute(graduateImg, 'class', 'icons');

let gradHeader = createElement('span');
setAttribute(gradHeader, 'class', 'header');
gradHeader.innerText = ' Education';
appendChild(section2Child, graduateImg);
appendChild(section2Child, gradHeader);

//College 1 - Bachelor College
let table1 = createElement('table');
let thead1 = createElement('thead');
let btr1 = createElement('tr');
let bth1 = createElement('th');
setAttribute(bth1, 'colspan', '2');
let btitle = createElement('h5');
btitle.innerText = 'Bachelor of Engineering (EEE)';
appendChild(bth1, btitle);
appendChild(btr1, bth1);
appendChild(thead1, btr1);

let tbody1 = createElement('tbody');

//row1 in bachelor college
let bdtr1 = createElement('tr');

let bdtd1 = createElement('td');
setAttribute(bdtd1, 'class', 'td-left');
bdtd1.innerText = 'College';
appendChild(bdtr1, bdtd1 );
appendChild(tbody1, bdtr1 );

let bdtd2 = createElement('td');
setAttribute(bdtd2, 'class', 'td-right');
bdtd2.innerText = 'Chaitanya Bharathi Institute of Technology';
appendChild(bdtr1, bdtd2 );
appendChild(tbody1, bdtr1 );

//row2 in bachelor college
let bdtr2 = createElement('tr');

let bdtd3 = createElement('td');
setAttribute(bdtd3, 'class', 'td-left');
bdtd3.innerText = 'Year of study';
appendChild(bdtr2, bdtd3 );
appendChild(tbody1, bdtr2 );

let bdtd4 = createElement('td');
setAttribute(bdtd4, 'class', 'td-right');
bdtd4.innerText = '2011-2015';
appendChild(bdtr2, bdtd4 );
appendChild(tbody1, bdtr2 );

//row3 in bachelor college
let bdtr3 = createElement('tr');

let bdtd5 = createElement('td');
setAttribute(bdtd5, 'class', 'td-left');
bdtd5.innerText = 'Aggregate';
appendChild(bdtr3, bdtd5 );
appendChild(tbody1, bdtr3 );

let bdtd6 = createElement('td');
setAttribute(bdtd6, 'class', 'td-right');
bdtd6.innerText = '75%';
appendChild(bdtr3, bdtd6 );
appendChild(tbody1, bdtr3 );

appendChild(table1, tbody1 );
appendChild(table1, thead1);
appendChild(section2Child, table1);
// end of bachelor college



//College 2 - Intermediate College
let table2 = createElement('table');
let thead2 = createElement('thead');
let itr1 = createElement('tr');
let ith1 = createElement('th');
setAttribute(ith1, 'colspan', '2');
let ititle = createElement('h5');
ititle.innerText = 'Intermediate Education (MPC)';
appendChild(ith1, ititle);
appendChild(itr1, ith1);
appendChild(thead2, itr1);

let tbody2 = createElement('tbody');

//row1 in intermediate college
let idtr1 = createElement('tr');

let idtd1 = createElement('td');
setAttribute(idtd1, 'class', 'td-left');
idtd1.innerText = 'College';
appendChild(idtr1, idtd1 );
appendChild(tbody1, idtr1 );

let idtd2 = createElement('td');
setAttribute(idtd2, 'class', 'td-right');
idtd2.innerText = 'Vignan Junior College';
appendChild(idtr1, idtd2 );
appendChild(tbody2, idtr1 );

//row2 in intermediate college
let idtr2 = createElement('tr');

let idtd3 = createElement('td');
setAttribute(idtd3, 'class', 'td-left');
idtd3.innerText = 'Year of study';
appendChild(idtr2, idtd3 );
appendChild(tbody2, idtr2 );

let idtd4 = createElement('td');
setAttribute(idtd4, 'class', 'td-right');
idtd4.innerText = '2009-2011';
appendChild(idtr2, idtd4 );
appendChild(tbody2, idtr2 );

//row3 in bachelor college
let idtr3 = createElement('tr');

let idtd5 = createElement('td');
setAttribute(idtd5, 'class', 'td-left');
idtd5.innerText = 'Aggregate';
appendChild(idtr3, idtd5 );
appendChild(tbody2, idtr3 );

let idtd6 = createElement('td');
setAttribute(idtd6, 'class', 'td-right');
idtd6.innerText = '98%';
appendChild(idtr3, idtd6 );
appendChild(tbody2, idtr3 );

appendChild(table2, tbody2 );
appendChild(table2, thead2);
appendChild(section2Child, table2);
//end of college 2

//College 3 - School
let table3 = createElement('table');
let thead3 = createElement('thead');
let str1 = createElement('tr');
let sth1 = createElement('th');
setAttribute(sth1, 'colspan', '2');
let stitle = createElement('h5');
stitle.innerText = 'Secondary Education';
appendChild(sth1, stitle);
appendChild(str1, sth1);
appendChild(thead3, str1);

let tbody3 = createElement('tbody');

//row1 in school
let sdtr1 = createElement('tr');

let sdtd1 = createElement('td');
setAttribute(sdtd1, 'class', 'td-left');
sdtd1.innerText = 'College';
appendChild(sdtr1, sdtd1 );
appendChild(tbody1, sdtr1 );

let sdtd2 = createElement('td');
setAttribute(sdtd2, 'class', 'td-right');
sdtd2.innerText = 'St. Joseph\'s High School';
appendChild(sdtr1, sdtd2 );
appendChild(tbody3, sdtr1 );

//row2 in school
let sdtr2 = createElement('tr');

let sdtd3 = createElement('td');
setAttribute(sdtd3, 'class', 'td-left');
sdtd3.innerText = 'Year of study';
appendChild(sdtr2, sdtd3 );
appendChild(tbody3, sdtr2 );

let sdtd4 = createElement('td');
setAttribute(sdtd4, 'class', 'td-right');
sdtd4.innerText = '2008-2009';
appendChild(sdtr2, sdtd4 );
appendChild(tbody3, sdtr2 );

//row3 in school
let sdtr3 = createElement('tr');

let sdtd5 = createElement('td');
setAttribute(sdtd5, 'class', 'td-left');
sdtd5.innerText = 'Aggregate';
appendChild(sdtr3, sdtd5 );
appendChild(tbody3, sdtr3 );

let sdtd6 = createElement('td');
setAttribute(sdtd6, 'class', 'td-right');
sdtd6.innerText = '89%';
appendChild(sdtr3, sdtd6 );
appendChild(tbody3, sdtr3 );

appendChild(table3, tbody3 );
appendChild(table3, thead3);
appendChild(section2Child, table3);
//end of school


appendChild(section2, section2Child);
appendChild(sections,section2);