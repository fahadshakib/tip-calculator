"use strict";

var btnCustom = document.querySelector(".form__tip--button-custom");
var btnReset = document.querySelector(".reset-btn");
var inputCustom = document.querySelector(".form__input--custom");
var tipOutput = document.querySelector(".output__value-tip");
var tipCustom = document.querySelector(".form__input--custom");
var totalOutput = document.querySelector(".output__value-total");
var billInput = document.querySelector(".form__input--bill");
var personInput = document.querySelector(".form__input--person");
var form = document.querySelector(".form");
var tip = document.querySelector(".tip");
var person = document.querySelector(".person");

// let tipValue;

var reset = function reset() {
  tipOutput.textContent = "$0.0", totalOutput.textContent = "$0.0";
  billInput.value = "", personInput.value = "", tipCustom.value = "", person.textContent = "0", tip.textContent = "0";
};
var showResult = function showResult() {
  var currentTip = parseInt(tip.textContent ? tip.textContent : "0");
  var currentBill = parseInt(billInput.value);
  var totalPerson = parseInt(person.textContent);
  var tipPerPerson, totalPerPerson, totalTip, totalBill;
  if (!totalPerson || !currentBill) return;
  totalTip = currentTip / 100 * currentBill;
  totalBill = currentBill + totalTip;
  tipPerPerson = (totalTip / totalPerson).toFixed(2);
  totalPerPerson = (totalBill / totalPerson).toFixed(2);
  totalPerPerson = totalPerPerson * totalPerson === totalBill ? totalPerPerson : Math.trunc(totalPerPerson) + 1;
  tipOutput.textContent = "$" + tipPerPerson;
  totalOutput.textContent = "$" + totalPerPerson;
};
form.addEventListener("click", function (e) {
  var target = e.target.closest(".form__tip--button");
  if (!target) return;
  tip.textContent = target.value;
  showResult();
});
btnReset.addEventListener("click", reset);
btnCustom.addEventListener("click", function (e) {
  showResult();
  inputCustom.classList.toggle("hidden");
});
inputCustom.addEventListener("keyup", function (e) {
  tip.textContent = e.target.value;
  showResult();
});
personInput.addEventListener("keyup", function (e) {
  if (person.textContent === "0" || !e.target.value) {
    tipOutput.textContent = " $0.0";
    totalOutput.textContent = " $0.0";
  }
  person.textContent = e.target.value ? e.target.value : "0";
  showResult();
});
billInput.addEventListener("keyup", function (e) {
  showResult();
});