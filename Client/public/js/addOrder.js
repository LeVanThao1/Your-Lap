const regForm = document.querySelector('form#addOrder');
const errors_el = document.querySelector('form#addOrder .errors');

regForm.addEventListener('submit', validateRegisterForm);

function validateRegisterForm (e) {
    e.preventDefault();
    
    const orderIDor = document.querySelector('#addOrder #orderIDor');
    const cusIDor = document.querySelector('#addOrder #cusIDor');
    const cusNameor = document.querySelector('#addOrder #cusNameor');
    const cusPhoneNumberor = document.querySelector('#addOrder #cusPhoneNumberor');
    const cusEmailor = document.querySelector('#addOrder #cusEmailor');
    const cusAddor = document.querySelector('#addOrder #cusAddor');
    const dateUpdateOr = document.querySelector('#addOrder #dateUpdateOr');
    const statusOr = document.querySelector('#addOrder #statusOr')

    let errors = [];
 
    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const num_reg= /^([0-9])/;
    
    if (orderIDor.value == "") {
        errors.push({text: "Order ID", el: orderIDor});
    }
    
    if (cusIDor.value == "") {
        errors.push({text: "customer ID", el: cusIDor});
    }

    if (cusNameor.value == "") {
        errors.push({text: "customer name", el: cusNameor});
    }

    if (cusPhoneNumberor.value == "") {
        errors.push({text: "phone number", el: cusPhoneNumberor});
    }

    if (cusEmailor.value == "") {
        errors.push({text: "email", el: cusEmailor});
    }else if (!email_reg.test(cusEmailor.value)){
        errors.push({text: "email", el:cusEmailor});
    }

    if (cusAddor.value == "") {
        errors.push({text: "address", el: cusAddor});
    }

    if (dateUpdateOr.value == "") {
        errors.push({text: "date update", el: dateUpdateOr});
    }

    // if (statusOr.value == null) {
    //     errors.push({text: "date update", el: statusOr});
    // }
    
    if (errors.length > 0) {
        handle_errors(errors);
        return false;
    }
    
    alert('SUBMITTED');
        return true;
    }

    function handle_errors(errs) {
        let str = "You have not filled with the following fields: ";    
        errs.map((er) => {
        er.el.classList.add('error');
        str += er.text + ", ";
        });
    
        errs[0].el.focus();
        
        let error_el = document.createElement('div');
        error_el.classList.add('error');
        error_el.innerText = str;
        
        error_el.addEventListener('click', function () {
            errors_el.removeChild(error_el);
        });
        
        errors_el.appendChild(error_el);
    }