$(document).ready(function () {
    loadOrderUser();
})

async function loadOrderUser() {
    const userId = localStorage.getItem('userId');
    const data = await axios.get(`http://localhost:3001/api/v1/order/user/${userId}`);
    const orders = data.data.order;
    $('tbody').html('')
    orders.forEach(or => {
        $('tbody').append(`
            <tr data-i="${or._id}" style="cursor:pointer">
                <th scope="row">${or._id}</th>
                <td>${or.createdAt.slice(0,10)}</td>
                <td>${or.dateOfDelivery ? or.dateOfDelivery.slice(0,10): "Đang xử lý"}</td>
                <td>${or.dateOfRecive ? or.dateOfRecive.slice(0,10): `Đang xử lý`}</td>
                <td>${or.dateOfRecive ? or.dateOfRecive.slice(0,10): `Chưa hoàn tất`}</td>
                <td>${or.user.fullname}</td>
                <td>${or.recipientPhone}</td>
                <td>${or.recipientAddress}</td>
                <td>${or.total ? total: 0}</td>
            </tr>
        `);
        $(`tr[data-i="${or._id}"]`).click(() =>{
            redirect(`chiTietDonHang.html?id=${or._id}`);
        })
    });
}