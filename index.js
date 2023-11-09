"use strict";

function CalcSelect() {
  let select = document.querySelectorAll(".select");
  let selectItem = document.querySelectorAll(".select__list_link");

  select.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChosse);
  });

  function selectToggle() {
    this.classList.toggle("active");
    this.querySelector(".select__icon").classList.toggle("active");
    this.parentElement.classList.toggle("active");
    this.parentElement
      .querySelector(".class__label")
      .classList.toggle("active");
  }

  function switchingActivity(arr, element) {
    arr.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".select__check").classList.remove("active");
    });
    element.classList.add("active");
    element.querySelector(".select__check").classList.add("active");
  }

  function selectChosse() {
    let text = this.innerText;
    let currentText =
      this.parentElement.previousSibling.querySelector(".select__current");
    let originalCurrentText = this.parentElement.previousSibling.querySelector(
      ".select__originalOption"
    );

    switchingActivity(selectItem, this);

    currentText.innerText = text;
    originalCurrentText.setAttribute("value", text);
    this.parentElement.previousSibling.querySelector(".select__originalOption");
  }
}
CalcSelect();

function addingElements() {
  let lessonButton = document.querySelectorAll(".form__lessonTips_button");
  let lessons = document.querySelectorAll(".lessonTips_link-disappearing");
  let wrapper = document.querySelector(".form__lessonTips");

  lessonButton.forEach((item) => {
    item.addEventListener("click", addingTips);
  });

  function addingTips() {
    wrapper.classList.toggle("active");
    lessons.forEach((item) => {
      
      item.classList.toggle("active");
    });
  }
}
addingElements();

function clearingForm() {
  let input = document.querySelector(".input__lessonTopic");
  let button = document.querySelector(".input__cross");
  button.addEventListener("click", () => {
    input.value = "";
  });
}
clearingForm();

function addValueForm () {
  let input = document.querySelector(".input__lessonTopic");
  let value = document.querySelectorAll(".form__lessonTips_link");
  
  value.forEach((item) => {
    item.addEventListener("click", addValue)
  })

  function addValue () {
    let text = this.innerText;
    input.value = text;
  }

}
addValueForm();

function err() {
  let textArea = document.querySelector(".form__message_text");
  let currentValue = document.querySelector(".message__lenght");
  let messegeError = document.querySelector(".message__label");
  let messageErrorText = document.querySelector(".message__errorText");
  let limit = 200;

  let value = "";
  textArea.addEventListener("input", () => {
    value = textArea.value.length;
    currentValue.innerText = value;
    if (value > limit) {
      textArea.parentElement.classList.add("error");
      currentValue.classList.add("error");
      messegeError.classList.add("error");
      messageErrorText.classList.add("error");
    } else {
      textArea.parentElement.classList.remove("error");
      currentValue.classList.remove("error");
      messegeError.classList.remove("error");
      messageErrorText.classList.remove("error");
    }
  });
}
err();

function formeVrification() {
  let inputs = document.querySelectorAll(".input__text");
  let submit = document.querySelector(".form__buttonNext-input");
  inputs.forEach((item) => {
      item.addEventListener("input", validation);
  });
  inputs.forEach((item) => {
    item.addEventListener("blur", () => {
      item.parentElement.classList.remove("active");
     
    });
});

  function validation() {
    this.parentElement.classList.add("active");
    if (this.value.trim() == "" || this.value > 200 || this.parentElement.querySelector(".form__message_text").value.trim() == "" || this.parentElement.querySelector(".form__message_text").value > 200 ){
      this.querySelector(".form__message_text");
      submit.setAttribute("disabled", "disabled");
      submit.classList.remove("active");
      
    } else {
      
      submit.removeAttribute("disabled");
      submit.classList.add("active");
    }
  }
}
formeVrification();
