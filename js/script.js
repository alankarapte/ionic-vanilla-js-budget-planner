let inputExpenseReason = document.querySelector("#input-expense-reason");
let inputExpenseAmount = document.querySelector("#input-expense-amount");
let bttnExpenseClear = document.querySelector("#bttn-expense-clear");
let bttnExpenseAdd = document.querySelector("#bttn-expense-add");

let lblExpenseReason = document.querySelector("#lbl-expense-reason");
let lblExpenseAmount = document.querySelector("#lbl-expense-amount");

let listExpenses = document.querySelector("#list-expenses");

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