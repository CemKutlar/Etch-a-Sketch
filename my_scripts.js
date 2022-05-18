let gridNum = 0;
let totalGridCount = 256;
const main_container = document.querySelector(".main_container");
const grid_container = document.createElement("div");
let grids;
console.table(grids);

let gridArray;

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
    gridArray =  Array.from(grids);
}


function twoD_ArrayConverter(oneDarr) {
    const newArr = [];
    while(oneDarr.length) newArr.push(oneDarr.splice(0,cssColumnStyle));
    return newArr;
}

gridFactory(totalGridCount);
let twoDGridArr = twoD_ArrayConverter(gridArray);
gridCreateAnimation(twoDGridArr);

function gridCreateAnimation(gridTwoDArray) {
    let animationClassNum = 0;
    for(let i = 0; i<cssColumnStyle; i++) {
        for(let j = 0; j<cssColumnStyle; j++) {
            gridTwoDArray[i][j].classList.add("animation" + (i+j));
        }
    }

    for(let i = 0; i<totalGridCount; i++) {
        setTimeout(function timer() {
            let crossGrids = document.querySelectorAll(".animation"+i.toString());
            console.log(crossGrids);
            crossGrids.forEach(element => {
                element.classList.add("animateGrids");
            });
        }, i * 300);
    }
    
     
            // innerElem.classList.add("animation" + animationClassNum);
       
}

gridCreateAnimation(twoDGridArr);

