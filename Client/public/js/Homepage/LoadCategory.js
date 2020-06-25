$(document).ready(function(){
    loadCategory();
});

async function loadCategory() {
    // const category = document.querySelector('.category-list');
    const dataCT = await axios.get(`http://localhost:3001/api/v1/type\_product`);
    console.log(dataCT);
    dataCT.data.listPT.forEach(ct => {
        $('.category-list').append(
            `<li class="category-item category-item--active ct-${ct._id}">
                <a href="homepage.html?ct=${ct._id}" class="category-item__link">${ct.name}</a>
            </li>`
        )
        // $(`.ct-${ct._id}`).click(() => {
        //     // window.location.href = "http://localhost:3000/homepage.html?ct="+ct._id;
        //     // pageTracker._trackPageview(trackCode);
        //     redirect(")
        // })
    });
}