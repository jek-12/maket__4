$(document).ready(function() {
    $('.burger').on('click', function() {
        $(".burger_s").toggleClass('burger_s_active');
    });
        let clicks = 0;
        let arr = Array.from($(".header_list li"));
        $(".burger").click(function() {
            if ( clicks & 1 ) {
                setTimeout(function () {
                    for (let b = arr.length-1; b > -1; b--) {
                        setTimeout(()=>$(arr[b]).css('display', 'none'), 500);
                        setTimeout(function () {
                            $(arr[b]).removeClass("header_menu_active");
                        }, 500-b*100);
                    }
                    $(".container").css("height", "70px");
                }, 350);
            }   else {
                $(".container").css("height", "320px");
                for (let i = 0; i < arr.length; i++) {
                    $(arr[i]).css('display', 'flex');
                    // $(arr[i]).css('display', 'flex');
                    setTimeout(()=>$(arr[i]).css('display', 'flex'), 500);
                    setTimeout(function () {
                        $(arr[i]).addClass("header_menu_active");
                    }, 80+i*80)
                }
            }
            clicks++;
        })
});





