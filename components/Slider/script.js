const sliderOutput = document.getElementById("slider-current-value");
const inputSlider = document.getElementById("input--slider");

sliderOutput.innerHTML = inputSlider.value;

inputSlider.oninput = function () {
  sliderOutput.innerHTML = this.value;
};
