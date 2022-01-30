const drawerSwitch = document.getElementById("drawer-switch");
const drawerModal = document.getElementById("drawer-modal");
const drawer = document.getElementById("drawer");

drawerSwitch.addEventListener("click", () => {
  console.log("clicked");
  drawerModal.classList.add("drawer__modal");
  drawer.classList.add("drawer--on");
  drawer.classList.remove("drawer--off");
});

drawerModal.addEventListener("click", () => {
  console.log("modal clicked");
  drawerModal.classList.remove("drawer__modal");
  drawer.classList.add("drawer--off");
  drawer.classList.remove("drawer--on");
});
