let a = "0"; //змінна
//документ ->пошук за Ід ->(ІД)-> задаємо текст (з змінної)
document.getElementById("result").textContent = a;

// список з назвами кнопок
const buttons = [
  "AC",
  "(",
  ")",
  "/",
  "1",
  "2",
  "3",
  "*",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "+",
  ".",
  "0",
  "ec",
  "=",
];
const list = [
  ,
  "(",
  ")",
  "/",
  "1",
  "2",
  "3",
  "*",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "+",
  ".",
  "0",
];
// витягування <дів> з ШТМЛ у ДЖс по ІД     (ІД)
const container = document.getElementById("Container");

// ЦИКЛИ
//анологія пайтон -> let i = 0 -> i
// i<buttont.lenght -> range(len(buttons))
// i+=4 range(0,len(bottons),4)
for (let i = 0; i < buttons.length; i += 4) {
  // створення рядку
  const row = document.createElement("div");
  row.className = "row_num";
  // створення кнопки         && - це йобане "and" з пайтона
  for (let f = i; f < i + 4 && buttons.length; f++) {
    const button = document.createElement("button");
    button.textContent = buttons[f];
    button.className = "Button_num";
    button.value = buttons[f];

    // логіка написання цифри
    button.addEventListener("click", function () {
      if (button.value === "=") {
        a = eval(a);
        document.getElementById("result").textContent = a;
      }
      if (button.value === "ec") {
        a = a.slice(0, -1);
        document.getElementById("result").textContent = a;
      }
      if (button.value === "AC") {
        a = "0";
        document.getElementById("result").textContent = a;
      }
      if (list.includes(button.value) && a === "0") {
        a = "";
        a += button.value;
        document.getElementById("result").textContent = a;
      } else if (list.includes(button.value)) {
        a += button.value;
        document.getElementById("result").textContent = a;
      }
    });
    // розміщення кнопки -> куди.команда("Об'єкт розміщення")
    row.appendChild(button);
  }
  // розміщення рядку -> куди.команда("Об'єкт розміщення")
  container.appendChild(row);
}
