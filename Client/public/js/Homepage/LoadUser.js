$(document).ready(function(){
    loadUser();
    $('.header__navbar-user-item--separate').click(()=> {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        redirect('loginandregiter.html')
    });

});

async function loadUser() {
    // const category = document.querySelector('.category-list');
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const dataCT = await axios.get(`http://localhost:3001/api/v1/users/${userId}`);
    console.log(dataCT);
    if(!token || dataCT.status !== 200) {
        $('.header__navbar-list').append(`<li class="header__navbar-item header__navbar-item--bold header__navbar-item--separate Register" >Đăng ký</li>
        <li class="header__navbar-item header__navbar-item--bold Login">Đăng nhập</li>`)

        $('.Login').click(() => {
            redirect('loginandregiter.html')
        })
        $('.Register').click(() => {
            redirect('loginandregiter.html#register')
        })
    }
    else {
        $('.header__navbar-user').append(
            `
            <img src="https://yt3.ggpht.com/a-/AOh14GipqfexOZj7ZjGVROd29XTD08hyTx28Gl7dC5IP=s88-c-k-c0xffffffff-no-rj-mo"
            alt="photo" class="header__navbar-user-img">
            <span class="header__navbar-user-name">${dataCT.data.user.fullname}</span>
                <ul class="header__navbar-user-menu">
                    <li class="header__navbar-user-item">
                        <a href="#">Tài khoản của tôi</a>
                    </li>
                    <li class="header__navbar-user-item">
                        <a href="#">Địa chỉ của tôi</a>
                    </li>
                    <li class="header__navbar-user-item">
                        <a href="#">Đơn mua</a>
                    </li>
                    <li class="header__navbar-user-item header__navbar-user-item--separate">
                        <a href="#">Đăng xuất</a>
                    </li>
                </ul>
            `
        )
        $('.header__navbar-user-item--separate').click(()=> {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('username');
            redirect('loginandregiter.html')
        });
        loadCart();
    }
}