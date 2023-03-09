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

// async function getShopInfo(result) {
//   var requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };
//       fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.API_KEY}&query=${result}`, requestOptions)
//       .then(response => response.text())
//       .then(result => result)
//       .catch(error => console.log('error', error))

function getShopInfo(result) {
  function initMap() {
    const div = document.createElement('div');
    const service = new google.maps.places.PlacesService(div);

    const request = {
      query: result,
      fields: ['place_id']
    };

    try {
      const results = service.findPlaceFromQuery(request);
      const placeID = results[0].place_id;

      const detailsRequest = {
        placeId: placeID,
        fields: ['name', 'formatted_address', 'formatted_phone_number', 'opening_hours.weekday_text', 'website', 'photos']
      };

      const details = new Promise((resolve, reject) => {
        service.getDetails(detailsRequest, (result, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            resolve(result);
          } else {
            reject(new Error(`Place details request failed with status ${status}`));
          }
        });
      });

      console.log(details.name);
      console.log(details.formatted_address);
      console.log(details.formatted_phone_number);
      console.log(details.opening_hours.weekday_text);
      console.log(details.website);
    } catch (error) {
      console.log('error', error);
    }
  }
}

// create object as if api call worked and display taco shop info
const response = {
  "html_attributions": [],
  "next_page_token": "AfLeUgMW2_0as4Ry_RTcc3jQJD4DVdM8wuNsg97l35UOnBV8-LGxE8fpk5A3kd9heEvLAwSZhHlzsKZ3AjtWvM78igAYLM6qFAiCxQV_Nhz8dwmLejW06cS05EXcP-jQdZzHdlKx-dm_cWDiXTBl2P81qQrDLyPq1SYyXEXAbzsZH4KDMo8a4Uzpr7laNycA3L6sJAI0y1wWWqWBbZ3sie2doKMCmRu4BO0I2gOwH36kAdPrWSRvH_yj_4IU-pyTtXd6i7uJEVdc5nIXqpXKGSAYfL_Xs7m2d6cvnbzv4hDsBzGzXWFwSZhr7gacB1Q5eWh-QUyxFEKNpQfmrKWuGcBp1AvYunQKzPeA2PjPHZSrpw5kRrA_H3u7l-SlBWHey-jQvtKuJa-1wQ",
  "results": [
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "3449 E Lincoln Hwy, Thorndale, PA 19372, United States",
          "geometry": {
              "location": {
                  "lat": 39.9943535,
                  "lng": -75.75803209999999
              },
              "viewport": {
                  "northeast": {
                      "lat": 39.99568177989271,
                      "lng": -75.75666652010727
                  },
                  "southwest": {
                      "lat": 39.99298212010727,
                      "lng": -75.75936617989271
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey's Pizza",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 1080,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/111666719937929084443\">Nikki M</a>"
                  ],
                  "photo_reference": "AfLeUgNFclEP0drxCHLM7tcWzC7H1DXKFlvYk4UbJGTTf5lCq9UesfzZU3uV9ORW0TiYzAHyjPQLgmbDFYRTzr8IU1zx10EBldHIzQYO7wcsMXzLbo4n5d9rk_B5U4D4YOqG9LN4Hi1AVLNdrrub_viJ6P6jTAylaN4V4VWhKbCmLzkNi_jL",
                  "width": 1920
              }
          ],
          "place_id": "ChIJi1LFtdRYxokR_dFQns2FLUY",
          "plus_code": {
              "compound_code": "X6VR+QQ Thorndale, Pennsylvania",
              "global_code": "87F6X6VR+QQ"
          },
          "price_level": 1,
          "rating": 4.4,
          "reference": "ChIJi1LFtdRYxokR_dFQns2FLUY",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 366
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "3401 Dufferin St #305B, North York, ON M6A 2T9, Canada",
          "geometry": {
              "location": {
                  "lat": 43.7240571,
                  "lng": -79.45391889999999
              },
              "viewport": {
                  "northeast": {
                      "lat": 43.72546727989272,
                      "lng": -79.45264572010727
                  },
                  "southwest": {
                      "lat": 43.72276762010728,
                      "lng": -79.45534537989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "JOEY Yorkdale",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 998,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/115572847927576424584\">JOEY Yorkdale</a>"
                  ],
                  "photo_reference": "AfLeUgP5Sf8rIrfd-IeO9BDSPxPMAwvXmUvslGPbCIxziQI73qmwf0jKFcSQxllspVLEwqDgET6Ytl92CIiwUcnXETLczxDAFW1r6pl3Id1MZcuo1Rg_EAI0lw4R2BLq3-0Yzlxb-ey1bYDPvqOefnaR4fUt0cUkQMgllqBIAQRokEf4eTcS",
                  "width": 1500
              }
          ],
          "place_id": "ChIJQ21KuDMyK4gRCfxeNqtWQhw",
          "plus_code": {
              "compound_code": "PGFW+JC North York, Toronto, ON, Canada",
              "global_code": "87M2PGFW+JC"
          },
          "price_level": 2,
          "rating": 4.1,
          "reference": "ChIJQ21KuDMyK4gRCfxeNqtWQhw",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 2553
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "83 Niagara St, Tonawanda, NY 14150, United States",
          "geometry": {
              "location": {
                  "lat": 43.0198683,
                  "lng": -78.88138579999999
              },
              "viewport": {
                  "northeast": {
                      "lat": 43.02121012989272,
                      "lng": -78.88004607010727
                  },
                  "southwest": {
                      "lat": 43.01851047010728,
                      "lng": -78.88274572989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey's Place",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 2988,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/114891211795521634399\">A Google User</a>"
                  ],
                  "photo_reference": "AfLeUgNzH-OkxUQkS429evcEBVd6xLtNchu5l1W7ntZZPua2tnGl-YlfPGNHOqHYkJVCNapQxGFdVgwbN71-bpmI9-jqF-WCWX3HWTF_77xpBcAVbPMvMxk1OedHjhCfkGsm9V9-YQsL4aTdVSiAf-FKIqIuEr3XiBXX-SBEOpJxhgrCS_L_",
                  "width": 5312
              }
          ],
          "place_id": "ChIJmzLz1DBt04kRB8VDRc3W55g",
          "plus_code": {
              "compound_code": "2499+WF Tonawanda, New York",
              "global_code": "87M32499+WF"
          },
          "price_level": 1,
          "rating": 4.6,
          "reference": "ChIJmzLz1DBt04kRB8VDRc3W55g",
          "types": [
              "restaurant",
              "bar",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 515
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "5 Huntington Ave, Lynbrook, NY 11563, United States",
          "geometry": {
              "location": {
                  "lat": 40.6559075,
                  "lng": -73.6627809
              },
              "viewport": {
                  "northeast": {
                      "lat": 40.65721827989272,
                      "lng": -73.66152542010728
                  },
                  "southwest": {
                      "lat": 40.65451862010728,
                      "lng": -73.66422507989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey's Pizza of Lynbrook",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 9248,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/112322188789252491601\">John Vagianos</a>"
                  ],
                  "photo_reference": "AfLeUgPKvkVjl7yaIyi0QH6Q6roCfnGMm8RSMs5yoH9KBg86wlBiGdgvbq4oWqhOqXdXk26hSc4V-84FDueCtK5p_9fmq_vfmu78OyHlkiznejaujrpgHC04v-TXk2_R5X9UkwqcABD-4L4l6vKfliVarjBzCkqpycQsiJ9emHb46aXP1iTL",
                  "width": 6936
              }
          ],
          "place_id": "ChIJq81H3LBkwokR3AGa8gRzVTE",
          "plus_code": {
              "compound_code": "M84P+9V Lynbrook, New York",
              "global_code": "87G8M84P+9V"
          },
          "price_level": 1,
          "rating": 4.5,
          "reference": "ChIJq81H3LBkwokR3AGa8gRzVTE",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 199
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "6594 Thompson Rd, Syracuse, NY 13206, United States",
          "geometry": {
              "location": {
                  "lat": 43.0903105,
                  "lng": -76.09203479999999
              },
              "viewport": {
                  "northeast": {
                      "lat": 43.09161542989273,
                      "lng": -76.09075657010726
                  },
                  "southwest": {
                      "lat": 43.08891577010728,
                      "lng": -76.09345622989271
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey's Italian Restaurant",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 1000,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/115286943744701769699\">Joey&#39;s Restaurant</a>"
                  ],
                  "photo_reference": "AfLeUgMU3yJEgUS_1HO0tFanr-eoLo4tjQ_4Bdl79Z9z11n9QtGYH6v4gBS5NPvpWFXLEH27E2LuYzc2TPN0AsiHoZbH1A4hBhPCzLed6kWQGXZih0Mkg0Cf1r-9SbnRP9JPEX1ZPcWOU8mCOkYiQnXaCPloNI-4LscIk_NBbAFWadGXQynB",
                  "width": 1000
              }
          ],
          "place_id": "ChIJE4Vsnany2YkRB-HIGKHZB2A",
          "plus_code": {
              "compound_code": "3WR5+45 Syracuse, New York",
              "global_code": "87M53WR5+45"
          },
          "price_level": 2,
          "rating": 4.6,
          "reference": "ChIJE4Vsnany2YkRB-HIGKHZB2A",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 1428
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "50 Rideau St #106, Ottawa, ON K1N 9J7, Canada",
          "geometry": {
              "location": {
                  "lat": 45.426424,
                  "lng": -75.6906216
              },
              "viewport": {
                  "northeast": {
                      "lat": 45.42780027989273,
                      "lng": -75.68939687010727
                  },
                  "southwest": {
                      "lat": 45.42510062010728,
                      "lng": -75.69209652989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "JOEY Rideau",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 316,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/101118416127837139346\">A Google User</a>"
                  ],
                  "photo_reference": "AfLeUgM8OLrxGPMtllFUmYBLPuofHfY82443CQjICeIunm_3-Vy5Cp27oKKMzg55Q-VPgk_JEPQ3SPk8C6DmgKFhmH_1Vw-m7fOhXrO2RPdqNRQG4hZVpMC9lYHnCUFbqrNzDsVOj50HhOLZYsZTj_UdT96W0dn4eC-hXADdICLIwFh2RuSg",
                  "width": 829
              }
          ],
          "place_id": "ChIJaYUMCgEFzkwRU6Z6UkYlilw",
          "plus_code": {
              "compound_code": "C8G5+HQ Vanier, Ottawa, ON, Canada",
              "global_code": "87Q6C8G5+HQ"
          },
          "price_level": 2,
          "rating": 4.3,
          "reference": "ChIJaYUMCgEFzkwRU6Z6UkYlilw",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 2881
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "4028 Cox Rd, Glen Allen, VA 23060, United States",
          "geometry": {
              "location": {
                  "lat": 37.6478867,
                  "lng": -77.58464189999999
              },
              "viewport": {
                  "northeast": {
                      "lat": 37.64916397989272,
                      "lng": -77.58333227010729
                  },
                  "southwest": {
                      "lat": 37.64646432010728,
                      "lng": -77.58603192989273
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey's Hot Dogs",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 480,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/114103674675345113310\">Joey&#39;s Hot Dogs</a>"
                  ],
                  "photo_reference": "AfLeUgPyxtmlah4vF1DzuCg-MjdpaGUD0WF-SwxN9zlIlzBGjXIgqW5R_m2V23PXt_tB4aXDbjVtNPgQGnLcLsfQSoVV4V9LppFpg2QP1l_YaejVT24La74wsRWSCDPg5g8IQvDFWLsqzCSU8ssqnxL8DXGkqXFDgW7nDDVz9m1YEscI-_od",
                  "width": 720
              }
          ],
          "place_id": "ChIJfYL-UL1qsYkR_Ko1kyhk5kM",
          "plus_code": {
              "compound_code": "JCX8+54 Glen Allen, Virginia",
              "global_code": "8794JCX8+54"
          },
          "price_level": 1,
          "rating": 4.6,
          "reference": "ChIJfYL-UL1qsYkR_Ko1kyhk5kM",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 444
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "344 Chandler St, Worcester, MA 01602, United States",
          "geometry": {
              "location": {
                  "lat": 42.261538,
                  "lng": -71.8279797
              },
              "viewport": {
                  "northeast": {
                      "lat": 42.26298452989272,
                      "lng": -71.82665997010727
                  },
                  "southwest": {
                      "lat": 42.26028487010727,
                      "lng": -71.82935962989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
          "name": "Joey's Bar & Grill",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 3024,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/114152776136045281641\">John Bowes</a>"
                  ],
                  "photo_reference": "AfLeUgML2O8TH34qO1SfvJtwgXivv1F2r8VTShpZTDjW8b5-j5joRjmRl2rioqd5eCIg4eHlJhKUnB0uv06mcEO4yWIL4_EiZnORPsUlmPxDabgLWerSnTgX29tAkCS7Fn8rXvJFpD6GUSDlIQyVrtRzu7I7Pb6Nsw0QpF7k84vU_9dFTf2v",
                  "width": 4032
              }
          ],
          "place_id": "ChIJG8mgtAIE5IkRn3eCb66RrUk",
          "plus_code": {
              "compound_code": "756C+JV Worcester, Massachusetts",
              "global_code": "87JC756C+JV"
          },
          "price_level": 2,
          "rating": 4.6,
          "reference": "ChIJG8mgtAIE5IkRn3eCb66RrUk",
          "types": [
              "bar",
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 481
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "1 Dundas St W, Toronto, ON M5G 1Z3, Canada",
          "geometry": {
              "location": {
                  "lat": 43.6558668,
                  "lng": -79.38191449999999
              },
              "viewport": {
                  "northeast": {
                      "lat": 43.65732862989272,
                      "lng": -79.38056032010728
                  },
                  "southwest": {
                      "lat": 43.65462897010728,
                      "lng": -79.38325997989273
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "JOEY Eaton Centre",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 532,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/114408308732960538088\">JOEY Eaton Centre</a>"
                  ],
                  "photo_reference": "AfLeUgNMpc8bu_ebWMFv0yMCtxKbY3_F36IYWcLn0y30scKhUPRBujdxzu0F6VOQcdwMHcSLDqKlb0yNnmFOf4vxJ-X_J_tphpWTwYDa1_ukPMh5O0qRKWKfocjfNR4rGgNn8X0WtuZJ6G2TAppnYl4-jp5xNCwG9iatQQ8xzx4ev6rb1TRS",
                  "width": 800
              }
          ],
          "place_id": "ChIJtY7dIMs0K4gREEfQx6rkc-A",
          "plus_code": {
              "compound_code": "MJ49+86 Toronto, Ontario, Canada",
              "global_code": "87M2MJ49+86"
          },
          "price_level": 2,
          "rating": 4.3,
          "reference": "ChIJtY7dIMs0K4gREEfQx6rkc-A",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 3487
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "75 O'Neill Rd, North York, ON M3C 0H2, Canada",
          "geometry": {
              "location": {
                  "lat": 43.7340052,
                  "lng": -79.34459029999999
              },
              "viewport": {
                  "northeast": {
                      "lat": 43.73533392989272,
                      "lng": -79.34340742010727
                  },
                  "southwest": {
                      "lat": 43.73263427010728,
                      "lng": -79.3461070798927
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "JOEY",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 316,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/108744633918293760056\">Joey Don Mills</a>"
                  ],
                  "photo_reference": "AfLeUgNGEQJ5B3aTSjzM4zhiiNIYHBH2rjJPWcAnqBSL4ToZX5lwvrAf4Bq_R0XIRznS-bOVoi6_dstQbaaFQxQ8kDvCb5Mc6Oo3sXB3VG25phPCk7F6UigiKphHQUeQ4031X4F7O5hivDVVI1d9F1UlqIdPTmzIUxto23fCwYM2sEUDu9F1",
                  "width": 829
              }
          ],
          "place_id": "ChIJq6raZow0K4gRnTUSO5I9L-U",
          "plus_code": {
              "compound_code": "PMM4+J5 North York, Toronto, ON, Canada",
              "global_code": "87M2PMM4+J5"
          },
          "price_level": 2,
          "rating": 4.1,
          "reference": "ChIJq6raZow0K4gRnTUSO5I9L-U",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 2208
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "307 Mohawk St, Utica, NY 13501, United States",
          "geometry": {
              "location": {
                  "lat": 43.0995071,
                  "lng": -75.2167963
              },
              "viewport": {
                  "northeast": {
                      "lat": 43.10090802989272,
                      "lng": -75.21559752010728
                  },
                  "southwest": {
                      "lat": 43.09820837010728,
                      "lng": -75.21829717989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey@307 Restaurant",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 3024,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/116899872118956416750\">A Google User</a>"
                  ],
                  "photo_reference": "AfLeUgMJdj9rqLMLoL4Is7zeW5HO17dOEpZdA76xnSblsPzi2_ohYiuxpkuQTxV2A_tlDPHrq3hLW7Hp5zBspk47pW3CQZn5oCY8r6_-ykL8-tLjn66L2HHU78ZTDUUq_ymeFygKSkoYSy7GkqEPlBHAV1-1j24GNqY196R0m6B-5bL4NbL-",
                  "width": 4032
              }
          ],
          "place_id": "ChIJPwdcdhxH2YkRP-sa3-GB2IA",
          "plus_code": {
              "compound_code": "3QXM+R7 Utica, New York",
              "global_code": "87M63QXM+R7"
          },
          "rating": 4.8,
          "reference": "ChIJPwdcdhxH2YkRP-sa3-GB2IA",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 155
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "25 The West Mall Unit 500, Etobicoke, ON M9C 1B8, Canada",
          "geometry": {
              "location": {
                  "lat": 43.612874,
                  "lng": -79.5565393
              },
              "viewport": {
                  "northeast": {
                      "lat": 43.61435662989273,
                      "lng": -79.55522477010729
                  },
                  "southwest": {
                      "lat": 43.61165697010728,
                      "lng": -79.55792442989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "JOEY Sherway",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 3203,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/109219913864140748372\">JOEY Sherway</a>"
                  ],
                  "photo_reference": "AfLeUgNG4WIeHZzKlt9j_LlQtBIjMcIMpQhhMIWxKTqABZaXW3jnKgnnMP-XlF7vQy1D4FRROsgmWz2qJihqVsnLf3BWCdJEBg9oqopcejd1vMvE8pAg2GJsSdFsieTlDQRnTLYvSVDniEB_eOsPKRTjlgmLV8PILT0OQv_oI-AQCisOU41q",
                  "width": 4800
              }
          ],
          "place_id": "ChIJyWeY-gZIK4gRJKw6w9ZFWfc",
          "plus_code": {
              "compound_code": "JC7V+49 Etobicoke, Toronto, ON, Canada",
              "global_code": "87M2JC7V+49"
          },
          "price_level": 2,
          "rating": 4.3,
          "reference": "ChIJyWeY-gZIK4gRJKw6w9ZFWfc",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 3658
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "30133 Euclid Ave, Wickliffe, OH 44092, United States",
          "geometry": {
              "location": {
                  "lat": 41.61611509999999,
                  "lng": -81.4616611
              },
              "viewport": {
                  "northeast": {
                      "lat": 41.61741167989271,
                      "lng": -81.46011482010728
                  },
                  "southwest": {
                      "lat": 41.61471202010727,
                      "lng": -81.46281447989271
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey's Avenue Eatery",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 3024,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/103023462123256444504\">Sonia Bonic</a>"
                  ],
                  "photo_reference": "AfLeUgP5pmUuD2SRdWAGkw0tLQmRV5i-rbXLNvjwZzp8rLpJNEWk8yB1x3WWjX04WbY7VWDqNqzysfnhlSPz8N5qn-q1u8P2Om_XxTuhCVsygrzWnzzwst_s5tgZf832Fvv73cMLYjUuNpN40aeEqLX4RrRCV3Pn-bNoiwymKi_CyZeD_ZjC",
                  "width": 3024
              }
          ],
          "place_id": "ChIJJajj7GWqMYgRSyKagW0PDBI",
          "plus_code": {
              "compound_code": "JG8Q+C8 Wickliffe, Ohio",
              "global_code": "86HWJG8Q+C8"
          },
          "price_level": 1,
          "rating": 4.3,
          "reference": "ChIJJajj7GWqMYgRSyKagW0PDBI",
          "types": [
              "cafe",
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 753
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "2461 Grant Ave, Philadelphia, PA 19114, United States",
          "geometry": {
              "location": {
                  "lat": 40.0796292,
                  "lng": -75.02497699999999
              },
              "viewport": {
                  "northeast": {
                      "lat": 40.08096037989272,
                      "lng": -75.02366212010728
                  },
                  "southwest": {
                      "lat": 40.07826072010727,
                      "lng": -75.02636177989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey G's",
          "opening_hours": {
              "open_now": false
          },
          "place_id": "ChIJ60Ezt5mzxokRRZhhwN1GD88",
          "plus_code": {
              "compound_code": "3XHG+V2 Philadelphia, Pennsylvania",
              "global_code": "87G63XHG+V2"
          },
          "rating": 2.3,
          "reference": "ChIJ60Ezt5mzxokRRZhhwN1GD88",
          "types": [
              "bar",
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 3
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "1065 S Charles St, Baltimore, MD 21230, United States",
          "geometry": {
              "location": {
                  "lat": 39.2768094,
                  "lng": -76.6133093
              },
              "viewport": {
                  "northeast": {
                      "lat": 39.27819972989272,
                      "lng": -76.61220162010727
                  },
                  "southwest": {
                      "lat": 39.27550007010727,
                      "lng": -76.61490127989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Pizza di Joey",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 3024,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/101597532815796395308\">A Google User</a>"
                  ],
                  "photo_reference": "AfLeUgO4DjDbrI6Sy4shg9VO9DY4zcIg_1nNHFjZWDJHWGIjsk1lq4dV2PE66wy6bd0U8HJAWTmQ-rO8IgNXyGX7s2yKCpD3DgWwVLNV5lX--bqx1lpiFEs1rUBzLDyWTBMCGAIHEu7KjRZsIHMdX0IQ-zbIYje5Qjj1t6qyyfpuubUJH4wo",
                  "width": 4032
              }
          ],
          "place_id": "ChIJWVBv0hcDyIkR9GraHjIOGHs",
          "plus_code": {
              "compound_code": "79GP+PM Baltimore, Maryland",
              "global_code": "87F579GP+PM"
          },
          "price_level": 1,
          "rating": 4.2,
          "reference": "ChIJWVBv0hcDyIkR9GraHjIOGHs",
          "types": [
              "meal_delivery",
              "meal_takeaway",
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 156
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "561 E Main St, Rochester, NY 14604, United States",
          "geometry": {
              "location": {
                  "lat": 43.1589559,
                  "lng": -77.5973698
              },
              "viewport": {
                  "northeast": {
                      "lat": 43.16025217989272,
                      "lng": -77.59605237010727
                  },
                  "southwest": {
                      "lat": 43.15755252010728,
                      "lng": -77.59875202989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
          "name": "Joey's",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 640,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/104045724049005518069\">Joey&#39;s</a>"
                  ],
                  "photo_reference": "AfLeUgPv4qQWeroY3UWQTbAH8T6Ck1Nq3_P6gdE1zGVD2yYtB-E5zDT3lLztcoMsf5Kc264O94RW5aydlSy39yzJp6todThYOHduzeRxiKT88ylknL73gutcQ9iRpSz8ikrC_s6KiGmfzGGoSIz3k5NjMh-1eSD8_Bs2KqsG5ylyhXpCfFBW",
                  "width": 640
              }
          ],
          "place_id": "ChIJW__GRa-11okRKkd8eRpv-xk",
          "plus_code": {
              "compound_code": "5C53+J3 Rochester, New York",
              "global_code": "87M45C53+J3"
          },
          "price_level": 1,
          "rating": 4.8,
          "reference": "ChIJW__GRa-11okRKkd8eRpv-xk",
          "types": [
              "bar",
              "point_of_interest",
              "establishment"
          ],
          "user_ratings_total": 177
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "1401 E Newport Pike, Wilmington, DE 19804, United States",
          "geometry": {
              "location": {
                  "lat": 39.7177526,
                  "lng": -75.6017653
              },
              "viewport": {
                  "northeast": {
                      "lat": 39.71902712989272,
                      "lng": -75.60033782010728
                  },
                  "southwest": {
                      "lat": 39.71632747010727,
                      "lng": -75.60303747989273
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey T’s Sausages & More",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 1400,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/101044058484129809964\">Mike Bierman</a>"
                  ],
                  "photo_reference": "AfLeUgPMa-NE2wzjlxwzWePDXsDiTp4RqI9bVHzefXhslKTtBI8YnZ-0JfEKCorN7zvd4Gk5b9gnsVzRN6GJJ2axSaXu7B97Kq8mCyjv_-wuK6Njw4tHHB1Jd4MvRBQILd9EbroYar5CShICw1WScALT48sNE4DwXLTia7G92li3jx9t70Hl",
                  "width": 1079
              }
          ],
          "place_id": "ChIJ0Xr6Ag4Dx4kRKHE9nZzG2MI",
          "plus_code": {
              "compound_code": "P99X+47 Wilmington, Delaware",
              "global_code": "87F6P99X+47"
          },
          "rating": 4.8,
          "reference": "ChIJ0Xr6Ag4Dx4kRKHE9nZzG2MI",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 47
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "7900 Ritchie Hwy C 121, Glen Burnie, MD 21061, United States",
          "geometry": {
              "location": {
                  "lat": 39.13955139999999,
                  "lng": -76.60595379999999
              },
              "viewport": {
                  "northeast": {
                      "lat": 39.14065917989272,
                      "lng": -76.60441292010728
                  },
                  "southwest": {
                      "lat": 39.13795952010728,
                      "lng": -76.60711257989273
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
          "icon_background_color": "#4B96F3",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shopping_pinlet",
          "name": "Joey's",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 609,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/113811030285943886233\">A Google User</a>"
                  ],
                  "photo_reference": "AfLeUgNkqzsWSVkV339z-ur4M8XfXL8Ut0cp5mUWGAiIBejbqYoFzIvfWsAHwcx_hU0Fd-RhcTHkUOOwQsOMHvYWjBSvAb28LFp5AXsFyrCafWGb7L1_CtevLxQ17y2X7ppHNlTaDm4uHP-NQmQx_a0ruRsNFrLSi-oirHWhdhD1HDlBzQV5",
                  "width": 1080
              }
          ],
          "place_id": "ChIJ7Rhq8I38t4kRjZ0HzkcHNo8",
          "plus_code": {
              "compound_code": "49QV+RJ Glen Burnie, Maryland",
              "global_code": "87F549QV+RJ"
          },
          "price_level": 1,
          "rating": 4.3,
          "reference": "ChIJ7Rhq8I38t4kRjZ0HzkcHNo8",
          "types": [
              "clothing_store",
              "point_of_interest",
              "store",
              "establishment"
          ],
          "user_ratings_total": 6
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "1200 Callowhill St, Philadelphia, PA 19107, United States",
          "geometry": {
              "location": {
                  "lat": 39.9588668,
                  "lng": -75.158835
              },
              "viewport": {
                  "northeast": {
                      "lat": 39.96036832989272,
                      "lng": -75.15743027010728
                  },
                  "southwest": {
                      "lat": 39.95766867010727,
                      "lng": -75.16012992989272
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey's Table",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 3838,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/103548847482180785700\">A Google User</a>"
                  ],
                  "photo_reference": "AfLeUgNyjPw7Tulu53Jl7bt0P9Z1bxFoEa9e3S3uc8z0QMqAM9k2zA0yUQ1ZaXT4WnoLtBOrg57spxVn87KomK1FzZYgDnYIlGyddfVgea5VfOsqAwG6B65kPaH8OqbDnsxhLuyOpMOcXQeSoA-OFIyudT3WLKrsVDMdfW9S7PVhRmrB_inI",
                  "width": 5924
              }
          ],
          "place_id": "ChIJt5hLGuXHxokRvVrRonRWwwE",
          "plus_code": {
              "compound_code": "XR5R+GF Philadelphia, Pennsylvania",
              "global_code": "87F6XR5R+GF"
          },
          "price_level": 1,
          "rating": 4.8,
          "reference": "ChIJt5hLGuXHxokRvVrRonRWwwE",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 27
      },
      {
          "business_status": "OPERATIONAL",
          "formatted_address": "1104 Carlisle Rd Suite 155, Camp Hill, PA 17011, United States",
          "geometry": {
              "location": {
                  "lat": 40.2311889,
                  "lng": -76.8918226
              },
              "viewport": {
                  "northeast": {
                      "lat": 40.23254147989272,
                      "lng": -76.89057807010728
                  },
                  "southwest": {
                      "lat": 40.22984182010727,
                      "lng": -76.89327772989273
                  }
              }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color": "#FF9E67",
          "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name": "Joey's Chicken Shack",
          "opening_hours": {
              "open_now": false
          },
          "photos": [
              {
                  "height": 3024,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/108922795364426458878\">Michael Heindel</a>"
                  ],
                  "photo_reference": "AfLeUgMUP8ojjYsWTjVemDQ46VWseWbZWG9WMjEPx_bCW_CbBTqA-Tx59DBXI0lAmXavmfvYV_vw3f9Tx3vgKsawdo_enLt5IaqkbsLzW3nI3q1sX2EEpuHkUPoBdFjkoYWq9HW5M-vnO2s-elQe0x7T4u9UYv_s009Wm08qHU2hh_s8osid",
                  "width": 4032
              }
          ],
          "place_id": "ChIJMf4dgsDByIkReLNl-SlboLU",
          "plus_code": {
              "compound_code": "64J5+F7 Camp Hill, Pennsylvania",
              "global_code": "87G564J5+F7"
          },
          "price_level": 1,
          "rating": 4.5,
          "reference": "ChIJMf4dgsDByIkReLNl-SlboLU",
          "types": [
              "restaurant",
              "point_of_interest",
              "food",
              "establishment"
          ],
          "user_ratings_total": 388
      }
  ],
  "status": "OK"
}

function displayTacoShop() {
    getTacoShop()
}

document.getElementById("shop-result").innerHTML = response.results[0].name;

 console.log("^^^^^^^ ", response.results[0].name)

document.getElementById("taco-image").src = response.results[0].photos[0].html_attributions[0];

document.getElementById("taco-image").src = response.results[0].photos[0].html_attributions[0];

// do this for each element on the page

// figure out a way to do it for the gallery as well??