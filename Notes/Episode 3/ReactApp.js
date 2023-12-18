import React from "react";
import ReactDOM from "react-dom/client";


/*

* Header
* - Logo
* - Nav Items

* Body
* - Search bar (input)
* - RestrauntContainer
*   - RestrauntCard
*           - Img
*           - Name of Restraunt, Star Rating, Cuisines, Delivery Time
*
* Footer
* - Copyright
* - Link
* - Address
* - Contact

*/


{/* <div id="parent">
      <div id="child">
            <h1>I'm a nested H1 tag :)</h1>
            <h2>I am sibling </h2>
      </div>
      <div id="child2">
            <h1>I'm a nested H1 tag :)</h1>
            <h2>I am sibling </h2>
      </div>
</div> */}

// const parent = React.createElement(
//       "div",
//       {
//             id: "parent"
//       },
//       [
//             React.createElement(
//                   "div",
//                   {
//                         id: "child1"
//                   },
//                   [React.createElement("h1", {}, "Learning React 🚀"), React.createElement("h2", {}, "I am sibling inside child 1 div :)")]
//             ),
//             React.createElement(
//                   "div",
//                   {
//                         id: "child2"
//                   },
//                   [React.createElement("h1", {}, "I'm a nested H1 tag inside child 2 div :)"), React.createElement("h2", {}, "I am sibling inside child 2 div  :)")]
//             )
//       ]

// );

// ? Alternate of this is JSX.

// console.log(parent);

//  const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!!");

//  console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent); // this will replace if anything is there inside the root element


// ============= Episode 3 (Laying the foundation) ================

// React Element
// React.createElement ==> ReactElement - JS Object ==> HTMLElement(render)


// const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");

// * JSX - JSX is not HTML in JS, it is HTML like syntax
// * It is transpiled before it reaches the JS Engine // PARCEL --> Babel
// * JSX ==> Babel transpile it to React.createElement ==> ReactElement - JS Object ==> HTMLElement(render)

// const Title = () => (<h1 id="heading" tabIndex={5}> Namaste React using JSX 🚀 </h1>);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(heading);

// console.log(jsxHeading);

// if (heading == jsxHeading) {
//       console.log("These both headings are same");
// }
// else {
//       console.log("Not same")
// }


// const value = "Heading 3";
// const TitleJSXFunctionalComponent = () => {
//       return (
//             <div className="title">
//                   <h1>Heading 1</h1>
//                   <h2>Heading 2</h2>
//                   <h3>{value}</h3>
//             </div>
//       );
// };

/*
      ! React Component
      * Class Based Component -> OLD
      * Functional Component -> NEW 
*/
// ! React Functional Component

// const HeadingComponent = () => {
//       return <h1 id="heading">Namaste React from Functional Component</h1>;
// }

// const number = 1000;

// * Component Composition
// const HeadingComponent2 = () => (
//       <div id="container">
//             {/* <h1 id="heading">{"Number is " + number} </h1>  */}
//             {/* <Title /> */}
//             {/* <Title> </Title> */}
//             {Title()}
//             <h1 id="heading">Namaste React from Functional Component 🚀</h1>
//       </div>
// ); // ! no need to write return statement.


// const Header = () => {
//       return (
//             <div className="header">
//                   <div className="logo">
//                         <img src="path_to_your_logo.png" alt="Logo" />
//                   </div>
//                   <div className="search">
//                         <input type="text" placeholder="Search..." />
//                         <button>Search</button>
//                   </div>
//                   <div className="user">
//                         <img src="path_to_your_user_icon.png" alt="User" />
//                   </div>
//             </div>
//       );
// };

// ! Episode 4 

const Header = () => {
      return (
            <div className="header">
                  <div className="logo-container">
                        <img className="logo" src="https://www.logodesign.net/logo/pizza-man-charactor-with-knife-and-fork-5382ld.png" />
                  </div>
                  <div className="nav-items">
                        <ul>
                              <li>Home</li>
                              <li>About Us</li>
                              <li>Contact Us</li>
                              <li>Cart</li>
                        </ul>
                  </div>
            </div>
      )
}

