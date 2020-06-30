$(document).ready(function () {
})
const token = localStorage.getItem('token')
async function handlePayment() {
    $('.payment').click(() => {
        const name = $('#name').val();
        const phone = $('#phone').val();
        const city = $('#provinces').selectedOptions[0].dataset.name;
        const district = $('#district').selectedOptions[0].dataset.name;
        const warn = $('#warn').val();
        const street = $('#street').val();
        if(!name || !phone || !city || !district || !warn || !street) {
            alert('field nhap chua du');
            return;
        }
        axios.post('http://localhost:3001/api/v1/order', {
            recipientName: name,
            recipientPhone: phone,
            recipientAddress: `${city}, ${district}, ${warn}, ${street}`
        }).then((data) => {
            
        })
    })
}