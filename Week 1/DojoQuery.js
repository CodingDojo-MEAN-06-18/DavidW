$(document).ready(function $Dojo(button_id) {
    this.myButton_id = document.getElementById(button_id)
    this.click = function (callback) {
        this.myButton_id.addEventListener("click", callback);
        console.log("The button was clicked!");
    }
    this.hover = function (hoverin, hoverout) {
        this.myButton_id.addEventListener("mouseover", hoverin);
        console.log("The button was hovered on!")
        this.myButton_id.addEventListener("mouseout", hoverout);
        console.log("The button was hovered on!")
    };
    return this
});