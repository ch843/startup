// --------- api call ------------

// get random taco shop name
async function getTacoShop() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      await fetch("https://nksou7u3c4.execute-api.us-east-2.amazonaws.com/default/taco_selector", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
        })
        
        .catch(error => console.log('error', error));
}

// // async function getShopInfo(result) {
// //   var requestOptions = {
// //       method: 'GET',
// //       redirect: 'follow'
// //     };
// //       fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.API_KEY}&query=${result}`, requestOptions)
// //       .then(response => response.text())
// //       .then(result => result)
// //       .catch(error => console.log('error', error))

// function getShopInfo(result) {
//   function initMap() {
//     const div = document.createElement('div');
//     const service = new google.maps.places.PlacesService(div);

//     const request = {
//       query: result,
//       fields: ['place_id']
//     };

//     try {
//       const results = service.findPlaceFromQuery(request);
//       const placeID = results[0].place_id;

//       const detailsRequest = {
//         placeId: placeID,
//         fields: ['name', 'formatted_address', 'formatted_phone_number', 'opening_hours.weekday_text', 'website', 'photos']
//       };

//       const details = new Promise((resolve, reject) => {
//         service.getDetails(detailsRequest, (result, status) => {
//           if (status === google.maps.places.PlacesServiceStatus.OK) {
//             resolve(result);
//           } else {
//             reject(new Error(`Place details request failed with status ${status}`));
//           }
//         });
//       });

//       console.log(details.name);
//       console.log(details.formatted_address);
//       console.log(details.formatted_phone_number);
//       console.log(details.opening_hours.weekday_text);
//       console.log(details.website);
//     } catch (error) {
//       console.log('error', error);
//     }
//   }
// }

// --------- using the data to do what i want ------------

// create object as if api call worked and display taco shop info

function displayTacoShop() {
  fetch('example.json')
    .then(response => response.json())
    .then(data => {
      let randNum = Math.floor(Math.random() * 9) + 1;

      document.getElementById("shop-result").innerHTML = data.results[randNum].name;

      console.log("^^^^^^^ ", data.results[randNum].name)
  
      document.getElementById("taco-image").src = data.results[randNum].
    })
    .catch(error => console.error(error));
}

// do this for each element on the page

// figure out a way to do it for the gallery as well??

// replace player name with log in
function replacePlayerName() {
    user_name = localStorage.getItem('userName');
    if (!user_name) {
        user_name = 'Guest';
      }

    console.log("user_name:", user_name);
    const playerNameEls = document.querySelectorAll('.user-name');
    playerNameEls.forEach(function(playerNameEl) {
        playerNameEl.textContent = user_name;
      });
  };


window.onload = function() {
    replacePlayerName();
};