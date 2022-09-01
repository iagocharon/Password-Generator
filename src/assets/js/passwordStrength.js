function passwordStrength() {
  const bars = document.querySelectorAll(".bar");
  const checks = document.querySelectorAll(".check input");

  console.log(bars);

  let strength = 0;

  for (let i = 0; i < checks.length; i++) {
    checks[i].addEventListener("change", () => {
      console.log("CHANGE");
      strength = 0;
      for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
          strength++;
        }
      }
      if (strength === 0) {
        for (let i = 0; i < checks.length; i++) {
          bars[i].style.backgroundColor = "transparent";
          bars[i].style.border = "1px solid white";
        }
      }
      if (strength === 1) {
        console.log("Cambiando una");
        for (let i = 0; i < checks.length; i++) {
          if (i < strength) {
            bars[i].style.backgroundColor = "#ff4137";
            bars[i].style.border = "1px solid #ff4137";
          } else {
            bars[i].style.backgroundColor = "transparent";
            bars[i].style.border = "1px solid white";
          }
        }
      }
      if (strength === 2) {
        for (let i = 0; i < checks.length; i++) {
          if (i < strength) {
            bars[i].style.backgroundColor = "#ff781f";
            bars[i].style.border = "1px solid #ff781f";
          } else {
            bars[i].style.backgroundColor = "transparent";
            bars[i].style.border = "1px solid white";
          }
        }
      }
      if (strength === 3) {
        for (let i = 0; i < checks.length; i++) {
          if (i < strength) {
            bars[i].style.backgroundColor = "#fdfa72";
            bars[i].style.border = "1px solid #fdfa72";
          } else {
            bars[i].style.backgroundColor = "transparent";
            bars[i].style.border = "1px solid white";
          }
        }
      }
      if (strength === 4) {
        for (let i = 0; i < checks.length; i++) {
          if (i < strength) {
            bars[i].style.backgroundColor = "#5bb963";
            bars[i].style.border = "1px solid #5bb963";
          } else {
            bars[i].style.backgroundColor = "transparent";
            bars[i].style.border = "1px solid white";
          }
        }
      }
    });
  }
}
