function show_page(tab, page) {
  $('#tabs a').removeClass('selected');
  $(tab).addClass('selected');
  page.css({ display: 'block' });
  page.siblings('.page').css({ display: 'none' });
  return false;
}

$(function() {
  $('.original_code textarea').change(function() {
    $(this).addClass('changed');
  });
  $('.original_code select').change(function() {
    $('.original_code textarea').addClass('changed');
  });
  $('#code').click(function() {
    return show_page(this, $('.page.original_code'));
  });
  $('#colorized').click(function() {
    show_page(this, $('.page.colorized_code'));
    if ($('.original_code textarea').hasClass('changed')) {
      $.post($('form').attr('action'), { code: $('.original_code textarea')[0].value, lang: $('#lang')[0].value }, function(data) {
        $('.colorized_code').html(data);
        $('.html_source textarea')[0].value = data;
      });
    }
    $('.original_code textarea').removeClass('changed');
    return false;
  });
  $('#html_src').click(function() {
    return show_page(this, $('.page.html_source'));
  });
});


