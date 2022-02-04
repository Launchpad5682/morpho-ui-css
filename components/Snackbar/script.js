const baselineSwitch = document.getElementById("baseline-switch");
const baselineOnBtn = document.getElementById("baseline-on-btn");
const baselineOffBtn = document.getElementById("baseline-off-btn");
const baselineOffClose = document.getElementById("baseline-off-close");

const stackedSwitch = document.getElementById("stacked-switch");
const stackedOnBtn = document.getElementById("stacked-on-btn");
const stackedOffBtn = document.getElementById("stacked-off-btn");
const stackedOffClose = document.getElementById("stacked-off-close");

const leadingSwitch = document.getElementById("leading-switch");
const leadingOnBtn = document.getElementById("leading-on-btn");
const leadingOffBtn = document.getElementById("leading-off-btn");
const leadingOffClose = document.getElementById("leading-off-close");

const closeSnackbar = () => {
  baselineSwitch.classList.add("snackbar__off");
  stackedSwitch.classList.add("snackbar__off");
  leadingSwitch.classList.add("snackbar__off");
};

baselineOnBtn.addEventListener("click", () => {
  baselineSwitch.classList.remove("snackbar__off");
});

stackedOnBtn.addEventListener("click", () => {
  stackedSwitch.classList.remove("snackbar__off");
});

leadingOnBtn.addEventListener("click", () => {
  leadingSwitch.classList.remove("snackbar__off");
});

baselineOffBtn.addEventListener("click", closeSnackbar);
baselineOffClose.addEventListener("click", closeSnackbar);
stackedOffBtn.addEventListener("click", closeSnackbar);
stackedOffClose.addEventListener("click", closeSnackbar);
leadingOffBtn.addEventListener("click", closeSnackbar);
leadingOffClose.addEventListener("click", closeSnackbar);
