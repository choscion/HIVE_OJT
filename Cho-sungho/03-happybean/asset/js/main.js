$(function(){
    $('.gnb_tab').click(function(e){
        e.preventDefault();
        if ($(this).hasClass('is_selected')) {
            // $(this).removeClass('is_selected');
            // $(this).parent().siblings().find('.gnb_tab').addClass('is_selected');
        } else {
            $(this).addClass('is_selected');
            $(this).parent().siblings().find('.gnb_tab').removeClass('is_selected');
        }
    });

    $('.info_tab').click(function(e){
        e.preventDefault();
        $(this).addClass('is_selected');
        $(this).parent().siblings().find('.info_tab').removeClass('is_selected');

        tabb = $(this).data('tablist');

        $(tabb).addClass('is_selected');
        $(tabb).siblings().removeClass('is_selected');
    })

    $('.donate_tab').click(function(e){
        e.preventDefault();
        $(this).addClass('is_selected').siblings().removeClass('is_selected');

        trgt = $(this).data('tablist2');
        $(trgt).addClass('is_selected').siblings().removeClass('is_selected');
    })

    $('.method_item label').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('is_selected');
        $(this).parent().siblings().removeClass('is_selected');
    })

    $('.btn_select').click(function(e){
        e.preventDefault();
        $(this).toggleClass('is_selected');
        $(this).siblings().toggleClass('is_selected');
    })

    $('.select_tab').click(function(e){
        $(this).parent().parent('.select_list').removeClass('is_selected');
        $(this).parent().parent().siblings('.btn_select').removeClass('is_selected');
    })

    $('.btn_agree').click(function(e){
        e.preventDefault();
        $(this).toggleClass('is_selected');
    })

    $('.btn_coll').click(function(e){
        e.preventDefault();

        $(this).parent().toggleClass('is_selected');
    })



    var swiper = new Swiper(".slide01", {
        slidesPerView: 'auto',
        // spaceBetween: 30,
        freeMode: true,
      });
})