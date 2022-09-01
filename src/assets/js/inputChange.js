function inputChange() {
  const input = document.querySelectorAll('input[type="range"]')[0];

  function handleInputChange(e) {
    let target = e.target;
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  }

  input.addEventListener("input", handleInputChange);
}
