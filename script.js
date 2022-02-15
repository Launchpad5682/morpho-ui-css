const animate = (x, time) =>
  anime({
    targets: ".logo",
    translateX: x,
    duration: time,
    scale: 1.5,
    easing: "easeInOutSine",
  });

const mediaQueryOne = window.matchMedia("(max-width: 830x)");

const mediaQueryTwo = window.matchMedia("(max-width: 420px)");

if (mediaQueryOne.matches) {
  animate(1000, 5000);
} else if (mediaQueryTwo.matches) {
  animate(300, 2000);
} else {
  animate(1000, 7000);
}

const copyBtn = document.getElementsByClassName("copy--btn")[0];
const copySnippet = document.getElementsByClassName("clipboard")[0];

const copyToClipboard = async (text) => {
  console.log(text);
  if ("clipboard" in navigator)
    return await navigator.clipboard.writeText(text);
  else return document.execCommand("copy", true, text);
};

const copyClickHandler = () => {
  console.log("click copy");
  copyToClipboard(copySnippet.innerHTML)
    .then(() => {
      copyBtn.innerHTML = "COPIED";
      setTimeout(() => (copyBtn.innerHTML = "COPY"), 1500);
    })
    .catch((err) => console.log(err));
};

copyBtn.addEventListener("click", (event) => {
  event.preventDefault();
  copyClickHandler();
});
