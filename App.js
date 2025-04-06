import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className ="logo" src="data:image/jpeg;base64,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" />
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Cart</li>
                <li>Contact Us</li>
            </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                <h4>About Us</h4>
                <p>1234 Foodie Street, Yum City, 456789</p>
                <p>Email: contact@foodiez.com</p>
                <p>Phone: +91 9404375177</p>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Why Choose Us?</h4>
                <ul>
                    <li>✔ Fast Delivery</li>
                    <li>✔ Fresh Ingredients</li>
                    <li>✔ Great Discounts</li>
                    <li>✔ 24/7 Support</li>
                </ul>
            </div>
        </div>
    );
};

const restroList = [
    {
        "info": {
          "id": "234875",
          "name": "Adil Hotel",
          "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
          "locality": "Rautha Wada",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Tandoor"
          ],
          "avgRating": 4.3,
          "parentId": "27123",
          "avgRatingString": "4.3",
          "totalRatingsString": "1.2K+",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 11.5,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "11.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-07 00:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "151518",
          "name": "Bakery World",
          "cloudinaryImageId": "mt2aggiscfl3yviatwng",
          "locality": "Parasia Road",
          "areaName": "Parasia Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Bakery",
            "Ice Cream",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "40363",
          "avgRatingString": "4.3",
          "totalRatingsString": "261",
          "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 11.7,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "11.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "658210",
          "name": "The Fusion Lounge",
          "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
          "locality": "Triloki nagar",
          "areaName": "Railway Station",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.1,
          "veg": true,
          "parentId": "395453",
          "avgRatingString": "4.1",
          "totalRatingsString": "331",
          "sla": {
            "deliveryTime": 60,
            "lastMileTravel": 11.9,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "11.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹129",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "150591",
          "name": "Satkar Restaurant",
          "cloudinaryImageId": "rvxp5xbniat84r6efku2",
          "locality": "Sinchai Colony",
          "areaName": "Satkar Chowk",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Indian",
            "Salads",
            "Desserts"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "21553",
          "avgRatingString": "4.4",
          "totalRatingsString": "2.6K+",
          "sla": {
            "deliveryTime": 42,
            "lastMileTravel": 11.1,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "11.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 22:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹49"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "184424",
          "name": "Sab Ghar Tak Foods",
          "cloudinaryImageId": "ryzswg44bt7thqzkuaj4",
          "locality": "Sanchar Colony",
          "areaName": "Parsia Road",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "173932",
          "avgRatingString": "4.2",
          "totalRatingsString": "612",
          "sla": {
            "deliveryTime": 52,
            "lastMileTravel": 11.8,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "11.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "info": {
          "id": "1003414",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
          "locality": "Chhindwara",
          "areaName": "Parasia Road",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4.1,
          "parentId": "721",
          "avgRatingString": "4.1",
          "totalRatingsString": "54",
          "sla": {
            "deliveryTime": 55,
            "lastMileTravel": 13.8,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "13.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹189"
          },
          "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "151649",
          "name": "Hotel Sai Nath & Sai Restaurant",
          "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
          "locality": "railway station",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "101802",
          "avgRatingString": "4.3",
          "totalRatingsString": "985",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 10.3,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "10.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "151656",
          "name": "Dev International",
          "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
          "locality": "khajri road",
          "areaName": "Mohan Nagar",
          "costForTwo": "₹100 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Fast Food",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "71556",
          "avgRatingString": "4.3",
          "totalRatingsString": "471",
          "sla": {
            "deliveryTime": 64,
            "lastMileTravel": 11.7,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "11.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 22:30:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "618037",
          "name": "Jai Ganesh Bhojnalaya",
          "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
          "locality": "Railway Colony",
          "areaName": "Bus stand",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Indian",
            "Chinese"
          ],
          "avgRating": 4,
          "veg": true,
          "parentId": "368432",
          "avgRatingString": "4.0",
          "totalRatingsString": "358",
          "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 11,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "11.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "912754",
          "name": "Urban Cafe",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
          "locality": "SOUTH CIVIL LINE",
          "areaName": "Chhindwara City",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Snacks",
            "Pizzas",
            "Pastas",
            "Fast Food",
            "Burgers",
            "Cafe"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "1330",
          "avgRatingString": "4.4",
          "totalRatingsString": "8",
          "sla": {
            "deliveryTime": 57,
            "lastMileTravel": 11.4,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "11.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/urban-cafe-south-civil-line-chhindwara-city-rest912754",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "898041",
          "name": "Thikana",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
          "locality": "RANGLA PUNJAB PARASIA ROAD",
          "areaName": " ADARSH NAGAR CHHINDWARA",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Indian"
          ],
          "avgRating": 4.2,
          "parentId": "215738",
          "avgRatingString": "4.2",
          "totalRatingsString": "44",
          "sla": {
            "deliveryTime": 47,
            "lastMileTravel": 13.6,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "13.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-04-06 23:45:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-8fd049d7-e9f9-4a02-9d2c-0b4084f3f1f8"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/thikana-rangla-punjab-parasia-road-adarsh-nagar-chhindwara-rest898041",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
]


const RestaurantCard = (props) => {
    const { restroData } = props;
    const { name, cuisines, avgRating, sla} = restroData?.info;
    return (
        <div className="restro-card">
            <img
                className="restro-img"
                alt="my logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restroData.info.cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString} minutes</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restro-container">
                {
                    restroList.map((restaurants) => (
                        <RestaurantCard key={restaurants.info.id} restroData={restaurants} />
                    ))                    
                }
            </div>
        </div>
    );
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
