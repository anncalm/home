$(function(){

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
  
  // メニューモーダル
    $('#menu-show').click(
      function(){
      $('#menu-modal').fadeIn();
      $('.overlay').addClass("open");
    });

    const menuClose= ()=> {
      $('#menu-modal').fadeOut();
      $('.item-modal').fadeOut();
      $('.overlay').removeClass("open");
    }
  
    $('#menu-close').click(
      function(){
      menuClose();
    });
  
    $('.overlay').click(
      function(){
        menuClose();
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
  
  // 商品モーダルを開く
  $('.yakigashi').click(
    function(){
      var clickedIndex = $('.yakigashi').index($(this))-1;
      $('.yakigashi-modal').eq(clickedIndex).fadeIn();
      $('#js-overlay').addClass("open");
    }
  );
  
  $('.food').click(
    function(){
      var clickedIndex = $('.food').index($(this))-1;
       $('.food-modal').eq(clickedIndex).fadeIn();
      $('#js-overlay').addClass("open");
    }
  );
  
  $('.shishu').click(
    function(){
      var clickedIndex = $('.shishu').index($(this))-1;
       $('.shishu-modal').eq(clickedIndex).fadeIn();
      $('#js-overlay').addClass("open");
    }
  );
  
      
  // 商品モーダルを閉じる
  
    $('.item-modal-close').click(
      function(){
        menuClose();
      }
    );

  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  });