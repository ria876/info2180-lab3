window.onload = function(){
  
    let brd = document.getElementById("board");
    let cell = brd.getElementsByTagName("div");

    for(let c = 0; c < 9; c++){
        cell[c].classList.add("square");
    
    }
}

