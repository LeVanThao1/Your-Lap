$(document).ready(function(){
    loadProduct();
});

async function loadProduct() {
    // const category = document.querySelector('.category-list');
    const dataCT = await axios.get(`http://localhost:3001/api/v1/products`);
    console.log(dataCT);
    dataCT.data.ListProducts.forEach(pr => {
        const checkPr = (pr.amount > 0);
        $('.allProduct').append(
            `<div class="grid__column-2-4 productItem" data-id="${pr._id}">
            <a class="home-product-item" href="http://localhost:3000/chitiet.html?id=${pr._id}">
                <div class="home-product-item__img"
                    style="background-image: url(https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-600x600.jpg);">
                </div>
                <h4 class="home-product-item__name">${pr.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${Math.ceil(pr.price * 1.1)}</span>
                    <span class="home-product-item__price-current">${pr.price}</span>
                </div>
                <div class="home-product-item__action">
                    <!-- Sản phẩm được like thì thêm class ...--liked vào -->
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                        <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                    </span>
                    <span class="home-product-item__sold">${pr.amount > 0? "Con " + pr.amount + " SP": "Het hang"}</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__origin-brand">${pr.NSX.name}</span>
                    <span class="home-product-item__origin-name">${pr.NSX.nation}</span>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">10%</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </a>
        </div>`
        )
    });
}