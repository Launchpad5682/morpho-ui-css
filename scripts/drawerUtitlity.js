// drawer implementation
const drawer = document.getElementById("sidebar");
const drawerSwitch = document.getElementById("drawer-switch");
const mediaQuery = window.matchMedia("(max-width: 800px)");

if (mediaQuery.matches) {
  drawer.classList.add("drawer-off");
}

drawerSwitch.addEventListener("click", (event) => {
  event.preventDefault();
  if (drawer.classList.contains("drawer-on")) {
    drawer.classList.remove("drawer-on");
  } else {
    drawer.classList.add("drawer-on");
  }
});
