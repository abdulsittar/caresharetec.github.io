
var customScripts = {
  profile: function () {
      var portfolio = $('#portfolio');
  var items = $('.items', portfolio); 
  var filters = $('.filters li a', portfolio); 

  
  filters.click(function(){
    var el = $(this);
    filters.removeClass('active');
    el.addClass('active');
    var selector = el.attr('data-filter');
    items.isotope({ filter: selector });
    return false;
  });            
  },
  onePageNav: function () {

  }, 
  owlSlider: function () {
      var owl = $("#owl-demo");
      owl.owlCarousel();
      // Custom Navigation Events
      $(".next").click(function () {
          owl.trigger('owl.next');
      })
      $(".prev").click(function () {
          owl.trigger('owl.prev');
      })
  },
  bannerHeight: function () {
      var bHeight = $(".banner-container").height();
      $('#da-slider').height(bHeight);
      $(window).resize(function () {
          var bHeight = $(".banner-container").height();
          $('#da-slider').height(bHeight);
      });
  },
waySlide: function(){
      /* Waypoints Animations
     ------------------------------------------------------ */		   			  
   
                  
  },
  fitText: function(){			  
      setTimeout(function() {			
      $('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '30px' });			
      }, 100);
  },
  init: function () {
  
  }
}
$('document').ready(function () {
  customScripts.init();
});


