function init_gals()
{
	/////// video1
	$(".video1").hover(function() {
		$(this).find("img").stop().animate({opacity:0.8}, 400, 'easeOutExpo');
	},function(){
	    $(this).find("img").stop().animate({opacity:1}, 400, 'easeOutExpo' );
	});

	//////////// scroll
	$(".scrollGall").jCarouselLite({
        btnNext: ".nextGall",
        btnPrev: ".prevGall",        
        speed: 800,
        visible: 3,
		mouseWheel: true,
		circular: false
    });

    /////// scrollGall
	$(".scrollGall a").find(".over").css({opacity:0.2});
	$(".scrollGall a").find(".txt").css({opacity:0});
	$(".scrollGall a").hover(function() {
		$(this).find(".over").stop().animate({opacity:1 }, 800, 'easeOutExpo');
		$(this).find(".txt").stop().animate({opacity:1 }, 400, 'easeOutExpo');
	},function(){
	    $(this).find(".over").stop().animate({opacity:0.2 }, 800, 'easeOutExpo' );
		$(this).find(".txt").stop().animate({opacity:0 }, 400, 'easeOutExpo');
	});

	/////// prev next
	$(".prevGall, .nextGall").find("span").css({opacity:0.4});
	$(".prevGall").hover(function() {
		$(this).find("span").stop().animate({opacity:1, marginLeft:-20 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).find("span").stop().animate({opacity:0.4, marginLeft:0 }, 400, 'easeOutExpo');		   
	});
	$(".nextGall").hover(function() {
		$(this).find("span").stop().animate({opacity:1, marginLeft:20 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).find("span").stop().animate({opacity:0.4, marginLeft:0 }, 400, 'easeOutExpo');		   
	});
	
	
} //init_gals() end

function start(){ 
	
	$('.header_bg').css({left:-950}).stop().delay(100).animate({left:0},800,'easeOutExpo');

};

function showSplash(){
	setTimeout(function () {		
		$('header').stop().animate({opacity:0},800,'easeOutExpo', function(){ $(this).css({display:'none'}); });
		$('.menu').stop().delay(100).animate({marginTop:-52},800,'easeOutExpo');
	}, 100);
	setTimeout(function () {		
		$('.splash').css({display:'block'});
		$('#menu_splash').css({display:'block'});
		$(".splash .box1").stop().animate({marginTop:0},800,'easeOutExpo');
		$(".splash .box2").stop().animate({marginTop:0},800,'easeOutExpo');
	}, 500);
	setTimeout(function () {		
		$("#menu_splash .nav3 .box1, #menu_splash .nav4 .box1").stop().animate({marginTop:0},800,'easeOutExpo');
		$("#menu_splash .nav3 .box2, #menu_splash .nav4 .box2").stop().animate({marginTop:0},800,'easeOutExpo');
	}, 700);
	setTimeout(function () {		
		$("#menu_splash .nav2 .box1, #menu_splash .nav5 .box1").stop().animate({marginTop:0},800,'easeOutExpo');
		$("#menu_splash .nav2 .box2, #menu_splash .nav5 .box2").stop().animate({marginTop:0},800,'easeOutExpo');
	}, 900);
	setTimeout(function () {		
		$("#menu_splash .nav1 .box1, #menu_splash .nav6 .box1").stop().animate({marginTop:0},800,'easeOutExpo');
		$("#menu_splash .nav1 .box2, #menu_splash .nav6 .box2").stop().animate({marginTop:0},800,'easeOutExpo');
	}, 1100);
	
};
function hideSplash(){ 
	
	$('header').css({display:'block'}).stop().delay(500).animate({opacity:1},800,'easeOutExpo');
	$('.menu').stop().delay(500).animate({marginTop:0},800,'easeOutExpo');

	setTimeout(function () {
		$("#menu_splash .nav1 .box1, #menu_splash .nav6 .box1").stop().animate({marginTop:470},800,'easeOutExpo');
		$("#menu_splash .nav1 .box2, #menu_splash .nav6 .box2").stop().animate({marginTop:-33},800,'easeOutExpo');
	}, 0);
	setTimeout(function () {
		$("#menu_splash .nav2 .box1, #menu_splash .nav5 .box1").stop().animate({marginTop:470},800,'easeOutExpo');
		$("#menu_splash .nav2 .box2, #menu_splash .nav5 .box2").stop().animate({marginTop:-33},800,'easeOutExpo');
	}, 200);
	setTimeout(function () {
		$("#menu_splash .nav3 .box1, #menu_splash .nav4 .box1").stop().animate({marginTop:470},800,'easeOutExpo');
		$("#menu_splash .nav3 .box2, #menu_splash .nav4 .box2").stop().animate({marginTop:-33},800,'easeOutExpo');
	}, 400);
	setTimeout(function () {
		$(".splash .box1").stop().animate({marginTop:567},800,'easeOutExpo');
		$(".splash .box2").stop().animate({marginTop:-33},800,'easeOutExpo');
	}, 600);
	setTimeout(function () {
		$("#menu_splash").css({display:'none'});		
		$(".splash").css({display:'none'});
	}, 1400);







};
function hideSplashQ(){	
	
	$('header').css({display:'block', opacity:1});
	$('.menu').css({marginTop:0});
	$("#menu_splash .box1").css({marginTop:470});
	$("#menu_splash .box2").css({marginTop:-33});
	$(".splash .box1").css({marginTop:567});
	$(".splash .box2").css({marginTop:-33});
	$("#menu_splash").css({display:'none'});		
	$(".splash").css({display:'none'});

	
};

///////////////////

$(document).ready(function() {
	////// sound control
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},

		repeat: function(event) { // Override the default jPlayer repeat event handler
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});

	/////// sound
	$(".jp-mute, .jp-unmute").hover(function() {
		$(this).stop().animate({color:"#d4ae71"}, 400, 'easeOutExpo');
	},function(){
	    $(this).stop().animate({color:"#5a4024"}, 400, 'easeOutExpo' );
	});

	/////// icons
	$(".icons li").find("a").css({opacity:0.4});
	$(".icons li a").hover(function() {
		$(this).stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).stop().animate({opacity:0.4 }, 400, 'easeOutExpo' );		   
	});

	

    /////// splash menu
	$("#menu_splash li a").find(".img").css({opacity:0.8});
	$("#menu_splash li.nav1 a, #menu_splash li.nav2 a, #menu_splash li.nav3 a").hover(function() {
		$(this).stop().animate({marginLeft:-50 }, 400, 'easeOutExpo');		    
		$(this).find(".img").stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
		$(this).find(".txt1").stop().animate({color:"#863900" }, 400, 'easeOutExpo');
	},function(){
		$(this).stop().animate({marginLeft:0 }, 400, 'easeOutExpo');
	    $(this).find(".img").stop().animate({opacity:0.8 }, 400, 'easeOutExpo' );
	    $(this).find(".txt1").stop().animate({color:"#423326" }, 400, 'easeOutExpo');		   
	});
	$("#menu_splash li.nav4 a, #menu_splash li.nav5 a, #menu_splash li.nav6 a").hover(function() {
		$(this).stop().animate({marginLeft:50 }, 400, 'easeOutExpo');		    
		$(this).find(".img").stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
		$(this).find(".txt1").stop().animate({color:"#863900" }, 400, 'easeOutExpo');
	},function(){
		$(this).stop().animate({marginLeft:0 }, 400, 'easeOutExpo');
	    $(this).find(".img").stop().animate({opacity:0.8 }, 400, 'easeOutExpo' );
	    $(this).find(".txt1").stop().animate({color:"#423326" }, 400, 'easeOutExpo');		   
	});
	

   //////////////////////  paralax
   //// nav1 and nav6
	$("#menu_splash .nav1 .parallax-layer").parallax({
            //mouseport: jQuery(".main2")
   },
   {
        yparallax: false,
        xparallax: '100%',
        width:212
   });
   $("#menu_splash .nav6 .parallax-layer").parallax({
            //mouseport: jQuery(".main2")
   },
   {
        yparallax: false,
        xparallax: '100%',
        width:212
   });
   //// nav2 and nav5
   $("#menu_splash .nav2 .parallax-layer").parallax({
            //mouseport: jQuery(".main2")
   },
   {
        yparallax: false,
        xparallax: '100%',
        width:252
   });
   $("#menu_splash .nav5 .parallax-layer").parallax({
            //mouseport: jQuery(".main2")
   },
   {
        yparallax: false,
        xparallax: '100%',
        width:252
   });
   //// nav1 and nav4
   $("#menu_splash .nav3 .parallax-layer").parallax({
            //mouseport: jQuery(".main2")
   },
   {
        yparallax: false,
        xparallax: '100%',
        width:292
   });
   //// nav1 and nav4
   $("#menu_splash .nav4 .parallax-layer").parallax({
            //mouseport: jQuery(".main2")
   },
   {
        yparallax: false,
        xparallax: '100%',
        width:292
   });

    

	


	

	
	
	
	
	
	
	
	
	
		
 });  ////////




