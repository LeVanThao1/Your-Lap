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
            `<div class="grid__column-3">
            <div class="home-product-item item-${pr._id}" href="#">
                <a href="#" class="home-product-wrapp">
                    <div class="home-product-item__img"
                    style="background-image: url(${pr.images[0].url});">
                </div>
                <h4 class="home-product-item__name">${pr.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${Math.ceil(pr.price * 1.2)}</span>
                    <span class="home-product-item__price-current">${pr.price}</span>
                </div>
                </a>
                
                <div class="home-product-item__action">
                    <!-- Sản phẩm được like thì thêm class ...--liked vào -->
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart" onclick="liked(this)"></i>
                        <i class="home-product-item__like-icon-fill fas fa-heart" onclick="unliked(this)"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="home-product-item__sold">${pr.amount > 0? "Còn hàng": "Hết hàng"}</span>
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
            </div>
        </div>`
        )
        $(`.item-${pr._id}`).click(() => {
            redirect(`chitiet.html?id=${pr._id}`)
        })
    });
}