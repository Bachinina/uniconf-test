$(window).on('load', (function () {
  const media = {
    MD: 767,
    LG: 991,
    XL: 1199,
    XXL: 1399,
  };

  $('[data-header]').each(function () {
    const header = $(this);
    const headerTop = header.find('[data-header-top]');
    const headerNav = header.find('[data-header-nav]');

    const onWindowScroll = function () {
      if ($(window).width() > media.XL) {
        if ($(this).scrollTop() > headerTop.outerHeight()) {
          $('main').css({
            'padding-top': headerNav.outerHeight()
          });
          headerNav.addClass('fixed');
        } else {
          headerNav.removeClass('fixed');
          $('main').css({
            'padding-top': 0
          });
        }
      } else {
        $('main').css({
          'padding-top': headerNav.outerHeight()
        });
      }
    };
    onWindowScroll();

    $(window).on('scroll', onWindowScroll);
    $(window).on('resize', onWindowScroll);
  });

  $('[data-header-nav]').each(function () {
    const headerNav = $(this);
    const navItems = headerNav.find('[data-nav-item]');
    const dropItems = headerNav.find('[data-nav-drop]');
    const dropLists = headerNav.find('[data-nav-drop-list]');
    const listsWrap = headerNav.find('[data-nav-drop-menu]');

    const hideAll = function () {
      if ($(window).width() > media.XL) {
        dropItems.removeClass('active');
        listsWrap.removeClass('active');
        dropLists.removeClass('active');
      }
    }

    navItems.on('mouseover', hideAll);
    navItems.on('focus', hideAll);
    headerNav.on('mouseleave', hideAll);


    dropItems.each(function () {
      const item = $(this);
      const list = $('[data-nav-drop-list=' + item.attr('data-nav-drop') + ']');
      const container = $('[data-header-nav-container');

      const showDrop = function () {
        if ($(window).width() > media.XL) {
          list.css({
            'margin-left': item.offset().left - container.offset().left - 15
          })
          item.addClass('active');
          listsWrap.addClass('active');
          list.addClass('active');
        }
      };

      item.on('mouseover', showDrop);
      item.on('focus', showDrop);
    });
  });


  $('[data-button-to-show]').on('click', function () {
    const btn = $(this);
    const blockToShow = btn.attr('data-button-to-show');

    $('[data-block-to-show = ' + blockToShow + ']').removeClass('inactive');
    btn.remove();
  });

  $('[data-toggle-class]').each(function () {
    $(this).on('click', function () {
      $(this).toggleClass($(this).attr('data-toggle-class'));
    });
  })
}));
