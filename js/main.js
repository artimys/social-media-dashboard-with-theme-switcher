const checkbox = document.getElementById("checkbox");
const body = document.getElementsByTagName("body")[0];
const notification = document.getElementById("notification");

const themes = {
    dark: "dark-magic",
    light: "light-magic"
}
const savedTheme = localStorage.getItem("theme");
function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}


// Click event for checkbox
// Change theme when checkbox is checked
checkbox.addEventListener("click", function(e) {
    if (this.checked) {
        body.classList.add(themes.light);
        saveTheme(themes.light);
    } else {
        body.classList.remove(themes.light);
        saveTheme(themes.dark);
    }

    // Display notification that theme was saved
    notification.classList.add("notification--animate");
});



// End animation event to remove class that animates
notification.addEventListener("animationend", function() {
    notification.classList.remove("notification--animate");
});



// Use localStorage to get user theme selection
if (savedTheme !==null && savedTheme === themes.light) {
    // Check the box
    checkbox.checked = true;
    // Add the white theme class
    body.classList.add(themes.light);
}
// otherwise default to dark theme