$(function(){
    const selector = 'is_selected';

    $('.round_tab').click(function(){
        $(this).addClass(selector);
        $(this).parent().siblings().find('.round_tab').removeClass(selector);

        round = $(this).data('selected');
        $(round).addClass(selector);
        $(round).siblings().removeClass(selector);
    })
    
    $('.player_tab').click(function(){
        $(this).addClass(selector).parent().siblings().find('.player_tab').removeClass(selector);

        tool = $(this).data('checked');
        $(tool).addClass(selector).siblings().removeClass(selector);
    })
})