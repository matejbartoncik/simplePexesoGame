window.addEventListener('onload', function ()  {
        for (let i = 0; i < difficulty.length; i++) {
        difficulty[i].checked = false;
}});
const startButton = document.getElementById("start-button")
const difficulty = document.getElementsByName("difficulty");
function pairsMatchDiff() {
    let pairs = 0;
    if (difficulty[0].checked) {
         pairs =8; 
    } else if(difficulty[1].checked) {
        pairs =16;
    }else if(difficulty[2].checked){
        pairs = 24;
    }  
};


