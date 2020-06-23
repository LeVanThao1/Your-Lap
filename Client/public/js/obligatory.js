const regForm = document.querySelector('form#register');
const errors_el = document.querySelector('form#register .errors');

regForm.addEventListener('submit', validateRegisterForm);

function validateRegisterForm (e) {
    e.preventDefault();
    
    const productIDUpload = document.querySelector('#register #productIDUpload');
    const productNameUp = document.querySelector('#register #productNameUp');
    const producerIDUp = document.querySelector('#register #producerIDUp');
    const typeProductIDUp = document.querySelector('#register #typeProductIDUp');
    const entryPriceUp = document.querySelector('#register #entryPriceUp');
    const sellPriceUp = document.querySelector('#register #sellPriceUp');
    const amountUp = document.querySelector('#register #amountUp');
    //const dateUpdateUp = document.querySelector('#register #dateUpdateUp');
    //const descriptionUp = document.querySelector('#register #descriptionUp');
    
    let errors = [];
 
    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const num_reg= /^([0-9])/;
    
    if (productIDUpload.value == "") {
        errors.push({text: "Product ID", el: productIDUpload});
    }
    
    if (productNameUp.value == "") {
        errors.push({text: "product name", el: productNameUp});
    }

    if (producerIDUp.value == "") {
        errors.push({text: "producer ID", el: producerIDUp});
    }

    if (typeProductIDUp.value == "") {
        errors.push({text: "product type ID", el: typeProductIDUp});
    }

    if (entryPriceUp.value == "") {
        errors.push({text: "entry price", el: entryPriceUp});
    }else if (!num_reg.test(entryPriceUp.value)){
        errors.push({text: "entry price", el:entryPriceUp});
    }

    if (sellPriceUp.value == "") {
        errors.push({text: "sell price", el: sellPriceUp});
    }else if (!num_reg.test(sellPriceUp.value)){
        errors.push({text: "sell price", el:sellPriceUp});
    }

    if (amountUp.value == "") {
        errors.push({text: "amount", el: amountUp});
    }else if (!num_reg.test(amountUp.value)){
        errors.push({text: "amount", el:amountUp});
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