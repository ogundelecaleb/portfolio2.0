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
    title: "K-ride",
    url: "https://k-ride.netlify.app/",
    Image: "./assets/kride.jpg",
    description:
      "A mini uber clone, developed with MapBox, React and Firebase",
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
    description: "Web app that shows the weather condition in all cities across the globe",
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
