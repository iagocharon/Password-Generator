import { Component, OnInit } from "@angular/core";

declare let inputChange: any;
declare let passwordStrength: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Password-Generator";
  password: string = "";
  length: number = 10;
  lowercase: boolean = false;
  uppercase: boolean = false;
  numbers: boolean = false;
  symbols: boolean = false;
  strength: number = 0;
  strengthDescription: string = "";

  ngOnInit() {
    new inputChange();
    new passwordStrength();
  }

  onChange(event: any): void {
    this.length = event.target.value;
  }

  generatePassword() {
    if (this.strength === 0) {
      alert("Debes seleccionar al menos una opción");
    } else {
      const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
      const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_-,.";

      let availableCharacters = "";

      if (this.lowercase) {
        availableCharacters += lowerCaseLetters;
      }

      if (this.uppercase) {
        availableCharacters += upperCaseLetters;
      }

      if (this.numbers) {
        availableCharacters += numbers;
      }

      if (this.symbols) {
        availableCharacters += symbols;
      }

      availableCharacters.split("");
      const generatedPassword = [];

      for (let i = 0; i < this.length; i += 1) {
        const max = availableCharacters.length;
        const ran = Math.random();
        const idx = Math.floor(ran * (max + 1));

        generatedPassword.push(availableCharacters[idx]);
      }

      this.password = generatedPassword.join("");
    }
  }

  checkLowercase(event: any): void {
    this.lowercase = event.target.checked;
    this.checkStrength();
  }

  checkUppercase(event: any): void {
    this.uppercase = event.target.checked;
    this.checkStrength();
  }

  checkNumbers(event: any): void {
    this.numbers = event.target.checked;
    this.checkStrength();
  }

  checkSymbols(event: any): void {
    this.symbols = event.target.checked;
    this.checkStrength();
  }

  checkStrength() {
    let strength = 0;
    if (this.lowercase) {
      strength += 1;
    }
    if (this.uppercase) {
      strength += 1;
    }
    if (this.numbers) {
      strength += 1;
    }
    if (this.symbols) {
      strength += 1;
    }
    this.strength = strength;
    if (strength === 0) {
      this.strengthDescription = "";
    }
    if (this.strength === 1) {
      this.strengthDescription = "Débil";
    }
    if (this.strength === 2) {
      this.strengthDescription = "Media";
    }
    if (this.strength === 3) {
      this.strengthDescription = "Fuerte";
    }
    if (this.strength === 4) {
      this.strengthDescription = "Muy Fuerte";
    }
  }

  copy() {
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = this.password;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }
}
