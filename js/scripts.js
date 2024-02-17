const btnCustom = document.querySelector(".form__tip--button-custom");
const btnReset = document.querySelector(".reset-btn");
const inputCustom = document.querySelector(".form__input--custom");
const tipOutput = document.querySelector(".output__value-tip");
const tipCustom = document.querySelector(".form__input--custom");
const totalOutput = document.querySelector(".output__value-total");
const billInput = document.querySelector(".form__input--bill");
const personInput = document.querySelector(".form__input--person");
const form = document.querySelector(".form");
const tip = document.querySelector(".tip");
const person = document.querySelector(".person");

// let tipValue;

const reset = () => {
  (tipOutput.textContent = "$0.0"), (totalOutput.textContent = "$0.0");
  (billInput.value = ""),
    (personInput.value = ""),
    (tipCustom.value = ""),
    (person.textContent = "0"),
    (tip.textContent = "0");
};

const showResult = () => {
  const currentTip = parseInt(tip.textContent ? tip.textContent : "0");
  const currentBill = parseInt(billInput.value);
  const totalPerson = parseInt(person.textContent);
  let tipPerPerson, totalPerPerson, totalTip, totalBill;

  if (!totalPerson || !currentBill) return;
  totalTip = (currentTip / 100) * currentBill;
  totalBill = currentBill + totalTip;
  tipPerPerson = (totalTip / totalPerson).toFixed(2);
  totalPerPerson = (totalBill / totalPerson).toFixed(2);
  totalPerPerson =
    totalPerPerson * totalPerson === totalBill
      ? totalPerPerson
      : Math.trunc(totalPerPerson) + 1;
  tipOutput.textContent = "$" + tipPerPerson;
  totalOutput.textContent = "$" + totalPerPerson;
};

form.addEventListener("click", (e) => {
  const target = e.target.closest(".form__tip--button");
  if (!target) return;
  tip.textContent = target.value;
  showResult();
});
btnReset.addEventListener("click", reset);
btnCustom.addEventListener("click", (e) => {
  showResult();
  inputCustom.classList.toggle("hidden");
});

inputCustom.addEventListener("keyup", (e) => {
  tip.textContent = e.target.value;
  showResult();
});
personInput.addEventListener("keyup", (e) => {
  if (person.textContent === "0" || !e.target.value) {
    tipOutput.textContent = " $0.0";
    totalOutput.textContent = " $0.0";
  }
  person.textContent = e.target.value ? e.target.value : "0";
  showResult();
});
billInput.addEventListener("keyup", (e) => {
  showResult();
});
