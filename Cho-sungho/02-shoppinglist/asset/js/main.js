const shopTitle = document.querySelectorAll(".shop_title");
const shopCont = document.querySelectorAll(".goods_wrap");
const heart = document.querySelectorAll(".btn_heart");

// 탭 메뉴
for ( let i = 0; i < shopTitle.length; i++) {
    shopTitle[i].addEventListener('click', function(){
        for( let j = 0; j < shopTitle.length; j++) {
            shopTitle[j].ariaSelected = "false";
            shopCont[j].tabIndex = "-1";
        }
        shopTitle[i].ariaSelected = "true";
        shopCont[i].tabIndex = "0";
    })
}

// 찜하기 버튼
for (let i = 0; i < heart.length; i++){
    heart[i].addEventListener('click', function(){
        if (this.classList.contains('checked')) {
            // this.setAttribute('aria-pressed', 'false');
            this.ariaPressed = "false"
            this.classList.remove('checked');
        } else {
            // this.setAttribute('aria-pressed', 'true');
            this.ariaPressed = "true";
            this.classList.add('checked');  
        }
    })
}