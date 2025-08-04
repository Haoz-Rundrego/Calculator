let a = 1000; //змінна
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

// витягування <дів> з ШТМЛ у ДЖс по ІД     (ІД)
const container = document.getElementById("Container");

// ЦИКЛИ
//анологія пайтон -> let i = 0 -> i
// i<buttont.lenght -> range(len(bottons))
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
    // розміщення кнопки -> куди.команда("Об'єкт розміщення")
    row.appendChild(button);
  }
  // розміщення рядку -> куди.команда("Об'єкт розміщення")
  container.appendChild(row);
}
