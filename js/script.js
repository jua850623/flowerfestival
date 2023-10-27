$(".gnb li").hover(
    function(){
        $(this).find(".sub").stop().slideDown();
    },
    function(){
        $(this).find(".sub").stop().slideUp();
    }
);


$(".open").click(
    function(){
        $("#popup").show();
    }
);
$(".close").click(
    function(){
        $("#popup").hide();
    }
);

$("#site").change(
    function(){
        // console.log(1234);
        // $(this).val();
        let val = $(this).val();
        console.log(val);
        window.open(val);
    }
);
$("#sns").change(
    function(){
        // console.log(1234);
        // $(this).val();
        let val = $(this).val();
        console.log(val);
        window.open(val);
    }
);