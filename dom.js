// console.log("Dom file conneted");

// const student = " Mahmudul"
// student = "hasan"
// console.log(student);

 


// const tegConatiner = document.getElementsByTagName("h1");
// const idContainer = document.getElementById('frist')

// console.log(idContainer);

// where to show


 const mainContainer = document.getElementById('mainContainer')

// creating container

 const divContainer = document.createElement('section');
divContainer.classList.add('proplmeClass')

// crearing some div
 const div1 = document.createElement('div')
 const div2 = document.createElement('div')
 const div3 = document.createElement('div')
 const div4 = document.createElement('div')
 const div5 = document.createElement('div')

//  creating some pargrage tag

 const p1 = document.createElement('p')
 const p2 = document.createElement('p')
 const p3 = document.createElement('p')
 const p4 = document.createElement('p')
 const p5 = document.createElement('p')

//  inner text adding

 p1.innerText='Mahmudul hasan'
 p2.innerText='Mahmudul hasan'
 p3.innerText='Mahmudul hasan'
 p4.innerText='Mahmudul hasan'
 p5.innerText='Mahmudul hasan'

//  appendChild
div1.appendChild(p1)
divContainer.appendChild(div1)
// console.log(div1);
div2.appendChild(p2)
divContainer.appendChild(div2)
div3.appendChild(p3)
divContainer.appendChild(div3)
div4.appendChild(p4)
divContainer.appendChild(div4)
div5.appendChild(p5)
divContainer.appendChild(div5)

mainContainer.appendChild(divContainer);
console.log(divContainer);