$(window).load(function() {
						
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: true,
		verticalGutter: 11,
		verticalDragMinHeight: 91,
		verticalDragMaxHeight: 91
	});

	
	
	/////// jspDrag
	$(".jspDrag").css({opacity:0.8});	
	$(".jspDrag").hover(function() {
		$(this).stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).stop().animate({opacity:0.8 }, 400, 'easeOutExpo' );		   
	});
	//// up and down
	$(".jspArrowUp, .jspArrowDown").css({opacity:0.5});
	$(".jspArrowUp, .jspArrowDown").hover(function() {
		$(this).stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).stop().animate({opacity:0.5 }, 400, 'easeOutExpo' );		   
	});

	////// submenu
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
   });

	
	
	
	
	//content switch
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});
	var content = $('#content');

	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',left:-2000});
		   $('header').css({display:'none',opacity:0});
		   $('.menu').css({marginTop:-52});
        },
        actFu:function(_){
			var Delay = 0;
			if ( (_.pren == 0) ){
                Delay = 500;
            }

			if(_.curr){
				_.curr.css({display:'block', left:-2000}).stop().delay(Delay).animate({left:0},800, 'easeInOutExpo');
			}
			if(_.prev){
				_.prev.stop().animate({left:2000},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
			}

			//console.log(_.pren, _.n);
            if ( (_.n == 0) && (_.pren != -1) ){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
            }
  		}
    });
	//content switch navs
	var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_HOME',
        hoverIn:function(li){
			//$('> a .over',li).stop(true).animate({top:0},400, 'easeOutExpo');
			$('> a .over',li).stop().animate({top:46},400, 'easeOutCubic');
			$('.txt1',li).stop().animate({color:"#e9cf9f"},400, 'easeOutExpo');

        },
        hoverOut:function(li){
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('.txt1',li).stop().animate({color:"#625244"},400, 'easeOutExpo');
				$('> a .over',li).stop().animate({top:-52},400, 'easeOutCubic');
			};
        }
    })
    .navs(function(n){
   	    content.tabs(n);
   	});
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});
		start();
	}, 100);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);
	
});