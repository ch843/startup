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
const data = {
    "html_attributions": [],
    "results": [
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "1109 S State St, Orem, UT 84097, United States",
            "geometry": {
                "location": {
                    "lat": 40.2768897,
                    "lng": -111.6858529
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.27817912989272,
                        "lng": -111.6845059701073
                    },
                    "southwest": {
                        "lat": 40.27547947010728,
                        "lng": -111.6872056298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Mi Ranchito Orem",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117349748251112395949\">A Google User</a>"
                    ],
                    "photo_reference": "AfLeUgP7NhI89hvItaxnVoEkromszGEkNMrpk01WA8xHigH4UQyOUA09_xCfNlZ47x3gIJCjm27yB6FD2gb67lwDwWlf4WRDEqaVv3IhhLBlVc_oA6LbAPnb8fC-20PP8m23Pc9v192ac1tARBabM3WTPONs-tB1HuDXl5KJyOeoxagB7AlG",
                    "width": 4032
                }
            ],
            "place_id": "ChIJY-quyo2aTYcRYFbHcI9ETc4",
            "plus_code": {
                "compound_code": "78G7+QM Orem, Utah",
                "global_code": "85GC78G7+QM"
            },
            "price_level": 2,
            "rating": 4.4,
            "reference": "ChIJY-quyo2aTYcRYFbHcI9ETc4",
            "types": [
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 2207
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "150 W 1230 N St, Provo, UT 84604, United States",
            "geometry": {
                "location": {
                    "lat": 40.2509399,
                    "lng": -111.6609056
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.25223597989272,
                        "lng": -111.6596152201073
                    },
                    "southwest": {
                        "lat": 40.24953632010728,
                        "lng": -111.6623148798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Don Joaquin Street Tacos",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 449,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111935370612294937190\">A Google User</a>"
                    ],
                    "photo_reference": "AfLeUgOe60sHn_ezchkHnVg2Nr9QXyEvUEnUcwaF2-QIn6o5ea4ZXdPysc_RpaxV-zO-djL4Kj94l_TjHmrLHM80p1mrZj45OdwxBjPSaOVDts4YLzRIGEWfDv4g0fU_gG17471JQN9jCEpGOhQtAJO9-4Jny8Zv6Axlb7vk0I0O2nzJwQNs",
                    "width": 800
                }
            ],
            "place_id": "ChIJH_HVdwqaTYcRjAvBwq5gSVI",
            "plus_code": {
                "compound_code": "782Q+9J Provo, Utah",
                "global_code": "85GC782Q+9J"
            },
            "price_level": 1,
            "rating": 4.5,
            "reference": "ChIJH_HVdwqaTYcRjAvBwq5gSVI",
            "types": [
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 2813
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "960 S University Ave, Provo, UT 84601, United States",
            "geometry": {
                "location": {
                    "lat": 40.2211024,
                    "lng": -111.6593524
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.22251962989272,
                        "lng": -111.6579999701073
                    },
                    "southwest": {
                        "lat": 40.21981997010727,
                        "lng": -111.6606996298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Rancherito's Mexican Food",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2252,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104033024511608171056\">John Bunderson</a>"
                    ],
                    "photo_reference": "AfLeUgMskvIwdJvIPjAT3VJ0KjMRzPAXw4-hwSWF6kMpHjUKH6K41MBdwts08DT3gh0UlFGFcbdcPNYHSIrnGGd9OdPsKk4p1N1TOwlJui53Qm9CyeOFmeSNfU7wfbnva0ejUkpjDyDw0Ms8o2uo6zZWoGscBSwxnHrmg7Lsd5hNQwKjupzq",
                    "width": 4000
                }
            ],
            "place_id": "ChIJW-mUCVyXTYcR-ts0pkHecw8",
            "plus_code": {
                "compound_code": "68CR+C7 Provo, Utah",
                "global_code": "85GC68CR+C7"
            },
            "price_level": 1,
            "rating": 3.8,
            "reference": "ChIJW-mUCVyXTYcR-ts0pkHecw8",
            "types": [
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 771
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "3368 N University Ave, Provo, UT 84604, United States",
            "geometry": {
                "location": {
                    "lat": 40.2783719,
                    "lng": -111.6571446
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.27954327989271,
                        "lng": -111.6558700701073
                    },
                    "southwest": {
                        "lat": 40.27684362010726,
                        "lng": -111.6585697298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "180 Tacos and Global Street Eats",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101245774420547282023\">Scott Howell</a>"
                    ],
                    "photo_reference": "AfLeUgMlzfnSgT2bAGMXDz2W_1_iZmjeSOEr-EZKhluXVBNE3w6mnk2nRvcgMy1YGKNCI1vZqDt42x-TzCim9fJWvgMYXjY9HPDgN38QoIbhdfwPyqorjaf6DZkj5PQqg0_-aJ0DuyQrzdZ-Y2PWcK-AQi4tuPKxYNDxEewlanE4y_s7Z7AB",
                    "width": 3024
                }
            ],
            "place_id": "ChIJDUgf9nyQTYcR21XNCS5tM8U",
            "plus_code": {
                "compound_code": "78HV+84 Provo, Utah",
                "global_code": "85GC78HV+84"
            },
            "price_level": 1,
            "rating": 4.4,
            "reference": "ChIJDUgf9nyQTYcR21XNCS5tM8U",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 643
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "242 E University Pkwy, Orem, UT 84058, United States",
            "geometry": {
                "location": {
                    "lat": 40.2725703,
                    "lng": -111.6889352
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.27392927989273,
                        "lng": -111.6876658701073
                    },
                    "southwest": {
                        "lat": 40.27122962010728,
                        "lng": -111.6903655298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Jurassic Tacos Orem",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1202,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108498863590472737787\">A Google User</a>"
                    ],
                    "photo_reference": "AfLeUgOBo8HdNxl-7bOeQ7f75e-rSeqHRGZn1XdqqBqRUFIQ_swyvpYzURnyUo1zYZHOl3r83Si_29IoAEsfI37fXRyIRjxbKZPhWhF7pFyHh2eIwtP8Gg39w8BHtP3XR7HM3PS_OH2H-1NmdMArTwoSe7h7qX_c7E0F3Tabd6fJlJOoWkne",
                    "width": 1242
                }
            ],
            "place_id": "ChIJl8Emc7KbTYcRNE4Me96vy9Q",
            "plus_code": {
                "compound_code": "78F6+2C Orem, Utah",
                "global_code": "85GC78F6+2C"
            },
            "rating": 4.6,
            "reference": "ChIJl8Emc7KbTYcRNE4Me96vy9Q",
            "types": [
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 773
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "238 W 100 S, Provo, UT 84601, United States",
            "geometry": {
                "location": {
                    "lat": 40.2326274,
                    "lng": -111.6627931
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.23395567989272,
                        "lng": -111.6614437201073
                    },
                    "southwest": {
                        "lat": 40.23125602010728,
                        "lng": -111.6641433798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Brasas Mexican Grill",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114627498691560616799\">Brassas Mexican Grill</a>"
                    ],
                    "photo_reference": "AfLeUgPDhH3kP-yoIMFCX1YB8LfuQy_oTz532V9iVsJonaoYSsaid-qum0FUNulyRQDz2pZdrGr0yuxErHw3ufWeYZQugiTJsVntsSowwzkMuGHVs-EGVm_LOA_YwSujtRjXyjcqvj7y0HbL_4AgdFJ4ERsrD_ApoAVCWt-tiV_CyK7l1lof",
                    "width": 2048
                }
            ],
            "place_id": "ChIJ__eMqlWXTYcROc_1SlPZESg",
            "plus_code": {
                "compound_code": "68MP+3V Provo, Utah",
                "global_code": "85GC68MP+3V"
            },
            "price_level": 1,
            "rating": 4.5,
            "reference": "ChIJ__eMqlWXTYcROc_1SlPZESg",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 936
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "132 E 1230 N St, Provo, UT 84604, United States",
            "geometry": {
                "location": {
                    "lat": 40.2509473,
                    "lng": -111.6604755
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.25221642989272,
                        "lng": -111.6590302701073
                    },
                    "southwest": {
                        "lat": 40.24951677010728,
                        "lng": -111.6617299298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Del Taco",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116960222296655326055\">A Google User</a>"
                    ],
                    "photo_reference": "AfLeUgMgnT-eVslov3PknJrysjYhn_qNG02lMl3ODJG4Lf6khJ6UlY0bIb0GKhBSDDkTjqKYczhAg9SFyeYBkuH0oB_LMLkNJGUPCTWT3G1WD6vxwm1g5T7hozQ5ovXcQ3KKgE6_lzoJZ5gsgNvhayus8xjnV7v8LrVcfNZkMiK3ixcS2QZ4",
                    "width": 4032
                }
            ],
            "place_id": "ChIJE7p4XqGQTYcRX0I2ZlWxHBE",
            "plus_code": {
                "compound_code": "782Q+CQ Provo, Utah",
                "global_code": "85GC782Q+CQ"
            },
            "price_level": 1,
            "rating": 4,
            "reference": "ChIJE7p4XqGQTYcRX0I2ZlWxHBE",
            "types": [
                "meal_takeaway",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 603
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "1284 N University Ave, Provo, UT 84604, United States",
            "geometry": {
                "location": {
                    "lat": 40.2514692,
                    "lng": -111.6583208
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.25279537989272,
                        "lng": -111.6569929701073
                    },
                    "southwest": {
                        "lat": 40.25009572010728,
                        "lng": -111.6596926298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Chipotle Mexican Grill",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 9248,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103148354206945460968\">Christine Divan</a>"
                    ],
                    "photo_reference": "AfLeUgNsqUrNqN8JKkVKdGwIbP_qgEjGybsiXi4_7Fpe3FLXY1rQdTogdVLwLEorgkg48msSCC_qWRufI9vHBqZY68e2FOePmjz38PiddJD0xiFp5AgB-0vu-Xor2BJmvVFg1i9iPOhKw3AAIOWMbVXaJ0wWdgmNBVgUz7NbcQ4s3igi51Ng",
                    "width": 6936
                }
            ],
            "place_id": "ChIJyY4R1CmRTYcR3BWz24pY43o",
            "plus_code": {
                "compound_code": "782R+HM Provo, Utah",
                "global_code": "85GC782R+HM"
            },
            "price_level": 1,
            "rating": 2.7,
            "reference": "ChIJyY4R1CmRTYcR3BWz24pY43o",
            "types": [
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 152
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "2250 N University Pkwy Ste 816, Provo, UT 84604, United States",
            "geometry": {
                "location": {
                    "lat": 40.2640922,
                    "lng": -111.6680754
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.26529277989273,
                        "lng": -111.6665603701073
                    },
                    "southwest": {
                        "lat": 40.26259312010728,
                        "lng": -111.6692600298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Cafe Rio Mexican Grill",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106583393411138368465\">Pace McCulloch</a>"
                    ],
                    "photo_reference": "AfLeUgM4X8ieX0YnyjrdqmNcHpigLtX9j3iWpKzcXLN0005ebsXjFX5CzilvXOn75pjaltu6bnxBYyq1MNli3RSzwSBciKxpEdsPntk0JAHilFcsSFdprjYVXWGVIm6KzQlLETxU33CHKAllt13QM51JFQTy-iLu-EmiczH4YzTGLEXbX8DG",
                    "width": 4032
                }
            ],
            "place_id": "ChIJ8Wz-mIKQTYcRPTMf76tarkU",
            "plus_code": {
                "compound_code": "787J+JQ Provo, Utah",
                "global_code": "85GC787J+JQ"
            },
            "price_level": 2,
            "rating": 3.8,
            "reference": "ChIJ8Wz-mIKQTYcRPTMf76tarkU",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 2240
        },
    ],
  }

