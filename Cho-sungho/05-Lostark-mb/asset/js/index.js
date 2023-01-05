$(function(){
    // $('.btn_input label').click(function(e){
    //     e.preventDefault();

    //     // alert('11');
    //     $(this).parent().addClass('is_selected');
    //     $(this).parent().siblings().removeClass('is_selected');
    // })

    $('.check_item label').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('is_selected');
        $(this).parent().siblings().removeClass('is_selected');
    })

    $('.check_input label').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('is_selected');
    })

    const emailInput = $('.input_item_mail .text_wrap');
    const emailInputMsg = $('.input_item_mail .input_msg ');
    const emailInputIcon = $('.input_item_mail .icon_check ');
    const nickInput = $('.input_item_nick .text_wrap');
    const nickInputMsg = $('.input_item_nick .input_msg ');

    const commonInput = $('.text_input input');

    $(commonInput).focus(function(){
        $(this).addClass('on');
    })
    $(commonInput).blur(function(){
        $(this).removeClass('on');
    })

    $('.btn_click').click(function(e){
        e.preventDefault();
        $(this).toggleClass('checked');

        if ($(this).hasClass('checked')) {
            $(emailInput).val('');
            $(emailInputMsg).text('이메일 인증이 진행되니 정확한 이메일 주소를 입력해주시기 바랍니다.');
            $(emailInputMsg).removeClass('is_correct');
            $(emailInput).removeClass('is_correct');
            $(emailInputIcon).removeClass('is_correct');

            $(nickInput).removeClass('is_uncorrect');
            $(nickInputMsg).removeClass('is_uncorrect');
        } else {
            $(emailInput).val('wonique@naver.com');
            $(emailInputMsg).text('사용 가능한 아이디 입니다.');
            $(emailInputMsg).addClass('is_correct');
            $(emailInput).addClass('is_correct');
            $(emailInputIcon).addClass('is_correct');

            $(nickInput).addClass('is_uncorrect');
            $(nickInputMsg).addClass('is_uncorrect');
        }
    })

})