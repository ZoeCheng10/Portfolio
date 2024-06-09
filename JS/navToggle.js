function navigationOpenToggle(){
    let navBtn = $('.HamBg');
    let icon = $('.HamBg i');
    navBtn.click(function(){
        $('nav ul').toggleClass('active');
        if(icon.text() == 'menu'){
            icon.text('close');
        }else{
            icon.text('menu')
        }
    });
}
