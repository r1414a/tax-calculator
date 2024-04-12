//tooltip initialization
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);



const BASE_INCOME = 800000;
const form = document.getElementById("taxForm");
const errorIcon = document.getElementById("error-icon");
const finalIncome = document.getElementById('result');




form.addEventListener("submit", (e) => {
  e.preventDefault();

  //formData is object
  const formData = new FormData(e.target);

  const allFieldValues = [...formData.entries()];
  let validationsDone = doValidations(allFieldValues);

  //converting string to Number, and converting -ve to +ve.
  const grossAnnualIncome = Math.abs(Number(formData.get("annual-income")));
  const extraIncome = Math.abs(Number(formData.get("extra-income")));
  const ageGroup = formData.get("age-group");
  const deductions = Math.abs(Number(formData.get("deductions")));

  if (validationsDone) {
    const incomeAfterDeductions = taxCalculation(
      grossAnnualIncome,
      extraIncome,
      ageGroup,
      deductions
    );
    showResult(incomeAfterDeductions);
  }
});


/*
[
    ['annual-income', '400000']
    ['extra-income', '20000'] 
    ['age-group', 'Select age group']
    ['deductions', '2000']

]
*/


function doValidations(allFieldValues) {
  const isThereError = document.querySelectorAll(".input-group i");

  allFieldValues.map(([key, value]) => {
    const inputField = document.querySelector(`input[name=${key}]`);
    const selectField = document.querySelector(`select[name=${key}]`);

    if (key === "age-group") {
      //console.log('select')
      if (value === "Select age group") {
        selectField.nextSibling.classList.remove("error-icon");
        selectField.nextSibling.setAttribute(
          "data-bs-original-title",
          "This field can't be empty, select one value from dropdown."
        );
      } else {
        selectField.nextSibling.classList.add("error-icon");
      }
    } else {
      //console.log('input')
      if (value === "") {
        //console.log('null')
        inputField.nextSibling.classList.remove("error-icon");
        inputField.nextSibling.setAttribute(
          "data-bs-original-title",
          "This field can't be empty, if no value put 0."
        );
      } else if (isNaN(value)) {
        //console.log('nonull')
        inputField.nextSibling.classList.remove("error-icon");
        inputField.nextSibling.setAttribute(
          "data-bs-original-title",
          "Please enter numbers only"
        );
      } else {
        inputField.nextSibling.classList.add("error-icon");
      }
    }
  });

  //checking if all fields are error free, if no error returing true and calling showresult function.
  if (
    isThereError[0].classList.contains("error-icon") === true &&
    isThereError[1].classList.contains("error-icon") === true &&
    isThereError[2].classList.contains("error-icon") === true &&
    isThereError[3].classList.contains("error-icon") === true
  ) {
    return true;
  }
}

function taxCalculation(grossAnnualIncome, extraIncome, ageGroup, deductions) {
  let taxedAmount,finalAmount;
  let overallIncome = grossAnnualIncome + extraIncome - deductions;
  
  if (overallIncome <= BASE_INCOME) {
    finalAmount = overallIncome;
  } else {
    switch (ageGroup) {
      case "age < 40":
        taxedAmount = 0.3 * (overallIncome - BASE_INCOME);
        finalAmount = overallIncome - taxedAmount;
        break;
      case "age >= 40 but < 60":
        taxedAmount = 0.4 * (overallIncome - BASE_INCOME);
        finalAmount = overallIncome - taxedAmount;
        break;
      case "age >= 60":
        taxedAmount = 0.1 * (overallIncome - BASE_INCOME);
        finalAmount = overallIncome - taxedAmount;
        break;
      //default: 
    }
  }
  return finalAmount;
}

function showResult(incomeAfterDeductions) {
  form.reset();
  $('#myModal').modal('show');

  //changing number format to indian to show comma in final amount.
  const formatter = new Intl.NumberFormat('en-IN');
  let formattedNumber = formatter.format(incomeAfterDeductions);
  finalIncome.textContent = '₹' + formattedNumber;
}


