// const soile=document.querySelector('.soile')
let matrix = document.querySelector('.matrix')
let currentDiv


for (let row = 0; row < 15; row++) {
   for (let col = 0; col < 20; col++) {
      matrix.innerHTML += `<div id=${row},${col} class="cube" type="0"></div>`;

   }

}
// console.log(matrix)


fullMatrix = [
   ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
   ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
   ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'C', 'S', 'C', 'S', 'S', 'A', 'A', 'A', 'A', 'S'],
   ['S', 'S', 'S', 'C', 'C', 'S', 'S', 'S', 'S', 'C', 'C', 'C', 'C', 'S', 'S', 'A', 'A', 'A', 'A', 'S'],
   ['S', 'S', 'C', 'C', 'C', 'C', 'S', 'S', 'S', 'S', 'C', 'C', 'C', 'C', 'S', 'A', 'A', 'A', 'A', 'S'],
   ['S', 'S', 'S', 'C', 'C', 'S', 'S', 'S', 'S', 'S', 'S', 'C', 'S', 'S', 'S', 'S', 'T', 'T', 'S', 'S'],
   ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'T', 'T', 'S', 'S'],
   ['S', 'S', 'S', 'S', 'S', 'S', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'T', 'T', 'S', 'S'],
   ['S', 'S', 'S', 'S', 'S', 'S', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'T', 'T', 'S', 'S'],
   ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
   ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
   ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
   ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
   ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
   ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],


]

for (let row = 0; row < fullMatrix.length; row++) {
   for (let col = 0; col < fullMatrix[row].length; col++) {
      currentDiv = document.getElementById(`${row},${col}`);

      if (fullMatrix[row][col] == 'L') {
         currentDiv.classList.add('soil');

      }
      else if (fullMatrix[row][col] == 'G') {
         currentDiv.classList.add('grass');

      }

      else if (fullMatrix[row][col] == 'S') {
         currentDiv.classList.add('sky');

      }

      else if (fullMatrix[row][col] == 'C') {
         currentDiv.classList.add('cloud');

      }

      else if (fullMatrix[row][col] == 'R') {
         currentDiv.classList.add('rock');

      }
      else if (fullMatrix[row][col] == 'T') {
         currentDiv.classList.add('trunk');

      }
      else if (fullMatrix[row][col] == 'A') {
         currentDiv.classList.add('leaves');

      }

      // console.log (currentDiv)
   }
}

// let leaves = document.querySelector(".leaves")

const storage=document.querySelector('.storage')
const x = document.querySelector(".axe");
x.addEventListener("click", hideTile);
// axe.addEventListener('click',()=>{
function hideTile() {
   document.addEventListener("click", (e) => {
      // console.log(e.target)
      let y = e.target.getAttribute("class")
      // console.log(y)
      let id = e.target.getAttribute("id")
      if (y == "cube leaves") {
         // console.log('hi')

         document.getElementById(`${id}`).classList.remove("leaves");
         document.getElementById(`${id}`).classList.add("sky");
         storage.classList.add("leaves");
         
         //   console.log(id)
      }
      else if (y == "cube trunk") {
         document.getElementById(`${id}`).classList.remove("trunk");
         document.getElementById(`${id}`).classList.add("sky");
         storage.classList.add("trunk");
      }
   })

}



const p = document.querySelector(".pickAxe");
p.addEventListener("click", hideTile2);
// axe.addEventListener('click',()=>{
function hideTile2() {
   document.addEventListener("click", (event) => {
      // console.log(e.target)
      let y = event.target.getAttribute("class")
      // console.log(y)
      let id = event.target.getAttribute("id")
      if (y == "cube rock") {
         // console.log('hi')

         document.getElementById(`${id}`).classList.remove("rock");
         document.getElementById(`${id}`).classList.add("sky");
         storage.classList.add("rock");
         //   console.log(id)
      }

   })

}


const s = document.querySelector(".shoval");
s.addEventListener("click", hideTile3);
// axe.addEventListener('click',()=>{
function hideTile3() {
   document.addEventListener("click", (e) => {
      // console.log(e.target)
      let y = e.target.getAttribute("class")
      // console.log(y)
      let id = e.target.getAttribute("id")
      if (y == "cube soil") {
         // console.log('hi')

         document.getElementById(`${id}`).classList.remove("soil");
         document.getElementById(`${id}`).classList.add("sky");
         storage.classList.add("soil");
         //   console.log(id)
      }
      else if (y == "cube grass") {
         document.getElementById(`${id}`).classList.remove("grass");
         document.getElementById(`${id}`).classList.add("sky");
         storage.classList.add("grass");
      }
   })

}

