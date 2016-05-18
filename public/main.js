$(document).ready(init);

function init() {
  // displayType();
  $('.list-group').on('click', '.list-group-item', menuClicked);
  $('#categories').click(displayCategories);
}

function displayCategories() {

  var buttonName = $(this).attr("button-name");
  displayType(buttonName);
}

function menuClicked(e) {
  e.preventDefault();
  var id = $(this).parent().find('.id').text();
  getOneRoom(id);
}

function getOneRoom(id) {
  $.ajax({
    url: ('/rooms/getoneroom'),
    type: 'GET',
    data: {id: id},
    success: function(data) {
      displayData(data);
    },
    fail: function() {
      console.log('Get one failed');
    }
  });
}

function displayData(data) {
  $('.table-group').empty();
  var table = `<tr>`;
  var hrKeys = Object.keys(data[0]);
  hrKeys.forEach(k => {
    table += (`<th>${k}</th>`);
  });
  table += `</tr>`;
  data.forEach(d => {
    table += `<tr>`;
    for(var k in d) {
      table += `<td>${d[k]}</td>`;
    }
    table += `</tr>`;
  });
  $('.table-group').append(table);
}

function displayType(type) {
  $.get(`/rooms`, {type: type})
  .done(function(data) {
    appendRooms(data);
  })
  .fail(function(error) {
    console.log('error:', error);
  });
}

function appendRooms(data) {
  $('.clear-template').empty();
  var $appendCard = $('.clear-template').clone();
  data.forEach(function(d) {
    var $card = $('.template').clone();
    $card.removeClass('template');
    $card.find('.id').text(d.id);
    $card.find('.list-group-item').text(d.name);
    $appendCard.append($card);
  });
  $('.clear-template').append($appendCard);
}
