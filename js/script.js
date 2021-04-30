let inputExpenseReason = document.querySelector("#input-expense-reason");
let inputExpenseAmount = document.querySelector("#input-expense-amount");
let bttnExpenseClear = document.querySelector("#bttn-expense-clear");
let bttnExpenseAdd = document.querySelector("#bttn-expense-add");

bttnExpenseClear.addEventListener("click", () => {
    console.log("clear clicked");
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
        isValid = false;
    }

    if (amount.trim().length <= 0 || amount <= 0) {
        console.warn("invalid amount");
        isValid = false;
    }

    if (isValid) {
        console.log("reason: " + reason + ", amount: " + amount);
    }
});