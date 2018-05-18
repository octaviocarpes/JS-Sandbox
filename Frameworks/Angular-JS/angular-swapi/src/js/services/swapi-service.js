angular
  .module('services', [])
  .factory('filmResource', () => {
    return {
      filmUrl: 'https://swapi.co/api/films'
    };
  })
  .factory('dataResource', () => {
    let filmsData = [];
    let charactersData = [];
    let planetsData = [];
    let images = [];

    images.push({
        url:'../styles/img/A New Hope.jpg',
        name:'A New Hope'      
      });
    images.push({
        url:'../styles/img/Attack of the Clones.jpg',
        name:'Attack of the Clones'      
      });
    images.push({
        url:'../styles/img/The Phantom Menace.jpg',
        name:'The Phantom Menace'      
      });
    images.push({
        url:'../styles/img/Revenge of the Sith.jpg',
        name:'Revenge of the Sith'      
      });
    images.push({
        url:'../styles/img/Return of the Jedi.jpg',
        name:'Return of the Jedi'      
      });
    images.push({
        url:'../styles/img/The Empire Strikes Back.jpg',
        name:'The Empire Strikes Back'      
      });
    images.push({
        url:'../styles/img/The Force Awakens.jpg',
        name:'The Force Awakens'      
      });

    function storeFilmData(array) {
      array.forEach(element => {
        filmsData.push(element);
      });
    }

    function storeCharactersData(array) {
      array.forEach(element => {
        charactersData.push(element);
      });
    }

    function storePlanetsData(array) {
      array.forEach(element => {
        planetsData.push(element);
      });
    }

    let dataResource = {
      filmsData,
      charactersData,
      planetsData,
      images,
      storeFilmData,
      storeCharactersData,
      storePlanetsData
    };

    return dataResource;
  });
