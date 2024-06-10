const navbarToggler = document.querySelector('.navbar-toggler');
              const collapseElement = document.getElementById('navbarToggleExternalContent');

              collapseElement.addEventListener('show.bs.collapse', function() {
                  navbarToggler.classList.remove('collapsed');
              });

              collapseElement.addEventListener('hide.bs.collapse', function() {
                  navbarToggler.classList.add('collapsed');
              });