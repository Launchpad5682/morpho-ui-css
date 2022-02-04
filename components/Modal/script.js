const closeIcon = document.getElementById("close-icon");
const modalScreen = document.getElementById("modal-screen");
const fullscreenModal = document.getElementById("fullscreen-modal");
const modalOnButton = document.getElementById("modal-on-button");

const closeModal = () => {
  fullscreenModal.classList.add("fullscreen--off");
  fullscreenModal.classList.remove("fullscreen");
};

modalOnButton.addEventListener("click", () => {
  fullscreenModal.classList.add("fullscreen");
  fullscreenModal.classList.remove("fullscreen--off");
});

modalScreen.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);
