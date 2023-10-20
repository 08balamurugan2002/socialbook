/* popover */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

/* contact tooltip */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    template: '<div class="custom-tooltip tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner">2mutual friends</div></div>'
  })
})

/* drak theme */
//function to toggle dark theme
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

//listen for switch changes
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("change", toggleDarkMode);

//check local storage for user preference
if (localStorage.getItem("theme") === 'dark') {
  toggleDarkMode();
  themeSwitch.checked = true;
} else {
  themeSwitch.checked = false;
}

//store user preference in local storage
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
