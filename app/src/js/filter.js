$('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'gm-btn') {
      eachBoxes('gm', boxes);
    } else if(type == 'gp-btn') {
      eachBoxes('gp', boxes);
    } else if(type == 'pp-btn') {
      eachBoxes('pp', boxes);
    } else {
      eachBoxes('all', boxes);
    }

    function eachBoxes(type, boxes) {

        if(type == 'all') {
          $(boxes).fadeIn();
        } else {
          $(boxes).each(function() {
            if(!$(this).hasClass(type)) {
              $(this).fadeOut('slow');
            } else {
              $(this).fadeIn();
            }
          });
        }
      }

  });