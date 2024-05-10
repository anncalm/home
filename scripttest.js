$(function() {

// FAQ

  $('.faq-list-item').click(
    function(){
      var $answer = $(this).find('.answer');
      if ($answer.hasClass('open')) {
        $answer.removeClass('open');
        $(this).find('span').text('+');
      }  else {
        $answer.addClass('open');
        $(this).find('span').text('-');

      }
    }
  );

// homeに戻る
    $('#home-link').click(
      function(){
        $('html,body').scrollTop(0);

      }
    );

// メニュー
  $('#menu-show').click(
    function(){
    $('#menu-modal').fadeIn();
    $('.overlay').addClass("open");
  });

  $('#menu-close').click(
    function(){
    $('#menu-modal').fadeOut();
  });

  $('.overlay').click(
    function(){
      $('#menu-modal').fadeOut();
      $('.overlay').removeClass("open");
    }
  )

 


// スライド
  $('.slide-items').slick({
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    variableWidth: true,
    prevArrow: '<img src="img/circle-chevron-left-solid.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/circle-chevron-right-solid.svg" class="slide-arrow next-arrow">',
});

// 商品モーダルjavascript

const showModal = (event) => {
  var className = event.currentTarget.className.split(" ")[1];
  var modalClass = "." + className + "-modal";
  var clickedIndex = $("." + className).index(event.currentTarget) - 1;
  $(modalClass).eq(clickedIndex).fadeIn();
  $('#js-overlay').addClass("open");
}

$('.yakigashi, .food, .shishu').click(showModal);

    
// 商品モーダル
  
  function modalClose(){
    $('.item-modal').fadeOut();
    $('#js-overlay').removeClass("open");
  };

  $('.item-modal-close').click(
    function(){
      modalClose();
    }
  );

  $('#js-overlay').click(
    function(){
      modalClose();
    }
  );

  





















});