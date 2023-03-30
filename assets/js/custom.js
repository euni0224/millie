$(function(){
    //메뉴 열기
    $('.btn-menu').click(function(e){
        e.preventDefault();
        $('.header').toggleClass('on')
        $('.menu-list').slideToggle();
    })

    





    //메인부터 로고 변경
    let Scroll = $('#start').offset().top;
    $(window).scroll(function(){
            var curr=$(this).scrollTop();
            
                if (curr > Scroll) {
                    $('.header').addClass('hide');
                } else {
                    $('.header').removeClass('hide');
                }
            })






            $('.hideme').each(function(a,b){
                item=$(this);
        
                // $(this).css('animation-play-state','running');
                gsap.from(item,{
                    scrollTrigger:{
                        trigger:b,
                        start:'0% 60%',
                        // markers:true,
                    },
                    opacity:0,
                    stagger:0.1,
                })
        
        
            })


    //  스크롤시 애니매이션 시작하게
    // $(window).scroll( function(){
    //     $('.hideme').each( function(i){
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
    //         if( bottom_of_window > bottom_of_object/2){
    //             $(this).animate({'opacity':'1'},500);
    //             $(this).css('animation-play-state','running');
    //         }
    //     }); 
    // });
    // $(window).trigger('scroll');


    // 비디오 클릭시 유튜브 자동 재생

        //video
        $('.btn-play').click(function(e){
            const target = $(this).data('target');
            const url = $(this).data('url');
            e.preventDefault();
            html = `<div class="video-wrap">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${url}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`
            $(target).html(html);
        });











    //qna 답 펼치기
    $('.sc-qna .btn-qna').click(function(e){
        e.preventDefault();
        $(this).parents().toggleClass('active');
    })



    // 푸터 사업자 정보 펼치기
    $('.footer .btn-on').click(function(e){
        e.preventDefault();
        if ($(this).hasClass('on')) {

            $(this).text("사업자 정보 펼쳐보기");
            $(this).removeClass('on');
            $('.addr-wrap').stop().slideUp();

        } else {

            $(this).text("사업자 정보 닫기");
            $(this).addClass('on');
            $('.addr-wrap').stop().slideDown();

        }
    })










        
    //지금 서점 베스트 셀러
    fetch('./assets/data/dummy_book.json')
    .then((response) => response.json())
    .then((json) => {
        data=json.items;
        let html = '';
        data.forEach(element => {

            html+=`<li class="swiper-slide book-item">
            <a href="/bookDetail.html?id=${element.id}">
                <div class="img-box">
                    <div class="badge audio"></div>
                    <div class="badge finish"></div>
                    <img src="${element.thumbnail}" alt="">
                </div>
                <div class="text-box">
                    <strong>${element.title}</strong>
                    <span class="writer">${element.writer}</span>
                    <span class="text etc">${element.fav}% | ${element.time}분</span>
                </div>
            </a>
        </li>`;
        });

        $('#bookList1').html(html)
        $('#bookList2').html(html)
    });









/**
 *  @cate1 주식
 *  @cate2 영어
 *  @cate3 고전
 *  @cate4 인테리어
 *  @cate5 다이어트
 * 
 */


    $('.content .category-wrap a').click(function(e){
        e.preventDefault();

        idx = $(this).index()+1;

        $(this).addClass('active').siblings().removeClass('active')

        fetch('./assets/data/dummy_book2.json')
        .then((response) => response.json())
        .then((json) => {
            data=json.items;
            const result = data.filter(function (a) {return a.cate == idx });
            let html = '';

            if(result.length == 0){
                $('#cateList1').html('데이터가 없습니다.');
                return false;
            }

            result.forEach(element => {
                html+=`<li class="swiper-slide book-item">
                <a href="/bookDetail.html?id=${element.id}">
                    <div class="img-box">
                        <img src="${element.thumbnail}" alt="">
                    </div>
                    <div class="text-box">
                        <strong>${element.title}</strong>
                        <span class="writer">${element.writer}</span>
                        <span class="text etc">${element.fav}% | ${element.time}분</span>
                    </div>
                </a>
            </li>`;
            });
    
            $('#cateList1').html(html);

               // 책슬라이드
                var slide1 = new Swiper(".group-book", {
                    slidesPerView: 'auto',
                    spaceBetween:16,
                    pagination: {
                        clickable: true,
                        }
                });




        })
    })


    $('.content .category-wrap a').eq(0).trigger('click')

    var slide2 = new Swiper(".group-book", {
        slidesPerView: 'auto',
        spaceBetween:16,
        pagination: {
            clickable: true,
            }
    });



$('.sc-viewer .group-nav a').click(function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    target = $(this).attr('href');

    $(target).addClass('active').siblings().removeClass('active');

})



var slide3 = new Swiper("#audio .swiper", {
    pagination: {
        el: "#audio .swiper-pagination",
        clickable: true,
        spaceBetween:0,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },

});
var slide4 = new Swiper("#view .swiper", {
    pagination: {
        el: "#view .swiper-pagination",
        clickable: true,
        spaceBetween:0,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },

});
var slide5 = new Swiper("#today .swiper", {
    pagination: {
        el: "#today .swiper-pagination",
        clickable: true,
        spaceBetween:0,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },

});
})

