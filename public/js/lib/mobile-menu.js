var $RMjQuery = jQuery.noConflict();

$RMjQuery( document ).ready( function() {
  var isOpen = false;
  $RMjQuery( document ).on( 'click', '#click-menu', function() {
    $RMjQuery( '#responsive-menu' ).css( 'height', $RMjQuery( document ).height() );
    !isOpen ? openRM() : closeRM();
  });

  function openRM() {
    $RMjQuery( '#responsive-menu' ).css( 'display', 'block' );
    $RMjQuery( '#responsive-menu' ).addClass( 'RMOpened' );
    $RMjQuery( '#click-menu' ).addClass( 'click-menu-active' );
    $RMjQuery( '#responsive-menu' ).stop().animate( { left: "0" }, 500, 'linear', function() {
      $RMjQuery( '#responsive-menu' ).css( 'height', $RMjQuery( document ).height() );
      isOpen = true;
    } );
  }

  function closeRM() {
    $RMjQuery( '#responsive-menu' ).animate( { left: -$RMjQuery( '#responsive-menu' ).width() }, 500, 'linear', function() {
      $RMjQuery( '#responsive-menu' ).css( 'display', 'none' );
      $RMjQuery( '#responsive-menu' ).removeClass( 'RMOpened' );
      $RMjQuery( '#click-menu' ).removeClass( 'click-menu-active' );
      isOpen = false;
    } );
  }

  $RMjQuery( window ).resize( function() {
    $RMjQuery( '#responsive-menu' ).stop( true, true );
    $RMjQuery( '#responsive-menu' ).css( 'height', $RMjQuery( document ).height() );
    if( $RMjQuery( window ).width() > 768 ) {
      if( $RMjQuery( '#responsive-menu' ).css( 'left' ) != -$RMjQuery( '#responsive-menu' ).width() ) {
        closeRM();
      }
    }
  });

  $RMjQuery( '#responsive-menu ul ul' ).css( 'display', 'none' );
  $RMjQuery( '#responsive-menu .current_page_ancestor.menu-item-has-children' ).children( 'ul' ).css( 'display', 'block' );
  $RMjQuery( '#responsive-menu .current-menu-ancestor.menu-item-has-children' ).children( 'ul' ).css( 'display', 'block' );
  $RMjQuery( '#responsive-menu .current-menu-item.menu-item-has-children' ).children( 'ul' ).css( 'display', 'block' );
  $RMjQuery( '#responsive-menu .current_page_ancestor.page_item_has_children' ).children( 'ul' ).css( 'display', 'block' );
  $RMjQuery( '#responsive-menu .current-menu-ancestor.page_item_has_children' ).children( 'ul' ).css( 'display', 'block' );
  $RMjQuery( '#responsive-menu .current-menu-item.page_item_has_children' ).children( 'ul' ).css( 'display', 'block' );

  var clickLink = '<span class=\"appendLink rm-append-inactive\">&#x25BC;</span>';
  var clickedLink = '<span class=\"appendLink rm-append-active\">&#x25B2;</span>';

  $RMjQuery( '#responsive-menu .responsive-menu li' ).each( function() {
    if( $RMjQuery( this ).children( 'ul' ).length > 0 ) {
      if( $RMjQuery( this ).find( '> ul' ).css( 'display' ) == 'none' ) {
        $RMjQuery( this ).prepend( clickLink );
      } else {
        $RMjQuery( this ).prepend( clickedLink );
      }
    }
  });



  $RMjQuery( '.appendLink' ).on( 'click', function() {



    $RMjQuery( this ).nextAll( '#responsive-menu ul ul' ).slideToggle();

    $RMjQuery( this ).html( $RMjQuery( this ).hasClass( 'rm-append-active' ) ? '&#x25BC;' : '&#x25B2;' );
    $RMjQuery( this ).toggleClass( 'rm-append-active rm-append-inactive' );

    $RMjQuery( '#responsive-menu' ).css( 'height', $RMjQuery( document ).height() );

  });

  $RMjQuery( '.rm-click-disabled' ).on( 'click', function() {



    $RMjQuery( this ).nextAll( '#responsive-menu ul ul' ).slideToggle();

    $RMjQuery( this ).siblings( '.appendLink' ).html( $RMjQuery( this ).hasClass( 'rm-append-active' ) ? '&#x25BC;' : '&#x25B2;' );
    $RMjQuery( this ).toggleClass( 'rm-append-active rm-append-inactive' );

    $RMjQuery( '#responsive-menu' ).css( 'height', $RMjQuery( document ).height() );

  });



  $RMjQuery( '.rm-append-inactive' ).siblings( 'ul' ).css( 'display', 'none' );

});