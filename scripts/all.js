
//ELEMENTS
//query elementen
var items = document.querySelectorAll("a");
console.log(items)

//EVENT LISTENERS
//add eventlisteners
items.forEach(element => {
    element.addEventListener("mousedown",color_green);
    element.addEventListener("dblclick",color_purple);
    element.addEventListener("mousedown",longpress);
    element.addEventListener("mouseup",longpress_clear);
});
//FUNCTIONS
function color_purple(){
    this.classList.toggle("purple")
    this.classList.remove("green")
}
function color_green(){
    this.classList.toggle("green")
    this.classList.remove("purple")
}
function color_highlight(me){
    console.log("clearcolor", me)
    me.classList.toggle("highlight")
    me.classList.remove("purple")
    me.classList.remove("green")
}

//KEYDOWN
document.addEventListener("keydown",keydown)
function keydown(e){
    console.log(e.key)
    //als de keydown een 'x' is
    //alle classes weghalen en functie stoppen
    if(e.key == "x"){
        items.forEach(element => {
            element.classList.remove("purple")
            element.classList.remove("green")
            element.classList.remove("highlight")
        })
        return;
    }
    //check welke letter overeenkomt met de eerste letter van een element
    //de elementen krijgen een highlight
    items.forEach(element => {     
        // console.log(element)
        // console.log(element.textContent)
        // console.log(element.textContent.charAt(0).toLowerCase())
        if(element.textContent.charAt(0).toLowerCase() == e.key) {
            console.log(element)
            element.classList.toggle("highlight")
        } 
    });
}

//LONGPRESS 
//set timers
//na 2 sec krijgt het element een highlight
function longpress(){
    // console.log("longpress", this)
    this.timer = window.setTimeout(color_highlight,2000,this);
}
//clear time out 
function longpress_clear(){
    clearTimeout(this.timer);
}
