let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let specialCharac = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "?"];
let collectCharac = new Array();
let password = "";

/* alert open function */

const alertOpen = (type, message) => {
  const alertMsg = document.getElementById("alertMsg");
  const html = `<div class="alert alert-${type}" role="alert">
  ${message}
</div>`;
  alertMsg.innerHTML = html;
  setTimeout(() => {
    document.getElementById("alertMsg").innerHTML = "";
  }, 2500);
};

/* random password function */

const randomPassword = () => {
  let input = document.getElementById("userInput").value.trim();
  let userInput = Number(input);
  if (input === "") {
    alertOpen("danger", "Please input a number");
  } else if (isNaN(userInput)) {
    alertOpen("danger", "Please input a numeric value");
    document.getElementById("userInput").value = "";
  } else if (userInput < 8) {
    alertOpen(
      "danger",
      "Please create a password with a minimum of eight characters"
    );
    document.getElementById("userInput").value = "";
  } else {
    let confirmUcase = confirm(
      "Would you like to include uppercase letters in the password?"
    );
    let confirmLcase = confirm(
      "Would you like to include lowercase letters in the password?"
    );
    let confirmNumcase = confirm(
      "Would you like to include numbers in the password?"
    );
    let confirmScase = confirm(
      "Would you like to include special characters in the password?"
    );
    if (confirmUcase) {
      collectCharac = collectCharac.concat(upperCase);
    }
    if (confirmLcase) {
      collectCharac = collectCharac.concat(lowerCase);
    }
    if (confirmNumcase) {
      collectCharac = collectCharac.concat(num);
    }
    if (confirmScase) {
      collectCharac = collectCharac.concat(specialCharac);
    }
    if (
      confirmUcase === false ||
      confirmLcase === false ||
      confirmNumcase === false ||
      confirmScase === false
    ) {
      alertOpen(
        "danger",
        "Please include at least one uppercase letter, one lowercase letter, one number, and one special character in the password"
      );
      document.getElementById("userInput").value = "";
    } else {
      if (
        confirmUcase === true ||
        confirmLcase === true ||
        confirmNumcase === true ||
        confirmScase === true
      ) {
        let strCharac = collectCharac.join("");
        for (let i = 0; i < userInput; i++) {
          password += strCharac.charAt(
            Math.floor(Math.random() * strCharac.length)
          );
        }
        document.getElementById("password").value = password;
        document.getElementById("userInput").value = "";
      }
    }
  }
};
