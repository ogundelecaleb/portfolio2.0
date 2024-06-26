const skills = [
  {
    title: "react",
    percent: "80%",
    Image: "./assets/css.png",
  },
  {
    title: "react",
    percent: "80%",
    Image: "./assets/html.png",
  },
  {
    title: "react",
    percent: "80%",
    Image: "./assets/bootstrap.png",
  },
  {
    title: "react",
    percent: "70%",
    Image: "./assets/firebase.png",
  },
  {
    title: "react",
    percent: "70%",
    Image: "./assets/react.png",
  },
  {
    title: "react",
    percent: "70%",
    Image: "./assets/github.png",
  },
  {
    title: "react",
    percent: "60%",
    Image: "./assets/sanity.png",
  },
  {
    title: "react",
    percent: "70%",
    Image: "./assets/vue.png",
  },
  {
    title: "react",
    percent: "60%",
    Image: "./assets/spline.png",
  },
  {
    title: "react",
    percent: "60%",
    Image: "./assets/javascript.png",
  },
  {
    title: "react",
    percent: "60%",
    Image: "./assets/nodejs.png",
  },
  {
    title: "react",
    percent: "80%",
    Image: "./assets/tailwind.png",
  },
  {
    title: "react",
    percent: "70%",
    Image: "./assets/nextjs.png",
  },
  {
    title: "react",
    percent: "80%",
    Image: "./assets/vscode.png",
  },
  {
    title: "react",
    percent: "50%",
    Image: "./assets/typescript.png",
  },
];

const projects = [
  {
    title: "Vantapp Mobile Application",
    url: "https://play.google.com/store/apps/details?id=com.vant.app",
    Image: "./assets/vantapp.png",
    description:
    "Vant is a complete personal financial manager and business control centre which encompasses Paying bills, Save & Invest Funds, Fast Transfer, Business Accounts, Pay debts. Vantapp mobile appication is available on both andriod and iOS. The application was built with React Native",
  },
  {
    title: "Konix Mobile Application",
    url: "https://play.google.com/store/apps/details?id=com.konix.app&pcampaignid=web_share&pli=1",
    Image: "./assets/konixapp.png",
    description:
    "An ecommerce mobile application that provides users access to a wide range of renowned international luxury brands, ensuring you can shop for your favorite items hassle-free in the Konix mobile application, the konix mobile appication is available on both andriod and iOS. The application was built with React Native",
  },
  {
    title: "LASUCOM Library Application",
    url: "http://library.devapi.live/",
    Image: "./assets/library.jpeg",
    description:
      "A web application that allow student to reserve book while they are away from the library so they can pick when on a stated date and time , the app also logs when a booked is picked from the library, the application provide users with list of available books in the library. The application was built with Nextjs and Tailwind CSS. ",
  },
  {
    title: "Luchi Resturant Application",
    url: "https://luchisrestaurants.com/menu",
    Image: "./assets/luchi.jpeg",
    description:
      "A web application where customers can order for food from luchi resturant and also pay while on the app. The appliocation was built with Reactjs and Tailwind CSS.",
  },
  {
    title: "Human Resources Management Application ",
    url: "https://hrm.lasucom.edu.ng/",
    Image: "./assets/hrm.jpeg",
    description:
      "A web application built to carry out Human Resouce Managent process and digitalize records of both teach and non teaching staffs in the University. The application was built with Reactjs and chakra Ui. ",
  },
  {
    title: "Embedable Payment Gateway Widget ",
    url: "https://paymentgateway.paylodeservices.com/",
    Image: "./assets/paymentWidget.jpeg",
    description:
      "An Embedable secured payment gateway that can be used to collect both card and bank transfer transactions. The widget was built with React.js and Tailwind CSS ",
  },
  {
    title: "Payment Gateway Admin Dashboard ",
    url: "https://pgadmin.paylodeservices.com/dashboard",
    Image: "./assets/gatewayAdmin.jpeg",
    description:
      "A real time dashboard built for administration of a payment gateway platform to over see payments collection flows and also other admin process. The dashboard also give user a pictorial visualization of data such as pie charts and histogram. The app was built with React.js and Tailwind CSS ",
  },
  {
    title: "Payment Gateway Merchant Dashboard ",
    url: "https://pgmerchants.paylodeservices.com/dashboard",
    Image: "./assets/gatewaymerchant.jpeg",
    description:
      "A real time dashboard built for merchants to over see payments collection flows and also set up integration process. The dashboard also give user a pictorial visualization of data such as pie charts and histogram. The app was built with React.js and Tailwind CSS ",
  },
  {
    title: "Eaglion Landing Website ",
    url: "http://eaglion.co/",
    Image: "./assets/eaglion.jpeg",
    description:
      "A well detailed website for technology service company, experts at website design, development, management, and IT consulting.",
  },
  {
    title: "Vantapp Landing Website ",
    url: "http://vantapp.com/",
    Image: "./assets/vant.jpeg",
    description:
      "A well detailed website for a fintech solution, the appication is available for both andriod and iOS. ",
  },
  {
    title: "Bill Vending Merchant Dashboard ",
    url: "https://billvendingclient.paylodeservices.com/dashboard",
    Image: "./assets/billMechant.jpeg",
    description:
      "A real time dashboard built for merchants to over see bill payments transaction flows. The dashboard also give user a pictorial visualization of data such as pie charts and histogram. The app was built with React.js and Tailwind CSS ",
  },
  {
    title: "Bill Vendind Admin Dashboard ",
    url: "https://billvendingadmin.paylodeservices.com/dashboard",
    Image: "./assets/billvendingadmin.png",
    description:
      "A real time dashboard built for administration and control of a bill vending platform. The dashboard is responsible for setting up bill vendors to reagistered merchants, fund merchants wallets, set bill sell and buy rates, shows transaction history of every merchants registered to the platform. The app was built with React.js and Tailwind CSS ",
  },
  {
    title: "Konixapp Landing Website ",
    url: "http://konixapp.com/",
    Image: "./assets/konix.jpeg",
    description:
      "A well detailed website for a ecommerce solution company that provides access to a wide range of renowned international luxury brands, ensuring you can shop for your favorite items hassle-free in the Konix mobile application, the konix mobile appication is available in both andriod and iOS. ",
  },
  {
    title: "Crosswirex Landing Website ",
    url: "http://crosswirex.com/",
    Image: "./assets/crosswirex.jpeg",
    description:
      "A well detailed website for a software solution company that specialize in delivering comprehensive tech solutions and robust security services to propel its clients business forward. ",
  },
  {
    title: "Paylode Landing Website ",
    url: "http://paylodeservices.com/",
    Image: "./assets/paylodeLanding.jpeg",
    description:
      "A well detailed website for a Fintech company that provides an integrated payment gateway services to its merchants. ",
  },
  {
    title: "Oncology Medical Foundation Website ",
    url: "http://oncologymedicalfoundation.org/",
    Image: "./assets/oncology.jpeg",
    description:
      "A well detailed website for non-governmental organization that promote cancer awareness and also care cancer warriors in Nigeria. ",
  },
  {
    title: "OA Initiative Website ",
    url: "https://oainitiative.org",
    Image: "./assets/oa.jpeg",
    description:
      "A well detailed website for non-governmental organization that promote sickle cell awareness and also care sickle cell warriors in Ekiti state Nigeria. ",
  },
  {
    title: "K-ride",
    url: "https://k-ride.netlify.app/",
    Image: "./assets/kride.jpg",
    description: "A mini uber clone, developed with MapBox, React and Firebase",
  },
  {
    title: "Movies-actors-Library",
    url: "https://movies-actors-library.netlify.app/",
    Image: "./assets/movie-actor.jpg",
    description:
      "A web app that shows list of movies, movie casts and a little background of actors, this project was created with ReactJS and Sanity.io as backend",
  },

  {
    title: "Kaileb Store",
    url: "https://kaileb-store.netlify.app/",
    Image: "./assets/applestore.jpg",
    description:
      "Kaileb store is an e-commerce website where customer buy electronic gadget like headsets, earpiece, speakers and lot more. Apple store was built with react  and Sanity as backend",
  },
  {
    title: "Ctalo Couture",
    url: "https://ctalo-couture.netlify.app/",
    Image: "./assets/ctalocouture.jpg",
    description:
      "Ctalo couture is a Nigerian-based custom tailor with strong commitment to provide quality clothings. The Landing page was created with react and other libraries",
  },
  {
    title: "Youtube Clone",
    url: "https://youtube-video-player-opal.vercel.app/",
    Image: "./assets/video.jpg",
    description:
      "A mini youtube clone in which a user can search for desired videos and watch, Videos are gotten from Google Youtube API",
  },
  {
    title: "Food Store",
    url: "https://kailebfoodstore.netlify.app",
    Image: "./assets/kailebfoodstore.jpg",
    description: "A mini food store",
  },
  {
    title: "Weather Tracker",
    url: "https://weather-note.netlify.app/",
    Image: "./assets/weather.jpg",
    description:
      "Web app that shows the weather condition in all cities across the globe",
  },
  {
    title: "X and O game",
    url: "http://127.0.0.1:5502/cover.html",
    Image: "./assets/my work 2.jpg",
    description: "X and O game",
  },
];

