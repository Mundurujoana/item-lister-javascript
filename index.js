//EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "joana's items"
// console.log(document.t);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);

//GETELEMENTBYID
// var headTitle = document.getElementById("header-title");
// console.log(heading);
// heading.textContent = "joana item lister";
// heading.innerHTML= "sarah item lister";
// heading.innerHTML='<h1> Hello </h1>';
// var header = document.getElementById("main-header");
// header.style.borderBottom = '1px solid black';

//GETELEMENTsBYCLASSNAME
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[2]);
items[2].textContent = 'Hello World !';
items[2].style.fontWeight ='bold';
items[2].style.fontSize ='10px';
items[2].style.backgroundColor ='blue';

// gives an error
// items.style.backgroundColor = 'white';
for(var i=0; i<items.length; i++) {
    items[i].style.backgroundColor ='yellow';
}




