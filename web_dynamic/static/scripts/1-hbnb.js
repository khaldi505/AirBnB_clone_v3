$(function () {
  const list = {};

  $('div.amenities li input').change(
    function () {
      if ($(this).is(':checked')) {
        list[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete list[($(this).attr('data-id'))];
      }
      $('div.amenities h4').html(Object.values(list).join(', ') || '&nbsp;');
    });
});
