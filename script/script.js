// console.log("script")

//query alle elementen
var items = document.querySelectorAll("a");
console.log(items)

//CLICK & DBLCLICK eventlisteners
items.forEach(element => {
    element.addEventListener("click",color_purple);
    element.addEventListener("dblclick",color_green);
});
//functions
function color_purple(){
    // console.log("color_change", this)
    this.classList.add("purple")
}
function color_green(){
    // console.log("color_highlight", this)
    this.classList.add("green")
}

//KEYDOWN
document.addEventListener("keydown",keydown)
function keydown(e){
    console.log(e.key)
    // if(e.key == "d"){
    //     console.log("we hebben een "+e.key)
    //     document.querySelectorAll(".d").forEach(element => {
    //         element.classList.toggle("highlight")
    //     });
    // }
    if(e.key =="x"){
        document.querySelectorAll("a").forEach(element => {
            element.classList.remove("purple")
            element.classList.remove("green")
            element.classList.remove("highlight")

        })

    }
}