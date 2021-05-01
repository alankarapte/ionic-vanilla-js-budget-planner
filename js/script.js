let itemExpenseReason = document.querySelector("#item-expense-reason");
let itemExpenseAmount = document.querySelector("#item-expense-amount");

let inputExpenseReason = document.querySelector("#item-expense-reason ion-input");
let inputExpenseAmount = document.querySelector("#item-expense-amount ion-input");

let lblExpenseReason = document.querySelector("#item-expense-reason ion-label");
let lblExpenseAmount = document.querySelector("#item-expense-amount ion-label");

let bttnExpenseClear = document.querySelector("#bttn-expense-clear");
let bttnExpenseAdd = document.querySelector("#bttn-expense-add");

let listExpenses = document.querySelector("#list-expenses");

bttnExpenseAdd.addEventListener("click", () => {
    console.log("add clicked");
    const reason = inputExpenseReason.value;
    const amount = inputExpenseAmount.value;

    lblExpenseReason.removeAttribute("color", "danger");
    lblExpenseAmount.removeAttribute("color", "danger");

    let isValid = true;

    isValid = validateReason();
    isValid = validateAmount();

    if (isValid) {

        let ionItemEl = document.createElement("ion-item");
        let ionItemTemplate = `
        <ion-item>
            <ion-label>${reason}</ion-label>
            <ion-label slot="end" class="ion-text-right">
                ${amount}
                <ion-icon name="wallet-outline" size="small"></ion-icon>
            </ion-label>
        </ion-item>
        `;
        listExpenses.insertBefore(convertHTMLStringToElement(ionItemTemplate), listExpenses.firstChild);

        clearExpenseCard();

        console.log("reason: " + reason + ", amount: " + amount);
    } else {
        presentAlert("Oops!", "invalid input!", "pls fill valid reason & amount.")
    }
});

bttnExpenseClear.addEventListener("click", clearExpenseCard);

inputExpenseReason.addEventListener("keyup", () => {
    validateReason();
});

inputExpenseAmount.addEventListener("keyup", () => {
    validateAmount();
});

function validateReason() {
    if (inputExpenseReason.value.trim().length <= 0) {
        console.warn("invalid reason");
        lblExpenseReason.setAttribute("color", "danger");
        itemExpenseReason.classList.add("ion-invalid");
        return false;
    } else {
        console.warn("valid reason");
        lblExpenseReason.removeAttribute("color", "danger");
        itemExpenseReason.classList.remove("ion-invalid");
        itemExpenseReason.classList.add("ion-valid");
        return true;
    }
}

function validateAmount() {
    if (inputExpenseAmount.value.trim().length <= 0 || inputExpenseAmount.value <= 0) {
        console.warn("invalid amount");
        lblExpenseAmount.setAttribute("color", "danger");
        itemExpenseAmount.classList.add("ion-invalid");
        return false;
    } else {
        lblExpenseAmount.removeAttribute("color", "danger");
        itemExpenseAmount.classList.remove("ion-invalid");
        itemExpenseAmount.classList.add("ion-valid");

        return true;
    }
}


function convertHTMLStringToElement(htmlString) {
    //converting HTML element string to HTML element object
    let divEl = document.createElement("div");
    divEl.innerHTML = htmlString;
    return divEl.firstElementChild;
}

function clearExpenseCard() {
    console.log("clearing expense card");

    lblExpenseReason.removeAttribute("color", "danger");
    lblExpenseAmount.removeAttribute("color", "danger");

    inputExpenseReason.value = "";
    inputExpenseAmount.value = "";
}

async function presentAlert(header, subtitle, msg) {
    const alert = document.createElement('ion-alert');
    // alert.cssClass = 'my-custom-class';
    alert.header = header;
    alert.subHeader = subtitle;
    alert.message = msg;
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
}