let gridNum = 0;
let totalGridCount = 256;
const main_container = document.querySelector(".main_container");
const grid_container = document.createElement("div");
let grids;
console.table(grids);


const gridArray = Array.from(grid_container);

//below code stores the first argument in this css property -> grid-template-columns: repeat(<cssColumnStyle>, 1fr);
let cssColumnStyle = Math.sqrt(totalGridCount).toString();

// sets gridTemplateColumns property of grid_container according to totalGridCount
grid_container.style.gridTemplateColumns = "repeat("+ cssColumnStyle+ ", 1fr)";

main_container.appendChild(grid_container);
grid_container.classList.add("grid_container");

function createGrid(num) {
    const div = document.createElement("div");
    div.id = "g" + num; 
    div.className ="grid";
    grid_container.appendChild(div);
}

function gridFactory(totalGridCount){
    for(let i = 0; i < totalGridCount; i++){
        createGrid(i);
    }
    grids = document.querySelectorAll(".grid");
    grids.forEach(element => {
        let size = (960 / cssColumnStyle).toString();
        element.style.width = size +"px";
        element.style.height = size +"px";
        console.log(size);
        
    });
}


gridFactory(totalGridCount);



function gridCreateAnimation(gridArray) {

}