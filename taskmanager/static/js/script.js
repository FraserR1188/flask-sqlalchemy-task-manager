document.addEventListener('DOMContentLoaded', function() {
    // Sidenave initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmm, yyyy",
      i18n: {done: "Select"}
    });

    // select initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collasible initialisation
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });