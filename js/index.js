$(document).ready(function () {
    $(".banner-category-wrap .add-category ul").hide()

    $(".banner-category-wrap > .basic ul li").mouseover(function(e){
        let i = $(this).index()
        // alert(i)
        $(".banner-category-wrap .add-category > ul").eq(i).show()
    }).mouseout(function(){
            $(".banner-category-wrap .add-category ul").hide()

    })
    $(".banner-category-wrap .add-category ul").mouseover(function(){
        let i = $(this).index()
        // alert(i)
        $(".banner-category-wrap .add-category ul").eq(i).show()
    }).mouseout(function(){
        $(".banner-category-wrap .add-category ul").hide()
    })

    // $(".banner-category-wrap").click(function(){
    // })

    $(".header-wrap .nav a").mouseover(function(e){ 
        $(".nav-menu").show()
    }).mouseout(function(){
        $(".nav-menu").hide()
    })
    $(".header-wrap .nav-menu").mouseover(function(){
        $(".nav-menu").show()
    }).mouseout(function(){
        $(".nav-menu").hide()
    })
});