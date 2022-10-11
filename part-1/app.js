let favNumber = 4;
let url = "http://numbersapi.com";

// 1.
$.getJSON(`${url}/${favNumber}?json`, function (data) {
  console.log(data);
});

// 2.
let favNumbers = [7, 8, 9];
$.getJSON(`${url}/${favNumbers}?json`, function (data) {
  console.log(data);
});

let facts = [];
$.getJSON(`${url}/${favNumber}?json`, function (data) {
  facts.push(data.text);
  $.getJSON(`${url}/${favNumber}?json`, function (data) {
    facts.push(data.text);
    $.getJSON(`${url}/${favNumber}?json`, function (data) {
      facts.push(data.text);
      $.getJSON(`${url}/${favNumber}?json`, function (data) {
        facts.push(data.text);
        facts.forEach((fact) => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});
