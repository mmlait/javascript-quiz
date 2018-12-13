

let points = 0;

function bindForm() {
  const form = document.querySelector('form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let elements = this.elements;
    for (i = 0; i < elements.length; i += 1) {
      if (elements[i].id === "c1" && elements[i].checked) {
          points += 1;
      } else if (elements[i].id === "c2" && elements[i].checked) {
        points += 1;
      } else if (elements[i].id === "a3" && elements[i].checked) {
        points += 1;
      } else if (elements[i].id === "b4" && elements[i].checked) {
        points += 1;
      } else if (elements[i].id === "b5" && elements[i].checked) {
        points += 1;
      }
    }
    swal({
      title: 'You got ' + points + '/5 correct!',
      button: 'ok!',
    }).then(function() {
    window.location = "index.html";
    });
  })
}

window.onload = function() {
  bindForm();
}
