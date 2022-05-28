'use strict';
const inputDataResultDiv = document.querySelector('div#input-data-result');
const submitBtn = document.getElementById('submit-btn');


const validationRules = {
    'full-name': {
        regexp: /^[А-ЯЇІЄҐ][а-яєїіґ]* [А-ЯЇІЄҐ]\.[А-ЯЇІЄҐ]\.$/,
        alert: 'Введіть ПІБ в форматі "Бондаренко М.В."',
    },

    'card': {
        regexp: /^[A-ZА-ЯЇІЄҐ]{2} №[0-9]{5}$/,
        alert: 'Введіть номер айді-картки в форматі "ТТ №000000"',
    },

    'faculty': {
        regexp: /^[А-ЯЇІЄҐ]+$/,
        alert: 'Введіть назву факультету в форматі "ФІОТ"',
    },

    'birthday': {
        regexp: /^[0-3][0-9]{1}.[0-1][0-9]{1}.[0-9]{4}$/,
        alert: 'Введіть дату народження в форматі "28.09.2001"',
    },

    'address': {
        regexp: /^м\.\s[А-ЯЇІЄҐ][а-яєїіґ]+$/,
        alert: 'Місто повинне бути у форматі "м. Київ"',
    },
};

const addWarningAlert = elem => {
    const nextElemId = elem.nextSibling.id;
    if (nextElemId === `${elem.id}-warning`) {
        return;
    }
    const alertElem = document.createElement('div');
    alertElem.id = elem.id + '-warning';
    alertElem.textContent = validationRules[`${elem.id}`].alert;
    alertElem.classList.add('validation-warning');
    elem.after(alertElem);
};

const inputFields = document.querySelectorAll('form#form fieldset input');
for (const field of inputFields) {
    field.addEventListener('focusin', e => {
        e.target.classList.remove('field-warning');
        const warningAlertElem = document.getElementById(`${e.target.id}-warning`);
        if (warningAlertElem) {
            warningAlertElem.remove();
        }
        inputDataResultDiv.classList.add('hidden');
    });
}

const dataFieldsDescriptions = {
    'full-name': 'ПІБ',
    'card': 'ID-card',
    'faculty': 'Факультет',
    'birthday': 'Дата народж.',
    'address': 'Адреса'
};

const displayFormData = inputFieldsNodes => {
    for (const field of inputFieldsNodes) {
        const fieldId = field.id;
        const resultDiv = document.querySelector(`div#input-data-result > div#${fieldId}`);
        inputDataResultDiv.classList.remove('hidden');
        resultDiv.innerHTML = `<strong>${dataFieldsDescriptions[fieldId]}:</strong> ${field.value}`;
    }
};

submitBtn.addEventListener('click', () => {
    let isDataValid = true;
    const inputFields = document.querySelectorAll('form#form fieldset input');
    for (const field of inputFields) {
        const input = field.value;
        const { regexp } = validationRules[field.id];
        if (!regexp.test(input)) {
            isDataValid = false;
            field.classList.add('field-warning');
            addWarningAlert(field);
        }
    }
    if (!isDataValid) {
        inputDataResultDiv.classList.add('hidden');
        return;
    }
    displayFormData(inputFields);
});


const randomColor = () => {
    const random = () => Math.floor(Math.random() * 255);
  
    return {
      r: random(),
      g: random(),
      b: random(),
    };
  };

  
  const addTableEventHandlers = () => {
    const special = document.getElementById("special");
    const initialBckgColor = special.style.backgroundColor;
  
    const colorPicker = document.getElementById("color-picker");
  
    special.addEventListener("mouseover", (e) => {
      const color = randomColor();
      e.target.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    });

    special.addEventListener("click", (e) => {
        e.target.style.backgroundColor = colorPicker.value;
      });
  
    special.addEventListener("dblclick", (e) => {
      for (let cell of document.getElementsByClassName("changecolor")) {
        cell.style.backgroundColor = colorPicker.value;
      }
      e.target.style.backgroundColor = colorPicker.value;
    });
  };
  
  addTableEventHandlers();