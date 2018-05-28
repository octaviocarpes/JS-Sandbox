require('../node_modules/bulma/css/bulma.min.css');
require('../node_modules/bulma/bulma.sass');
require('../node_modules/bulma-extensions/dist/bulma-extensions.min.css');
require('../node_modules/bulma-extensions/bulma-quickview/dist/bulma-quickview.js');
require('../node_modules/bulma-extensions/bulma-quickview/dist/bulma-quickview.min.css');
require('./styles/css/main.css');
require('./styles/css/films.css');
require('./styles/css/details.css');

angular
  .module('main', ['ui.router', 'directives', 'services', 'filmsService', 'charactersService'])
  .config([
    '$stateProvider',
    '$locationProvider',
    function($stateProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
        .state({
          url: '/',
          name: 'home',
          template: require('./pages/home.html')
        })
        .state({
          url: '/details/?{movieid}',
          name: 'details',
          template: require('./pages/film-info.html')
        })
        .state({
          url: '/characters',
          name: 'characters',
          template: require('./pages/characters.html')
        })
        .state({
          url: '/planets',
          name: 'planets',
          template: require('./pages/planets.html')
        });
    }
  ]);

// Javascript
require('./js/app.js');

// Directives
require('./js/directives/swapi-directives.js');

// Controllers
require('./js/controllers/films-controller.js');
require('./js/controllers/film-detail-controller.js');
require('./js/controllers/data-controller.js');

// Services
require('./js/services/swapi-service.js');
require('./js/services/films-service.js');
require('./js/services/characters-service.js');