function displayTacoShop() {
  // fill generator card
    let randNum = Math.floor(Math.random() * (data.results.length + 1));

    document.getElementById("shop-result").innerHTML = data.results[randNum].name;
 
    document.getElementById("result-address").innerHTML= data.results[randNum].formatted_address;

    if (randNum === 0) {
      document.getElementById("result-image").src =  `../media/tacoshop-${randNum+1}.png`
    }
    else {
      document.getElementById("result-image").src =  `../media/tacoshop-${randNum}.png`
    }

    fillNearbyShops();
}

function fillNearbyShops() {
  let newArray = Array.from(data.results)

  for (let i = 1; i < data.results.length; i++) {

    randNum= Math.floor(Math.random() * newArray.length);
    console.log("random num", randNum)
    console.log("og length", newArray.length + 1)

    document.getElementById(`shop-${i}`).innerHTML = newArray[randNum].name;
  
    document.getElementById(`address-${i}`).innerHTML= newArray[randNum].formatted_address;

    if (randNum === 0) {
      document.getElementById(`taco-image${i}`).src = `../media/tacoshop-${randNum+1}.png`
    }
    else {
      document.getElementById(`taco-image${i}`).src = `../media/tacoshop-${randNum}.png`
    }
    newArray.splice(randNum, 1);
    console.log("new length", newArray.length)
  }
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