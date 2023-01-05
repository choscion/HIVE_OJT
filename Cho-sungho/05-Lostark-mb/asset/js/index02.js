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
    const emailInputCheck = $('.input_item_mail .check_input ');

    const nickInput = $('.input_item_nick .text_wrap');
    const nickInputMsg = $('.input_item_nick .input_msg ');
    const nickInputIcon = $('.input_item_nick .icon_check ');

    const passInput = $('.input_item_pass .text_wrap');
    const passInputMsg = $('.input_item_pass .input_msg');

    const commonInput = $('.text_input input');

    $(commonInput).focus(function(){
        $(this).addClass('on');
    })
    $(commonInput).blur(function(){
        $(this).removeClass('on');
    })

    $('.btn_click02').click(function(e){
        e.preventDefault();
        $(this).toggleClass('checked');

        if ($(this).hasClass('checked')) {
            $(emailInput).val('');
            $(emailInputMsg).text('이메일 인증이 진행되니 정확한 이메일 주소를 입력해주시기 바랍니다.');
            $(emailInputMsg).removeClass('is_correct');
            $(emailInput).removeClass('is_correct');
            $(emailInputIcon).removeClass('is_correct');
            $(emailInputCheck).removeClass('is_selected');

            $(nickInput).removeClass('is_correct');
            $(nickInput).val('');
            $(nickInputMsg).text('2자 ~ 16자 한글, 영문, 숫자를 사용해주세요.');
            $(nickInputMsg).removeClass('is_correct');
            $(nickInputIcon).removeClass('is_correct');

            $(passInput).removeClass('is_uncorrect');
            $(passInputMsg).removeClass('is_uncorrect');
        } else {
            $(emailInput).val('wonique@naver.com');
            $(emailInputMsg).text('사용 가능한 아이디 입니다.');
            $(emailInputMsg).addClass('is_correct');
            $(emailInput).addClass('is_correct');
            $(emailInputIcon).addClass('is_correct');
            $(emailInputCheck).addClass('is_selected');

            $(nickInput).addClass('is_correct');
            $(nickInput).val('로스트아크');
            $(nickInputMsg).text('사용 가능한 닉네임입니다.');
            $(nickInputMsg).addClass('is_correct');
            $(nickInputIcon).addClass('is_correct');

            $(passInput).addClass('is_uncorrect');
            $(passInputMsg).addClass('is_uncorrect');
        }
    })

})