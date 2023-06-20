const matrix_container = document.getElementById("matrix-container");
const submit_btn = document.getElementById("submit-btn");
const row_input = document.getElementById("row-input");
const col_input = document.getElementById("col-input");


function emptyNode(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

submit_btn.addEventListener("click", (e) => {
    let row_value = parseInt(row_input.value);
    let col_value = parseInt(col_input.value);
    let cells = {};
    let counter=0;
    


    emptyNode(matrix_container);
   

    matrix_container.style.width = `${50 * col_input.value}px`;
    matrix_container.style.height = `${50 * row_input.value}px`;
    // matrix_container.style.border = "2px solid red";

    for (let r = 0; r < row_value; r++) {
        for (let c = 0; c < col_value; c++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("data-index", `${r}-${c}`);
            
            matrix_container.appendChild(cell);
            cells[`${r}-${c}`] = cell;


        }

    }

    console.log(cells);

    for ( let c = 0; c < col_value; c++) {
        for ( let r = 0; r < row_value; r++) {
            if (c % 2 === 0) {
                 cells[`${r}-${c}`].innerText=`${++counter}`;
            } else {
                 cells[`${row_value-1-r}-${c}`].innerText=`${++counter}`;
            }

        }

    }



})



