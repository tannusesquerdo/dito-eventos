(function() {
  var validate = function(s) {
    return s.match(/^([a-zA-Z0-9_\-\.+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
  };

  // Show an element
  var show = function (elem) {
    elem.style.display = 'block';
  };

  // Hide an element
  var hide = function (elem) {
    elem.style.display = 'none';
  };

  var btnIdentify = document.getElementById('btn-submit');
  var form = document.getElementById('form-event');
  var success = document.getElementById('success');

  btnIdentify.addEventListener('click', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var cargo = document.getElementById('cargo').value;
    var company = document.getElementById('company').value;
    var data = {
      telefone: phone,
      cargo: cargo,
      empresa: company
    };

    if(validate(email)) {
      var id = dito.generateID(email);
      var data = { id_type: 'id', id: id, email: email, name: name, data: data };
      var eventData = { event: JSON.stringify({ action: 'participou-evento', data: { evento: '3 Meetup Engenharia de Dados' } })};
  
      dito.Api.post('login', '/users/portal/'+id+'/signup', data, function(res) {
        if(res.data) {
          var ref = res.data.reference;
          dito.Api.post('events', '/users/'+ref, eventData, function(res) {
            form.reset();
            hide(form);
            show(success);

            setTimeout(function() { 
              hide(success);
              show(form);
            }, 4000);
          });
        }
      })
    }
  }, false)
})();