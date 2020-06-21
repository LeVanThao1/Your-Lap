$(document).ready(function(){
   
    $('.header__cart-wrap').click(() => {
        redirect('cart.html')
    })
    $('.fa-bell').click(()=> {
        redirect('notification.html')
    })
    $('.logo').click(() => {
        redirect('homepage.html')
    })

});

    // $('.header__navbar-user-item--separate').click(()=> {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('userId');
    //     localStorage.removeItem('username');
    //     redirect('loginandregiter.html')
    // });
    // $('.header__cart-wrap').click(() => {
    //     redirect('cart.html')
    // })
    // $('.fa-bell').click(()=> {
    //     redirect('notification.html')
    // })
    // $('.logo').click(() => {
    //     redirect('homepage.html')
    // })
    // $('.productItem').click(function () {
    //     console.log('adsd')
    //         redirect(`chitiet.html/${this.attr('id')}`)
    // })
    // $('header__navbar-item header__navbar-user').click(() => {
    //     redirect('loginandregiter.html')
    // })
