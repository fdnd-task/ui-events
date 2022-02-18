
//ELEMENTS
//query elementen
var items = document.querySelectorAll("a");
console.log(items)
var touchy = 'ontouchstart' in window;
document.querySelector("section").insertAdjacentHTML("beforeend", "<a href='#'>ontouchstart: " + touchy + "</a>");


//EVENT LISTENERS
//add eventlisteners
items.forEach(element => {
    
    if(touchy){
        element.addEventListener("click",color_green);
        element.addEventListener("touchstart",longpress_start);
        element.addEventListener("touchend",longpress_clear);
    }else{
        element.addEventListener("mousedown",color_green);
        element.addEventListener("mousedown",longpress_start);
        element.addEventListener("mouseup",longpress_clear);
    }
    element.addEventListener("dblclick",color_purple);
});
//FUNCTIONS
function color_green(e){
    console.log("color_green", this)
    this.classList.toggle("green")
    // this.classList.remove("purple")
    e.preventDefault();
}
function color_purple(e){
    console.log("color_purple", this)
    this.classList.toggle("purple")
    // this.classList.remove("green")
    e.preventDefault();
}
function color_highlight(me){
    console.log("color_highlight", this)
    console.log("clearcolor", me)
    me.classList.toggle("highlight")
    me.classList.remove("purple")
    me.classList.remove("green")
}

//KEYDOWN
document.addEventListener("keydown",keydown)
function keydown(e){
    console.log("keydown: " + e.key)
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
function longpress_start(e){
    //console.log("longpress", this)
    this.timer = window.setTimeout(color_highlight,2000,this);
    e.preventDefault();
}

//clear time out 
function longpress_clear(){
    clearTimeout(this.timer);
}
