require('dotenv').config()

// get random taco shop name
async function getTacoShop() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://nksou7u3c4.execute-api.us-east-2.amazonaws.com/default/taco_selector", requestOptions)
        .then(response => response.text())
        .then(result => {
            const info = getShopInfo(result)
            console.log(info)
        })
        
        .catch(error => console.log('error', error));
}

// delete this function and use functions from Places API
// async function getShopInfo(result) {
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         // headers: {
//         //   'Access-Control-Allow-Origin': 
//         // }
//       };
//         fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.API_KEY}&query=${result}`, requestOptions)
//         .then(response => response.text())
//         .then(result => result)
//         .catch(error => console.log('error', error));
// }

async function getShopInfo(result) {
  // get place name and id

  // get place photos (see website)

  // get place details
  let request = {
    query: result,
    fields: ['name', 'formatted_address', 'opening_hours'],
  };

  var service = new google.maps.places.PlacesService(map);

  service = new google.maps.places.PlacesService(map);
  service.getDetails(request, callback);

  function callback(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarker(place);
    }
}
}