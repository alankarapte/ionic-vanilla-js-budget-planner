let inputExpenseReason = document.querySelector("#input-expense-reason");
let inputExpenseAmount = document.querySelector("#input-expense-amount");
let bttnExpenseClear = document.querySelector("#bttn-expense-clear");
let bttnExpenseAdd = document.querySelector("#bttn-expense-add");

let lblExpenseReason = document.querySelector("#lbl-expense-reason");
let lblExpenseAmount = document.querySelector("#lbl-expense-amount");

bttnExpenseClear.addEventListener("click", () => {
    console.log("clear clicked");

    lblExpenseReason.removeAttribute("color", "danger");
    lblExpenseAmount.removeAttribute("color", "danger");

    inputExpenseReason.value = "";
    inputExpenseAmount.value = "";
});

bttnExpenseAdd.addEventListener("click", () => {
    console.log("add clicked");
    const reason = inputExpenseReason.value;
    const amount = inputExpenseAmount.value;

    let isValid = true;

    if (reason.trim().length <= 0) {
        console.warn("invalid reason");
        lblExpenseReason.setAttribute("color", "danger");
        isValid = false;
    }

    if (amount.trim().length <= 0 || amount <= 0) {
        console.warn("invalid amount");
        lblExpenseAmount.setAttribute("color", "danger");
        isValid = false;
    }

    if (isValid) {
        lblExpenseReason.removeAttribute("color", "danger");
        lblExpenseAmount.removeAttribute("color", "danger");

        console.log("reason: " + reason + ", amount: " + amount);
    }
});