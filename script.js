// ................Header..................
const h1 = document.createElement("h1");
h1.textContent = " Multiplication Table"
console.log(h1);

//Showing the h1 content on the browser

const body = document.querySelector("body");
body.appendChild(h1);
h1.style.textAlign = "center";

// SHOW MULTIPLICATION TABLE IN BROWSER

// STEP FIRST: CREATING A PARENT SECTION
const section = document.createElement("section");
console.log("section");

//NOW LOGIC OF MULTIPLICATION TABLE
for (let i = 1; i <= 10; i++) {

      // CREATING 10 DIVS
      const div = document.createElement("div");
      console.log(div);

      for (let j = 1; j <= 10; j++) {

            //  CREATING A PARAGRAPH
            const p = document.createElement("p");
            p.textContent = `${i} X ${j} = ${i * j}`;

            // ADDING ALL PARAGRAPH INTO 10 DIFFERENT DIVS
            div.appendChild(p);
            console.log(p);
      }
      //  ADDING ALL DIVS INTO SECTION
      section.appendChild(div);
      console.log(div);

      // Adding the colors to the div
      div.style.cssText = `
      border-radius: 10px;
      background-color: rgb(${Math.random() * 500}, ${Math.random() * 500}, ${Math.random() * 500}, ${Math.random() * 10});
      `

}
// SHOWING ALL SECTION CONTENTS INTO THE BROWSER
body.appendChild(section);

// Styling
body.style.margin = "0 180px";
section.style.cssText = `
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(5, 1fr);
font-size: 18px;
font-weight: bold;
gap: 10px;
text-align: center;
background-color: white;
`


// THIS IS UPDATED 