require('dotenv').config()

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
async function getShopInfo(result) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        // headers: {
        //   'Access-Control-Allow-Origin': 
        // }
      };
        fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${}&query=${result}`, requestOptions)
        .then(response => response.text())
        .then(result => result)
        .catch(error => console.log('error', error));
}