const regForm = document.querySelector('form#producer');
const errors_el = document.querySelector('form#producer .errors');

regForm.addEventListener('submit', validateRegisterForm);

function validateRegisterForm (e) {
    e.preventDefault();
    
    const productIDUpload = document.querySelector('#producer #productIDUpload');
    const productNameUp = document.querySelector('#producer #productNameUp');
    const producerIDUp = document.querySelector('#producer #producerIDUp');
    
    let errors = [];
 
    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const num_reg= /^([0-9])/;
    
    if (productIDUpload.value == "") {
        errors.push({text: "Order ID", el: productIDUpload});
    }
    
    if (productNameUp.value == "") {
        errors.push({text: "customer ID", el: productNameUp});
    }

    if (producerIDUp.value == "") {
        errors.push({text: "customer name", el: producerIDUp});
    }

 
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