const styleCard = {
      backgroundColor: "red",
};

const RestaurantCard = (props) => {
      const { imgID, resName, cuisine, rating, time } = props;
      return (
            <div className="res-card">
                  <img
                        className="res-logo"
                        alt="res-logo"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imgID}
                  />
                  <h3>{resName}</h3>
                  <h4>{cuisine}</h4>
                  <h4>{rating}</h4>
                  <h4>{time}</h4>
            </div>
      )
}

const RestaurantCardObj = (props) => {
      const { resData } = props;

      const { 
            cloudinaryImageId,
            name,
            cuisines,
            avgRating,
            maxDeliveryTime,
            costForTwo
      
      } = resData?.data;

      return (
            <div className="res-card">
                  <img
                        className="res-logo"
                        alt="res-logo"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                  />
                  <h3>{name}</h3>
                  <h4>{cuisines.join(", ")}</h4>
                  <h4>Rating - {avgRating} ⭐</h4>
                  <h4>Delivery Time - {maxDeliveryTime} min</h4>
                  <h4>₹{costForTwo / 100} FOR TWO</h4>
            </div>
      )
}

// RestaurantList is JSON Data for displaying cards
const restaurantList = [
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "74453",
                  name: "Domino's Pizza",
                  uuid: "87727dbd-7f2b-4857-9763-359624165845",
                  city: "21",
                  area: "Athwa",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "bz9zkh2aqywjhpankb07",
                  cuisines: ["Pizzas"],
                  tags: [],
                  costForTwo: 40000,
                  costForTwoString: "₹400 FOR TWO",
                  deliveryTime: 45,
                  minDeliveryTime: 45,
                  maxDeliveryTime: 45,
                  slaString: "45 MINS",
                  lastMileTravel: 0,
                  slugs: {
                        restaurant: "dominos-pizza-majura-nondh-test_surat",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
                  locality: "Bhatar Road",
                  parentId: 2456,
                  unserviceable: false,
                  veg: true,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "2.1 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "74453",
                        deliveryTime: 45,
                        minDeliveryTime: 45,
                        maxDeliveryTime: 45,
                        lastMileTravel: 0,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.0",
                  totalRatings: 1000,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "410476",
                  name: "The Brooklyn Creamery - Healthy Ice Cream",
                  uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
                  city: "21",
                  area: "althan bhatar",
                  totalRatingsString: "100+ ratings",
                  cloudinaryImageId: "ldtibwymvzehvmdwl8la",
                  cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
                  tags: [],
                  costForTwo: 20000,
                  costForTwoString: "₹200 FOR TWO",
                  deliveryTime: 31,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 40,
                  slaString: "30-40 MINS",
                  lastMileTravel: 6.300000190734863,
                  slugs: {
                        restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
                  locality: "Adajan FC",
                  parentId: 236673,
                  unserviceable: true,
                  veg: true,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "6.3 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "410476",
                        deliveryTime: 31,
                        minDeliveryTime: 30,
                        maxDeliveryTime: 40,
                        lastMileTravel: 6.300000190734863,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.4",
                  totalRatings: 100,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "81094",
                  name: "Richie Rich Juices & Shakes",
                  uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
                  city: "21",
                  area: "Athwa",
                  totalRatingsString: "500+ ratings",
                  cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
                  cuisines: ["Ice Cream"],
                  tags: [],
                  costForTwo: 25000,
                  costForTwoString: "₹250 FOR TWO",
                  deliveryTime: 30,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 40,
                  slaString: "30-40 MINS",
                  lastMileTravel: 5.599999904632568,
                  slugs: {
                        restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
                  locality: "Parle Point",
                  parentId: 771,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "5.5 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "81094",
                        deliveryTime: 30,
                        minDeliveryTime: 30,
                        maxDeliveryTime: 40,
                        lastMileTravel: 5.599999904632568,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "3.9",
                  totalRatings: 500,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "311443",
                  name: "Siddhi Icecream & Thick Shake",
                  uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
                  city: "21",
                  area: "Nanpura",
                  totalRatingsString: "100+ ratings",
                  cloudinaryImageId: "spd3y5gok3vvwqulgmda",
                  cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
                  tags: [],
                  costForTwo: 20000,
                  costForTwoString: "₹200 FOR TWO",
                  deliveryTime: 30,
                  minDeliveryTime: 25,
                  maxDeliveryTime: 35,
                  slaString: "25-35 MINS",
                  lastMileTravel: 3,
                  slugs: {
                        restaurant: "siddhi-icecream-athwa-athwa",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
                  locality: "Athwa",
                  parentId: 387846,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "3 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "311443",
                        deliveryTime: 30,
                        minDeliveryTime: 25,
                        maxDeliveryTime: 35,
                        lastMileTravel: 3,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.5",
                  totalRatings: 100,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "307070",
                  name: "Pizza Pie",
                  uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
                  city: "21",
                  area: "Nanpura",
                  totalRatingsString: "50+ ratings",
                  cloudinaryImageId: "bvr70adr30ejyr5ua79k",
                  cuisines: ["Pizzas"],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: "₹300 FOR TWO",
                  deliveryTime: 37,
                  minDeliveryTime: 35,
                  maxDeliveryTime: 45,
                  slaString: "35-45 MINS",
                  lastMileTravel: 4,
                  slugs: {
                        restaurant: "pizza-pie-athwa-athwa",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
                  locality: "Nanpura",
                  parentId: 158854,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "4 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "307070",
                        deliveryTime: 37,
                        minDeliveryTime: 35,
                        maxDeliveryTime: 45,
                        lastMileTravel: 4,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.2",
                  totalRatings: 50,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "76858",
                  name: "Feeling Hungry",
                  uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
                  city: "21",
                  area: "Athwa",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
                  cuisines: ["Chinese", "North Indian", "Biryani"],
                  tags: [],
                  costForTwo: 2000,
                  costForTwoString: "₹20 FOR TWO",
                  deliveryTime: 35,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 40,
                  slaString: "30-40 MINS",
                  lastMileTravel: 3.700000047683716,
                  slugs: {
                        restaurant: "feeling-hungry-adajan-gam-adajan",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
                  locality: "Royal Residency, Adajan Gam",
                  parentId: 79237,
                  unserviceable: true,
                  veg: true,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "3.7 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "76858",
                        deliveryTime: 35,
                        minDeliveryTime: 30,
                        maxDeliveryTime: 40,
                        lastMileTravel: 3.700000047683716,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "3.2",
                  totalRatings: 1000,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "617279",
                  name: "Malaxmi Fast Food",
                  uuid: "4848cb1b-b1c4-4a6e-9a6d-f96b781357db",
                  city: "21",
                  area: "Adajan",
                  totalRatingsString: "20+ ratings",
                  cloudinaryImageId: "agkm7cflq72tkualhstb",
                  cuisines: ["Fast Food", "Pizzas", "Snacks", "Beverages"],
                  tags: [],
                  costForTwo: 20000,
                  costForTwoString: "₹200 FOR TWO",
                  deliveryTime: 44,
                  minDeliveryTime: 40,
                  maxDeliveryTime: 50,
                  slaString: "40-50 MINS",
                  lastMileTravel: 9.100000381469727,
                  slugs: {
                        restaurant: "mahalaxmi-fast-food-adajan-adajan-2",
                        city: "surat",
                  },
                  cityState: "21",
                  address: "shop no 15,palanpur food zone,opp.sai trith,pal gam suart",
                  locality: "Palanpur Food Zone",
                  parentId: 373635,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "9.1 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "617279",
                        deliveryTime: 44,
                        minDeliveryTime: 40,
                        maxDeliveryTime: 50,
                        lastMileTravel: 9.100000381469727,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.0",
                  totalRatings: 20,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "469264",
                  name: "Dessert House",
                  uuid: "7a320917-c577-49cb-875a-1e585a3adbc1",
                  city: "21",
                  area: "Piplod",
                  totalRatingsString: "Too Few Ratings",
                  cloudinaryImageId: "jegpumsjcmomksbr2sxr",
                  cuisines: ["Desserts", "Ice Cream"],
                  tags: [],
                  costForTwo: 15000,
                  costForTwoString: "₹150 FOR TWO",
                  deliveryTime: 27,
                  minDeliveryTime: 25,
                  maxDeliveryTime: 35,
                  slaString: "25-35 MINS",
                  lastMileTravel: 6.199999809265137,
                  slugs: {
                        restaurant: "dessert-house-piplod-piplod",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "SHOP NO 2, MARVELLA CORRIDOR OPP. C B PATEL HEALTH CLUB V.I.P ROAD, VESU",
                  locality: "Piplod",
                  parentId: 71430,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "6.1 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "469264",
                        deliveryTime: 27,
                        minDeliveryTime: 25,
                        maxDeliveryTime: 35,
                        lastMileTravel: 6.199999809265137,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.5",
                  totalRatings: 0,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "395204",
                  name: "McDonald's Gourmet Burger Collection",
                  uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
                  city: "21",
                  area: "Piplod",
                  totalRatingsString: "100+ ratings",
                  cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
                  cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                  tags: [],
                  costForTwo: 50000,
                  costForTwoString: "₹500 FOR TWO",
                  deliveryTime: 31,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 40,
                  slaString: "30-40 MINS",
                  lastMileTravel: 8.199999809265137,
                  slugs: {
                        restaurant:
                              "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
                  locality: "Valentine Cinema",
                  parentId: 10761,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "8.1 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "395204",
                        deliveryTime: 31,
                        minDeliveryTime: 30,
                        maxDeliveryTime: 40,
                        lastMileTravel: 8.199999809265137,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.2",
                  totalRatings: 100,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "193541",
                  name: "Behrouz Biryani",
                  uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
                  city: "21",
                  area: "Adajan Patiya",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "craozjakzx7sll2uracb",
                  cuisines: [
                        "Biryani",
                        "Mughlai",
                        "Lucknowi",
                        "Hyderabadi",
                        "Kebabs",
                        "North Indian",
                        "Persian",
                        "Desserts",
                  ],
                  tags: [],
                  costForTwo: 50000,
                  costForTwoString: "₹500 FOR TWO",
                  deliveryTime: 49,
                  minDeliveryTime: 45,
                  maxDeliveryTime: 55,
                  slaString: "45-55 MINS",
                  lastMileTravel: 6.400000095367432,
                  slugs: {
                        restaurant: "behrouz-biryani-adajan-adajan",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
                  locality: "Nr Navyug College, Rander Road",
                  parentId: 1803,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "6.4 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "193541",
                        deliveryTime: 49,
                        minDeliveryTime: 45,
                        maxDeliveryTime: 55,
                        lastMileTravel: 6.400000095367432,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.3",
                  totalRatings: 1000,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "475510",
                  name: "Momos House",
                  uuid: "34320d9a-ffa7-450c-ad61-d50485306626",
                  city: "21",
                  area: "Piplod",
                  totalRatingsString: "Too Few Ratings",
                  cloudinaryImageId: "vmold2zualdrrypxcvue",
                  cuisines: ["Fast Food"],
                  tags: [],
                  costForTwo: 20000,
                  costForTwoString: "₹200 FOR TWO",
                  deliveryTime: 31,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 40,
                  slaString: "30-40 MINS",
                  lastMileTravel: 6.199999809265137,
                  slugs: {
                        restaurant: "momo’s-house-piplod-piplod",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "SHOP NO - 2, MARVELLA CORRIDOR, OPP. C B PATEL HEALTH CLUB, V.I.P. ROAD, Surat,, Vesu , Surat Municipal Corporation, Surat Municipal Corporation, Gujarat - 395007",
                  locality: "Vesu",
                  parentId: 15884,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "6.1 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "475510",
                        deliveryTime: 31,
                        minDeliveryTime: 30,
                        maxDeliveryTime: 40,
                        lastMileTravel: 6.199999809265137,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.1",
                  totalRatings: 0,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "127596",
                  name: "Sabir Chicken",
                  uuid: "f0f49821-52ed-4435-9014-c845e964a3d8",
                  city: "21",
                  area: "Chowk Bazar",
                  totalRatingsString: "5000+ ratings",
                  cloudinaryImageId: "kilrdjqt8chduasii5ni",
                  cuisines: ["North Indian", "Biryani"],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: "₹300 FOR TWO",
                  deliveryTime: 30,
                  minDeliveryTime: 25,
                  maxDeliveryTime: 35,
                  slaString: "25-35 MINS",
                  lastMileTravel: 4.300000190734863,
                  slugs: {
                        restaurant: "sabir-chicken-athwa-athwa",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "Nehru Bridge, Behind Nagin Chand Hall, Chowk Bazar, Surat, Gujarat 395003",
                  locality: "Chowk Bazar",
                  parentId: 173978,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "4.3 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "127596",
                        deliveryTime: 30,
                        minDeliveryTime: 25,
                        maxDeliveryTime: 35,
                        lastMileTravel: 4.300000190734863,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.1",
                  totalRatings: 5000,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "64656",
                  name: "Mahesh Pav Bhaji",
                  uuid: "ccfda4b9-82b1-4f22-9567-eb98c448b267",
                  city: "21",
                  area: "Adajan",
                  totalRatingsString: "10000+ ratings",
                  cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
                  cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Pizzas"],
                  tags: [],
                  costForTwo: 25000,
                  costForTwoString: "₹250 FOR TWO",
                  deliveryTime: 36,
                  minDeliveryTime: 35,
                  maxDeliveryTime: 45,
                  slaString: "35-45 MINS",
                  lastMileTravel: 6.900000095367432,
                  slugs: {
                        restaurant: "mahesh-pav-bhaji-adajan-gam-adajan",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "Shop 12, Garden View Apartment, Honey Park Road, Adajan Gam, Surat",
                  locality: "Adajan Gam",
                  parentId: 6553,
                  unserviceable: true,
                  veg: true,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "30% off",
                        shortDescriptionList: [
                              {
                                    meta: "30% off | Use JUMBO",
                                    discountType: "Percentage",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
                                    discountType: "Percentage",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "30% OFF",
                        shortDescriptionList: [
                              {
                                    meta: "Use JUMBO",
                                    discountType: "Percentage",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
                                    discountType: "Percentage",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "6.9 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "64656",
                        deliveryTime: 36,
                        minDeliveryTime: 35,
                        maxDeliveryTime: 45,
                        lastMileTravel: 6.900000095367432,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.1",
                  totalRatings: 10000,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "255204",
                  name: "The Dango Cake Shop",
                  uuid: "dbfd3f3c-77a6-4979-96c4-ce9863e54cdc",
                  city: "21",
                  area: "Galaxy Circle",
                  totalRatingsString: "50+ ratings",
                  cloudinaryImageId: "mnvfpsoealkflze4e5qi",
                  cuisines: ["Bakery"],
                  tags: [],
                  costForTwo: 27000,
                  costForTwoString: "₹270 FOR TWO",
                  deliveryTime: 34,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 40,
                  slaString: "30-40 MINS",
                  lastMileTravel: 7.699999809265137,
                  slugs: {
                        restaurant: "twisted-cake-live-cake-adajan-adajan",
                        city: "surat",
                  },
                  cityState: "21",
                  address: "44 La Victoria, galaxy circle pal Surat",
                  locality: "Galaxy Circle",
                  parentId: 207513,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "7.6 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "255204",
                        deliveryTime: 34,
                        minDeliveryTime: 30,
                        maxDeliveryTime: 40,
                        lastMileTravel: 7.699999809265137,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.2",
                  totalRatings: 50,
                  new: false,
            },
            subtype: "basic",
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "664656",
                  name: "Cheezylicious Cafe",
                  uuid: "5880e561-10ed-4f96-990b-2251e2f09c82",
                  city: "21",
                  area: "Piplod",
                  totalRatingsString: "Too Few Ratings",
                  cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
                  cuisines: [
                        "Cafe",
                        "Fast Food",
                        "Chinese",
                        "Snacks",
                        "Italian",
                        "Mexican",
                  ],
                  tags: [],
                  costForTwo: 15000,
                  costForTwoString: "₹150 FOR TWO",
                  deliveryTime: 38,
                  minDeliveryTime: 35,
                  maxDeliveryTime: 45,
                  slaString: "35-45 MINS",
                  lastMileTravel: 7.599999904632568,
                  slugs: {
                        restaurant: "cheezylicious-cafe-piplod-piplod-2",
                        city: "surat",
                  },
                  cityState: "21",
                  address:
                        "Shop no G10 ground floor, aagam square B/S Dream heritage, Canal road, Vesu",
                  locality: "Dream heritage",
                  parentId: 59292,
                  unserviceable: true,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                        header: "FREE DELIVERY",
                        shortDescriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                        header: "",
                        shortDescriptionList: [
                              {
                                    meta: "Free Delivery",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        descriptionList: [
                              {
                                    meta: "FREE DELIVERY",
                                    discountType: "FREE_DELIVERY",
                                    operationType: "RESTAURANT",
                              },
                        ],
                        subHeader: "",
                        headerType: 0,
                        superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                        fees: [],
                        totalFees: 0,
                        message: "",
                        title: "",
                        amount: "",
                        icon: "",
                  },
                  availability: {
                        opened: true,
                        nextOpenMessage: "",
                        nextCloseMessage: "",
                  },
                  longDistanceEnabled: 0,
                  rainMode: "NONE",
                  thirdPartyAddress: false,
                  thirdPartyVendor: "",
                  adTrackingID: "",
                  badges: {
                        imageBased: [],
                        textBased: [],
                        textExtendedBadges: [],
                  },
                  lastMileTravelString: "7.5 kms",
                  hasSurge: false,
                  sla: {
                        restaurantId: "664656",
                        deliveryTime: 38,
                        minDeliveryTime: 35,
                        maxDeliveryTime: 45,
                        lastMileTravel: 7.599999904632568,
                        lastMileDistance: 0,
                        serviceability: "SERVICEABLE_WITH_BANNER",
                        rainMode: "NONE",
                        longDistance: "NOT_LONG_DISTANCE",
                        preferentialService: false,
                        iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "3.9",
                  totalRatings: 0,
                  new: true,
            },
            subtype: "basic",
      },
];

// const resObj = {
//       resName: "Meghana Foods",
//       cuisine: ["Biryani", "Andhra", "South Indian", "North Indian", "Asian"],
//       rating: "4.4 Stars",
//       time: "18 mins",
//       costForTwo: 40000,
//       imgID: "nw2xeql0jokm2rqnkzfs"
// }


const Body = () => {
      return (
            <div className="body">
                  <div className="Search">Search</div>
                  <div className="res-container">
                        {
                              restaurantList.map(restaurant => 
                                    <RestaurantCardObj key={restaurant.data.id} resData={restaurant}/>
                                    // We add key so that these components are uniquely identified and 
                                    // react does not re-render it.

                                    // restaurantList.map(restaurant, index => <RestaurantCardObj key={index} resData={restaurant}/> )
                                    // This is bad practice, we should not use index as key as per react official document.


                                    // not using keys (not acceptable) <<<<<<< index as a key <<<<<<<<<< unique id (best practice)
                              )
                        }

                        {/* Passing data objects */}
                        {
                        /* <RestaurantCardObj resData={restaurantList[0]} />
                        <RestaurantCardObj resData={restaurantList[1]} />
                        <RestaurantCardObj resData={restaurantList[2]} />
                        <RestaurantCardObj resData={restaurantList[3]} />
                        <RestaurantCardObj resData={restaurantList[4]} />
                        <RestaurantCardObj resData={restaurantList[5]} />
                        <RestaurantCardObj resData={restaurantList[6]} />
                        <RestaurantCardObj resData={restaurantList[7]} />
                        <RestaurantCardObj resData={restaurantList[8]} />
                        <RestaurantCardObj resData={restaurantList[9]} />
                        <RestaurantCardObj resData={restaurantList[10]} />
                        <RestaurantCardObj resData={restaurantList[11]} />
                        <RestaurantCardObj resData={restaurantList[12]} />
                        <RestaurantCardObj resData={restaurantList[13]} /> */}

                        {/* Passing data here */}
                        {/* <RestaurantCard resName="KFC" cuisine="Burgers, Biryani, American" rating="4.1 Stars" time="24 mins" imgID="56c9ab92bd79745fd152a30fa2525426" />
                        <RestaurantCard resName="Burger King" cuisine="Burgers, American" rating="4 Stars" time="26 mins" imgID="e33e1d3ba7d6b2bb0d45e1001b731fcf" />
                        <RestaurantCard resName="McDonald's" cuisine="Burgers, Beverages, Cafe" rating="4.2 Stars" time="25 mins" imgID="bb7ae131544c7d37e10fc5faf76f09d6" />
                        <RestaurantCard resName="Bakingo" cuisine="Bakery, Desserts" rating="4.2 Stars" time="33 mins" imgID="hwle5xrryznnyrdoxlchz" />
                        <RestaurantCard resName="Cheesecake Co" cuisine="Indian, Bakery" rating="4.4 Stars" time="30 mins" imgID="fc10df377b9a35bafcd0254d5a1206f2" />
                        <RestaurantCard resName="Big Bowl" cuisine="North Indian, Chinese" rating="3.8 Stars" time="28 mins" imgID="c99751d54e4e1847186c62b3309c1327" />
                        <RestaurantCard resName="Great Indian Khichdi" cuisine="Home Food, Indian, Chinese" rating="4.2 Stars" time="32 mins" imgID="6e44fd7f1e5cd9967edfe47c10247671" />
                        <RestaurantCard resName="Litti Heist" cuisine="North Indian, Bihari" rating="4.2 Stars" time="34 mins" imgID="61bd10d3c424a226d1e66be39bf35bdf" />
                        <RestaurantCard resName="Leon's Burger" cuisine="American, Fast Food" rating="4.3 Stars" time="19 mins" imgID="b2f224e9e2581dbf25c11778703a6380" />
                        <RestaurantCard resName="Asha Tiffins" cuisine="Indian, South Indian" rating="4.4 Stars" time="29 mins" imgID="n15vckntsiboiod3gpco" />
                        <RestaurantCard resName="Pizza Hut" cuisine="Pizzas" rating="3.9 Stars" time="27 mins" imgID="2b4f62d606d1b2bfba9ba9e5386fabb7" />
                        <RestaurantCard resName="Subway" cuisine="Salads, Snacks, Desserts, Beverages" rating="3.9 Stars" time="26 mins" imgID="1ace5fa65eff3e1223feb696c956b38b" /> */}
                  </div>
            </div>
      )
}
const AppLayout = () => {
      return (
            <div className="app">
                  <Header />
                  <Body />
            </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout />); // ! This is how we render components