// const gallery2 = [
//   {
//     imgUrl: images.ctalolylac,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/tv/CY_HBGxhk8j/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.rhoda,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/ClbWvFWo0tL/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.zakijumpsuit,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/CVnG15tgUkt/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.jojokimono,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/CelCD_uD7jV/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.zakiyahfyb,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/ClZRhFmKAfU/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.ctaloskirt,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/Cag-6HQrgGm/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.yemisifyb,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/ClZkzBXrheaUVKngXaAWF7EF_SDWyID9P0ZBac0/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.zakiyahcrop,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/Cje0gRPKF3s/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.ctalokente,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/CMH3hXNjvOE/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.yemisigown,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/Cje0gRPKF3s/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.ctalofyb,
//     // eslint-disable-next-line no-useless-escape
//     link: 'https://www.instagram.com/p/Cldm1V4oOMW/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.sussie,
//     // eslint-disable-next-line no-useless-escape
//     link: '',
//   },
// ];

// const gallery = [
//   {
//     imgUrl: images.beauty,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CbHa2unAijR/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.yettyblack,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/B5z-AxBBImx/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.freedausshort,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CErmYl8Fsb6/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.jojo,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CV8Dy5KKAr9/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.ctalo,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CjSRjHIjr6I/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.freedauslong,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CEHku3olWqf/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.joyce,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/Cbj37sqgba2/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.zaki,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CYZRz0CKu-P/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.gbemi,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CEMYg--lDr6/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.yettygreen,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CH3A97YFRxV/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.ctalored,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CH3A97YFRxV/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.ctalowhitegown,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CH3A97YFRxV/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.ctaloadire,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CH3A97YFRxV/?igshid=YmMyMTA2M2Y=',
//   },
//   {
//     imgUrl: images.zakidinner,
//     // eslint-disable-next-line no-useless-escape
//     link: '\https://www.instagram.com/p/CH3A97YFRxV/?igshid=YmMyMTA2M2Y=',
//   },
// ];

export default { skills, projects };
