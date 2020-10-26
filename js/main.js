const checkbox = document.getElementById("checkbox");
const body = document.getElementsByTagName("body")[0];


// Change theme when checkbox is checked
function changeTheme(element) {
    let = whiteThemeClassName = "white-magic";

    if (element.checked) {
        body.classList.add(whiteThemeClassName);
    } else {
        body.classList.remove(whiteThemeClassName);
    }
}

// Click event for checkbox
checkbox.addEventListener("click", function(e) {
    changeTheme(this);
});


// Change team on page load
changeTheme(checkbox);