// const regForm = document.querySelector('form#register');
// const errors_el = document.querySelector('form#register .errors');
// let token = localStorage.getItem('token');
// regForm.addEventListener('submit', validateRegisterForm);
// // const images = document.querySelector('.custom-file-input');
// // images.addEventListener('change', handleFiles)
// // let fileList;

// // function handleFiles() {
// //     console.log(this.files)
// //     fileList = this.files; /* now you can work with the file list */
// //   }
// async function validateRegisterForm (e) {
//     e.preventDefault();
    
//     const productIDUpload = document.querySelector('#register #productIDUpload');
//     const productNameUp = document.querySelector('#register #inputNamePr');
//     const producerIDUp = document.querySelector('select[name="NSX"]');
//     const typeProductIDUp = document.querySelector('select[name="typeProductID"]');
//     const entryPriceUp = document.querySelector('#register #inputBuyPrice');
//     const sellPriceUp = document.querySelector('#register #inputSellPrice');
//     const amountUp = document.querySelector('#register #inputAmount');
//     //const dateUpdateUp = document.querySelector('#register #dateUpdateUp');
//     //const descriptionUp = document.querySelector('#register #descriptionUp');
    
//     let errors = [];
 
//     const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//     const num_reg= /^([0-9])/;
    
//     // if (productIDUpload.value == "") {
//     //     errors.push({text: "Product ID", el: productIDUpload});
//     // }
    
//     // if (productNameUp.value == "") {
//     //     errors.push({text: "product name", el: productNameUp});
//     // }

//     // if (producerIDUp.value == "0") {
//     //     errors.push({text: "producer ID", el: producerIDUp});
//     // }

//     // if (typeProductIDUp.value == "0") {
//     //     errors.push({text: "product type ID", el: typeProductIDUp});
//     // }

//     // if (entryPriceUp.value == "") {
//     //     errors.push({text: "entry price", el: entryPriceUp});
//     // }else if (!num_reg.test(entryPriceUp.value)){
//     //     errors.push({text: "entry price", el:entryPriceUp});
//     // }

//     // if (sellPriceUp.value == "") {
//     //     errors.push({text: "sell price", el: sellPriceUp});
//     // }else if (!num_reg.test(sellPriceUp.value)){
//     //     errors.push({text: "sell price", el:sellPriceUp});
//     // }

//     // if (amountUp.value == "") {
//     //     errors.push({text: "amount", el: amountUp});
//     // }else if (!num_reg.test(amountUp.value)){
//     //     errors.push({text: "amount", el:amountUp});
//     // }
    
//     // if (errors.length > 0) {
//     //     handle_errors(errors);
//     //     return false;
//     // }
//     const name = document.querySelector('#inputNamePr').value;
//     const nsx = document.querySelector('select[name="NSX"]').value;
//     const pt = document.querySelector('select[name="typeProduct"]').value;
//     const entryPrice = document.querySelector('input[name="entryPrice"]').value;
//     const price = document.querySelector('input[name="price"]').value;
//     const amount = document.querySelector('input[name="amount"]').value;
//     const description = document.querySelector('textarea[name="descriptionDetailPro"]').value;
//     const image = document.querySelector('.custom-file-input').files;
//     // console.log(images)
//     const images = [
//         {
//           fieldname: 'images',
//           originalname: image.name,
//           encoding: '7bit',
//           mimetype: image.type,
//           destination: './uploads',
//           filename: '1593196095961-Dell.png',
//           path: 'uploads/1593196095961-Dell.png',
//           size: 39247
//         }
//       ]
//     const result = await axios.post(`http://localhost:3001/api/v1/products?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWVkYjZlYzAyZmE4ODIxYTI4OGJmN2QiLCJpYXQiOjE1OTMyNzMzMDYsImV4cCI6MTU5MzI3NjkwNn0.BqLSAwFIbXNiS2V9LEpl_8nRXHKJQmZXplzfoSHaFbPh9BYNbed2tKfe80lAUjYLGl1YYUJ6IKLIS4MNzzQrQ015iwAtKsuLVsqMRku4R6uX6JenM9hpLcjF-tTRs0jF4q8V-NvKtoRz3HyMRZW7cNg0CpN7khpLbt6Y--HVF8A`, {
//         name,
//         description,
//         images,
//         entryPrice,
//         price,
//         NSX: nsx,
//         amount,
//         typeProduct: pt,
//     },{ files: images});
//     console.log(result)
//     if(result.status === 201) {
//         alert('them thanh cong');
//     }
//     else {
//         alert('them that bai');
//     }
// }    
//     function handle_errors(errs) {
//         let str = "You have not filled with the following fields: ";    
//         errs.map((er) => {
//         er.el.classList.add('error');
//         str += er.text + ", ";
//         });
    
//         errs[0].el.focus();
        
//         let error_el = document.createElement('div');
//         error_el.classList.add('error');
//         error_el.innerText = str;
        
//         error_el.addEventListener('click', function () {
//             errors_el.removeChild(error_el);
//         });
        
//         errors_el.appendChild(error_el);
//     }