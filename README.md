# TreeBay

## What is TreeBay
At its core, treebay is a marketplace to buy and sell anything. It has full payment integration with Stripe Connect and Checkout. All maps and geocoding are generated by google maps via their google maps api. Currently it is being used as a platform to sell trees that will be planted somewhere for the buyer in an attempt to neutralize some of their CO2 footprint. 

Upon registration as a seller, the user gets vetted by stripe and can immediately put their own tree up for sale. They can edit and delete their own sales, go to their stripe dashboard and get payouts daily. 

Upon registration as a buyer, you can view all the trees for sale as a list or as a custom marker on a google map. They can buy any item via stripe checkout and then view their bought trees on their own map. They can also get directions to any of the trees from where they are. 

## Install 
0. clone both git repositories. The github for the backend can be found[here](https://github.com/lottenoorlander/treebay-server) 
1. run npm install
2. In the frontend change the google api key at the bottom of src/components/GoogleMapMain.js and src/components/GoogleMapBuyer.js to your own key. You can get your own key [here](https://developers.google.com/maps/documentation/javascript/get-api-key)
3. In the backend change the google api key in src/tree/router line 36

The Stripe api key is for test purposes only, feel free to replace it with your own key or use this one.  

## Where is it deployed?
=frontend deployed [here](https://competent-fermi-36d257.netlify.com) on netlify=

=backend deployed at [here](https://blooming-cliffs-31508.herokuapp.com) on heroku=

## Built with
### frontend built with:
-react-redux

### backend built with:
-node.js
-express.js
-sequelize


