let clicable = true;
$('.section-5 .card').on('click', function(){
    if(clicable == false){
        return false;
    }
    let card = $(this).data('card')
    let title = $(this).find('p').text();
    $('.section-5 .content .number').text('0' + card)
    $('.section-5 .content h2').text(title)

    $('.section-5 .content').show();
    $('.section-5 .content').animate({
            width:'100%',
            padding: '20px 50px',
            height:'100%'
        }, function(){
            $('.section-5 .content .close').fadeIn();
            $('.section-5 .content .icon').fadeIn();
            $('.section-5 .content .number').fadeIn();
            $('.section-5 .content h2').fadeIn();
            $('.section-5 .content p').fadeIn();
            $('.section-5 .content').addClass('visible');
        });
})

$('.section-5 .content .close').on("click", function(){
    clicable = false;
    $('.section-5 .content .close').fadeOut();
    $('.section-5 .content .number').fadeOut();
    $('.section-5 .content .icon').fadeOut();
    $('.section-5 .content h2').fadeOut();
    $('.section-5 .content').removeClass('visible');
    $('.section-5 .content p').fadeOut(function(){
        $('.section-5 .content').animate({
            width:'0%',
            padding:'0%',
            height:'0%'
        }, function(){
            $('.section-5 .content').hide();
        });
    });
    setTimeout(() => {
        clicable = true;
    }, 1500);
})

$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        if(!$('.section-5 .content').hasClass('visible')){
            return false;
        }
        clicable = false;
        $('.section-5 .content .close').fadeOut();
        $('.section-5 .content .number').fadeOut();
        $('.section-5 .content').removeClass('visible');
        $('.section-5 .content .icon').fadeOut();
        $('.section-5 .content h2').fadeOut();
        $('.section-5 .content p').fadeOut(function(){
            $('.section-5 .content').animate({
                width:'0%',
                padding:'0%',
                height:'0%'
            }, function(){
                $('.section-5 .content').hide();
            });
        });
        setTimeout(() => {
            clicable = true;
        }, 1500);
    }
});


$('.section-9 .card').on("click", function(){
    $('body').css({
        overflowX: 'hidden'
    });
    $('.section-9').css({
        transform: 'translateX(-40%)'
    });
    $('.overlay-9').fadeIn();
    $('.popUp-9').show();
    $('.popUp-9').animate({
        width: '40%'
    }, 300, function(){
        $('.popUp-9 .content').fadeIn();
    });

})

$('.overlay-9').on("click", function(){
    $('.popUp-9 .content').fadeOut(function(){
        $('.popUp-9').animate({
            width: '0%'
        }, function(){
            $('.popUp-9').hide();
            $('.overlay-9').fadeOut();
            $('.section-9').css({
                transform: 'translateX(0%)'
            });
        })
    });

})

$('.close').on("click", function(){
    $('.popUp-9 .content').fadeOut(function(){
        $('.popUp-9').animate({
            width: '0%'
        }, function(){
            $('.popUp-9').hide();
            $('.overlay-9').fadeOut();
            $('.section-9').css({
                transform: 'translateX(0%)'
            });
        })
    });

})