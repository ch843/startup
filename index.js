async function getTacoShop() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://nksou7u3c4.execute-api.us-east-2.amazonaws.com/default/taco_selector", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            return result
        })
        
        .catch(error => console.log('error', error));
}

async function getShopInfo() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      let tacoShop = await getTacoShop()
      fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?key=${}&query=${'Taco Nation'}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}