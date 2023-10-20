window.addEventListener('onload', function ()  {
        for (let i = 0; i < difficulty.length; i++) {
        difficulty[i].checked = false;
}});


const startButton = document.getElementById("start-button")
const difficulty = document.getElementsByName("difficulty");
let pairs = 0;
function pairsMatchDiff() {
    if (difficulty[0].checked) {
         pairs =8; 
    } else if(difficulty[1].checked) {
        pairs =16;
    }else if(difficulty[2].checked){
        pairs = 24;
    }  
};
function shuffle() {
    
}

function changeBackground() {
    const label = document.getElementsByName("label");
    const checked0 = difficulty[0].checked;
    const checked1 = difficulty[1].checked;
    const checked2 = difficulty[2].checked;

    switch (true) {
        case checked0:
            label[0].style.color = "white";
            label[1].style.color = "black";
            label[2].style.color = "black";
            break;

        case checked1 :
            label[0].style.color = "black";
            label[1].style.color = "white";
            label[2].style.color = "black";
            break;

        case checked2 :
            label[0].style.color = "black";
            label[1].style.color = "black";
            label[2].style.color = "white";
            break;

        default:
            // Default case if none of the conditions are met
            break;
    }
}


