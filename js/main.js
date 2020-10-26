const checkbox = document.getElementById("checkbox");
const body = document.getElementsByTagName("body")[0];


// Change theme when checkbox is checked
function changeTheme(element) {
    let = darkThemeClassName = "dark-magic";

    if (element.checked) {
        body.classList.add(darkThemeClassName);
    } else {
        body.classList.remove(darkThemeClassName);
    }
}

// Click event for checkbox
checkbox.addEventListener("click", function(e) {
    changeTheme(this);
});


// Change team on page load
changeTheme(checkbox);