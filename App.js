import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Alert,
  Image,
  Share,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WebView } from "react-native-webview";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Subheading,
  Caption,
  Divider,
} from "react-native-paper";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Searchbar,
  Headline,
  Menu,
  Banner,
  List,
  TextInput,
} from "react-native-paper";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
import { render } from "react-dom";
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7W08BL8hVCkCakU6M_8dS1FsK6JxSHkg",
  authDomain: "scroll-feed-from.firebaseapp.com",
  projectId: "scroll-feed-from",
  storageBucket: "scroll-feed-from.appspot.com",
  messagingSenderId: "846309959363",
  appId: "1:846309959363:web:43cd0d2331ede2321fa476",
  measurementId: "G-80H0FYT1E8",
};

initializeApp(firebaseConfig);

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0047AB",
    accent: "#0047AB",
  },
};

function HomeScreen({ navigation, route }) {
  const [mydata, setMyadata] = React.useState([]);

  const storeData = async (value) => {
    try {
      const currentArray = await AsyncStorage.getItem("@storage_Key");
      addedFavs = currentArray.push(value);
      const jsonValue = JSON.stringify(addedFavs);

      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      setMyadata(JSON.parse(jsonValue));
    } catch (e) {
      // error reading value
    }
  };

  //work in progress
  storeData(["person1"]);
  storeData("e");
  getData();

  const [data, setData] = useState([
    {
      id: "1",
      accountname: "thisisbillgates",
      name: "Bill Gates",
      text: "William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, while also being the largest individual shareholder until May 2014.",
      tags: ["bill", "gates", "ceo", "bill gates"],
      category: "Millionaires & Business",
      picuri:
        "https://img.morgenpost.de/img/panorama/crop232210987/5087655479-w1200-cv16_9-q85/Microsoft-Gruender-Familienvater-und-Milliardaer-Bill-Gates.jpg",
    },
    {
      id: "2",
      accountname: "barackobama",
      name: "Barack Obama",
      text: "Barack Hussein Obama II is an American politician, lawyer, and author who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States.",
      tags: ["barck", "obama"],
      category: "Politicians",
      picuri:
        "https://images.greelane.com/proxy?url=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FjxxLoYLV1bxkImEGnyNVaz8_t_M%3D%2F1024x683%2Ffilters%3Afill%28auto%2C1%29%2FBarackObama-799035cd446c443fb392110c01768ed0.jpg&width=750",
    },
    {
      id: "3",
      accountname: "kyliejenner",
      name: "Kylie Jenner",
      text: "Kylie Kristen Jenner (born August 10, 1997)[3] is an American media personality, socialite, model, and businesswoman. She starred in the E! reality television series Keeping Up with the Kardashians from 2007 to 2021 and is the founder and owner of cosmetic company Kylie Cosmetics. She is currently the most followed woman on Instagram.",
      tags: ["kylie", "jenner"],
      category: "Influencers & Celebreties",
      picuri:
        "https://aisvip-a.akamaihd.net/masters/1413875/1856x1044/kylie-jenner-ist-sauer-auf-kim-kardashian-wegen-diesem-throwback-schnappschuss.jpg",
    },
    {
      id: "4",
      accountname: "virat.kohli",
      name: "Virat Kohli",
      text: "Virat Kohli is an Indian cricketer. He was born in Delhi, India on November 5, 1988. Virat is the first player in ICC cricket history to win all 3 ICC awards in a single year- ICC ODI player of the year, ICC Test player of the year and ICC Player of the year award in 2018. He is rated as one of the best batsmen in the world.",
      tags: ["kirat", "kohli"],
      category: "Sports",
      picuri:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/viratkohliindveng3rdt20i_1200x768.png?jM8nAK_N5kdSetGlIeH86MZJbWOK4JQJ&size=770:433",
    },

    {
      id: "5",
      accountname: "pewdiepie",
      name: "PewDiePie",
      text: "Felix Arvid Ulf Kjellberg born 24 October 1989, known online as PewDiePie is a Swedish YouTuber known primarily for his Let's Play videos",
      tags: ["pewdiepie", "pew", "felix", "arvid"],
      category: "Influencers & Celebreties",
      picuri:
        "https://www.earlygame.com/uploads/images/_headerImage/pewdiepie-net-worth.jpg",
    },
    {
      id: "6",
      accountname: "leomessi",
      name: "Lionel Messi",
      text: "Lionel Messi is an Argentinian footballer widely regarded as one of the greatest players of the modern generation. He plays for FC Barcelona and the Argentina national team. He has won FIFA world player of the year four times (a record already). He has often been described as Diego Maradona’s successor because of his prolific goal scoring record and ability to dribble past opponents.",
      tags: [
        "leo",
        "messi",
        "lionel messi",
        "soccer",
        "football",
        "FIFA",
        "argentinian",
      ],
      category: ["Sports", "soccer players", "argentinian"],
      picuri:
        "https://bilder.t-online.de/b/89/93/18/60/id_89931860/610/tid_da/lionel-messi-der-vertrag-des-argentiniers-beim-fc-barcelona-laeuft-im-sommer-aus-.jpg",
    },

    {
      id: "7",
      accountname: "kimkardashian",
      name: "Kim Kardashian",
      text: "Kimberly Noel Kardashian West (born October 21, 1980) is an American media personality, socialite, model, and businesswoman.",
      tags: ["kim", "kardashian", "kimkardashian", "kim kardashian"],
      category: "Influencers & Celebreties",
      picuri:
        "https://i1.wp.com/wikifamouspeople.com/wp-content/uploads/2018/06/kim-kardashian.jpg?fit=768%2C384&ssl=1",
    },

    {
      id: "8",
      accountname: "snoopdogg",
      name: "Snoopdogg",
      text: "Calvin Cordozar Broadus Jr. , known professionally as Snoop Dogg (previously Snoop Doggy Dogg and briefly Snoop Lion), is an American rapper, songwriter, media personality, actor, and entrepreneur.",
      tags: ["snoopdogg", "snoop", "dogg", "weed"],
      category: "Musicians",
      picuri:
        "https://www.fkpscorpio.com/ccds_cache_img/4e/4e506084c072505f305aa56c6353f441.2000x2000x0.jpg",
    },
    {
      id: "9",
      accountname: "therock",
      name: "Dwayne Johnson",
      text: "Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American actor, businessman, and former professional wrestler.",
      tags: ["actor", "therock", "Dwayne Johnson", "The Rock Johnson"],
      category: ["Influencers & Celebreties"],
      picuri:
        "https://www.nwzonline.de/rf/image_online/NWZ_CMS/NWZ/2014-2016/Produktion/2016/08/26/KULTUR/ONLINE/Bilder/cropped/32923200E8CEB67C-klSF--600x337%40NWZ-Online.jpg",
    },
    {
      id: "10",
      accountname: "neildegrassetyson",
      name: "Neil deGrasse Tyson",
      text: "Neil deGrasse Tyson is an American astrophysicist, planetary scientist, author, and science communicator.",
      tags: ["neil", "degrasse", "tyson", " science", "neildegrassetyson"],
      category: "Millionaires & Business",
      picuri:
        "https://celebs-networth.com/img/fun-games/41/50-neil-degrasse-tyson-quotes-that-are-out-this-universe.jpg",
    },

    {
      id: "11",
      accountname: "travisscott",
      name: "Travis Scott",
      text: "Jacques Bermon Webster II, known professionally as Travis Scott, is an American rapper and record producer.",
      tags: ["travis", "scott", "travisscott", " muisc", "musician"],
      category: "Musicians",
      picuri: "https://live.staticflickr.com/4295/35789467592_741ff5b0f6_c.jpg",
    },
    {
      id: "12",
      accountname: "cristiano",
      name: "Cristiano Ronaldo",
      text: "Cristiano Ronaldo dos Santos Aveiro, (born 5 February 1985) is a Portuguese professional footballer who is often considered the best player in the world and widely regarded as one of the greatest players of all time.",
      tags: ["football", "soccer", "ronaldo", "cristiano", "cristiano ronaldo"],
      category: ["Sports", "Soccer Players"],
      picuri:
        "https://cdn.corrieredellosport.it/img/990/495/2021/09/25/200609735-d201a59e-044a-4da6-881e-55417c5de481.jpg",
    },
    {
      id: "13",
      accountname: "justinbieber",
      name: "Justin Bieber",
      text: "Justin Drew Bieber is a Canadian singer. He was discovered by American record executive Scooter Braun and signed with RBMG Records in 2008, gaining recognition with the release of his debut seven-track EP My World (2009) and soon establishing himself as a teen idol.",
      tags: ["justinbieber", "justin", "bieber", " music", "musician"],
      category: "Musicians",
      picuri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2pzNpNikjQ1LHBR160_6OoYkK3O7jK2p3w&usqp=CAU",
    },
    {
      id: "14",
      accountname: "arianagrande",
      name: "Ariana Grande",
      text: "Ariana Grande-Butera, born June 26, 1993) is an American singer, songwriter and actress. Her music, much of which is based on personal experiences, has been the subject of widespread media attention, while her four-octave vocal range has received critical acclaim.",
      tags: ["music", "musician", "arianagrande", "ariana", "grande"],
      category: "Musicians",
      picuri:
        "https://www.maedchen.de/sites/default/files/styles/image870w/public/2020-10/ariana-grande.webp?h=79906091",
    },
    {
      id: "15",
      accountname: "mikebloomberg",
      name: "Mike Bloomberg",
      text: "Michael Mike Rubens Bloomberg (born February 14, 1942) is an American businessman, politician, philanthropist, and author..",
      tags: ["mikebloomberg", "mike", "bloomberg", " ceo", "millionaire"],
      category: "Millionaires & Business",
      picuri:
        "https://images.axios.com/8r1BRRRvZN81fbWZQAk263Y82KI=/0x70:3000x1757/1920x1080/2019/11/08/1573210195387.jpg",
    },
    {
      id: "16",
      accountname: "gigihadid",
      name: "Gigi Hadid",
      text: "Jelena Noura Hadid (born April 23, 1995) is an American model. In November 2014, she made her debut in the Top 50 Models ranking at Models.com.",
      tags: ["gigihadid", "gigi", "hadid", " model", "millionaire"],
      category: "Influencers & Celebreties",
      picuri:
        "https://cdn.prod.www.spiegel.de/images/c70b4268-cf3f-4ca0-af12-8b99f752541f_w1600_r1.4443909484833894_fpx47.74_fpy44.97.jpg",
    },
    {
      id: "17",
      accountname: "bundeskanzlerinmerkel",
      name: "Angela Merkel",
      text: "Angela Dorothea Merkel is a German politician and scientist who served as the chancellor of Germany from 2005 to 2021.",
      tags: [
        "bundeskanzlerinmerkel",
        "merkel",
        "angela",
        " politician",
        "chancellor",
        "german",
      ],
      category: "Politicians",
      picuri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/2015-12-14_Angela_Merkel_CDU_Parteitag_by_Olaf_Kosinsky_-12.jpg/1920px-2015-12-14_Angela_Merkel_CDU_Parteitag_by_Olaf_Kosinsky_-12.jpg",
    },
    {
      id: "18",
      accountname: "richardbranson",
      name: "Richard Branson",
      text: "Sir Richard Charles Nicholas Branson (born 18 July 1950)[2] is a British business magnate, entrepeneur, investor, and author. In the 1970s he founded the Virgin Group, which today controls more than 400 companies in various fields.",
      tags: [
        "business",
        "entrepreneur",
        "investor",
        "author",
        "ceo",
        "richard",
        "branson",
        "richardbranson",
      ],
      category: ["Millionaires & Busines"],
      picuri:
        "https://images.ctfassets.net/rxqefefl3t5b/2SeS78R9jIJjKSTsMFOPkD/e332cbf70851670789f3dd42cc51e716/richard-branson-hero.jpg?fl=progressive&q=80",
    },
    {
      id: "19",
      accountname: "khloekardashian",
      name: "Khloe Kardashian",
      text: "Khloé Alexandra Kardashian is an American media personality, socialite, and model.",
      tags: ["khloe", "kardashian", "khloekardashian", " model"],
      category: "Influencers & Celebreties",
      picuri:
        "https://image.gala.de/22185970/t/ww/v6/w1440/r1.5/-/khloe-kardashian.jpg",
    },
    {
      id: "20",
      accountname: "kevinruss",
      name: "Kevin Russ",
      text: "Kevin Russ is a professional photographer based out of Portland, United States . He captures shots mainly surrounding Nature and the Environment.",
      tags: ["kevinruss", "kevin", "photographer", " russ"],
      category: "Photographer",
      picuri:
        "https://64.media.tumblr.com/dc788aad51e9f7511847b8c68118774b/b8d9bfa01836401d-e4/s500x750/0c9dd1f83ab18eed69ade4037ed915ffd7d97e4d.png",
    },
    {
      id: "21",
      accountname: "bchesky",
      name: "Brian Chesky",
      text: "Brian Joseph Chesky (born August 29, 1981) is an American businessman and industrial designer. He is the co-founder and CEO of the peer-to-peer lodging service Airbnb.",
      tags: ["bchesky", "brian", "chesky", " ceo", "millionaire"],
      category: "Millionaires & Business",
      picuri: "https://ucarecdn.com/a6fdd41f-7229-4bb4-b627-92dbcc6bc1e6/",
    },
  ]);

  const [trending, setTrending] = useState([
    {
      id: "20",
      accountname: "kevinruss",
      name: "Kevin Russ",
      text: "Kevin Russ is a professional photographer based out of Portland, United States . He captures shots mainly surrounding Nature and the Environment.",
      tags: ["kevinruss", "kevin", "photographer", " russ"],
      category: "Photographer",
      picuri:
        "https://64.media.tumblr.com/dc788aad51e9f7511847b8c68118774b/b8d9bfa01836401d-e4/s500x750/0c9dd1f83ab18eed69ade4037ed915ffd7d97e4d.png",
    },
    {
      id: "21",
      accountname: "bchesky",
      name: "Brian Chesky",
      text: "Brian Joseph Chesky (born August 29, 1981) is an American businessman and industrial designer. He is the co-founder and CEO of the peer-to-peer lodging service Airbnb.",
      tags: ["bchesky", "brian", "chesky", " ceo", "millionaire"],
      category: "Millionaires & Business",
      picuri: "https://ucarecdn.com/a6fdd41f-7229-4bb4-b627-92dbcc6bc1e6/",
    },
  ]);

  const [searchQuery, setSearchQuery] = React.useState("");

  const [filterdtdata, setFilterdtdata] = React.useState([
    {
      id: "1",
      accountname: "thisisbillgates",
      name: "Bill Gates",
      text: "William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, while also being the largest individual shareholder until May 2014.",
      tags: ["bill", "gates", "ceo", "bill gates"],
      category: "Millionaires & Business",
      picuri:
        "https://img.morgenpost.de/img/panorama/crop232210987/5087655479-w1200-cv16_9-q85/Microsoft-Gruender-Familienvater-und-Milliardaer-Bill-Gates.jpg",
    },
    {
      id: "2",
      accountname: "barackobama",
      name: "Barack Obama",
      text: "Barack Hussein Obama II is an American politician, lawyer, and author who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States.",
      tags: ["barck", "obama"],
      category: "Politicians",
      picuri:
        "https://images.greelane.com/proxy?url=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FjxxLoYLV1bxkImEGnyNVaz8_t_M%3D%2F1024x683%2Ffilters%3Afill%28auto%2C1%29%2FBarackObama-799035cd446c443fb392110c01768ed0.jpg&width=750",
    },
    {
      id: "3",
      accountname: "kyliejenner",
      name: "Kylie Jenner",
      text: "Kylie Kristen Jenner (born August 10, 1997)[3] is an American media personality, socialite, model, and businesswoman. She starred in the E! reality television series Keeping Up with the Kardashians from 2007 to 2021 and is the founder and owner of cosmetic company Kylie Cosmetics. She is currently the most followed woman on Instagram.",
      tags: ["kylie", "jenner"],
      category: "Influencers & Celebreties",
      picuri:
        "https://aisvip-a.akamaihd.net/masters/1413875/1856x1044/kylie-jenner-ist-sauer-auf-kim-kardashian-wegen-diesem-throwback-schnappschuss.jpg",
    },
    {
      id: "4",
      accountname: "virat.kohli",
      name: "Virat Kohli",
      text: "Virat Kohli is an Indian cricketer. He was born in Delhi, India on November 5, 1988. Virat is the first player in ICC cricket history to win all 3 ICC awards in a single year- ICC ODI player of the year, ICC Test player of the year and ICC Player of the year award in 2018. He is rated as one of the best batsmen in the world.",
      tags: ["kirat", "kohli"],
      category: "Sports",
      picuri:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/viratkohliindveng3rdt20i_1200x768.png?jM8nAK_N5kdSetGlIeH86MZJbWOK4JQJ&size=770:433",
    },

    {
      id: "5",
      accountname: "pewdiepie",
      name: "PewDiePie",
      text: "Felix Arvid Ulf Kjellberg born 24 October 1989, known online as PewDiePie is a Swedish YouTuber known primarily for his Let's Play videos",
      tags: ["pewdiepie", "pew", "felix", "arvid"],
      category: "Influencers & Celebreties",
      picuri:
        "https://www.earlygame.com/uploads/images/_headerImage/pewdiepie-net-worth.jpg",
    },
    {
      id: "6",
      accountname: "leomessi",
      name: "Lionel Messi",
      text: "Lionel Messi is an Argentinian footballer widely regarded as one of the greatest players of the modern generation. He plays for FC Barcelona and the Argentina national team. He has won FIFA world player of the year four times (a record already). He has often been described as Diego Maradona’s successor because of his prolific goal scoring record and ability to dribble past opponents.",
      tags: [
        "leo",
        "messi",
        "lionel messi",
        "soccer",
        "football",
        "FIFA",
        "argentinian",
      ],
      category: ["Sports", "soccer players", "argentinian"],
      picuri:
        "https://bilder.t-online.de/b/89/93/18/60/id_89931860/610/tid_da/lionel-messi-der-vertrag-des-argentiniers-beim-fc-barcelona-laeuft-im-sommer-aus-.jpg",
    },

    {
      id: "7",
      accountname: "kimkardashian",
      name: "Kim Kardashian",
      text: "Kimberly Noel Kardashian West (born October 21, 1980) is an American media personality, socialite, model, and businesswoman.",
      tags: ["kim", "kardashian", "kimkardashian", "kim kardashian"],
      category: "Influencers & Celebreties",
      picuri:
        "https://i1.wp.com/wikifamouspeople.com/wp-content/uploads/2018/06/kim-kardashian.jpg?fit=768%2C384&ssl=1",
    },

    {
      id: "8",
      accountname: "snoopdogg",
      name: "Snoopdogg",
      text: "Calvin Cordozar Broadus Jr. , known professionally as Snoop Dogg (previously Snoop Doggy Dogg and briefly Snoop Lion), is an American rapper, songwriter, media personality, actor, and entrepreneur.",
      tags: ["snoopdogg", "snoop", "dogg", "weed"],
      category: "Musicians",
      picuri:
        "https://www.fkpscorpio.com/ccds_cache_img/4e/4e506084c072505f305aa56c6353f441.2000x2000x0.jpg",
    },
    {
      id: "9",
      accountname: "therock",
      name: "Dwayne Johnson",
      text: "Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American actor, businessman, and former professional wrestler.",
      tags: ["actor", "therock", "Dwayne Johnson", "The Rock Johnson"],
      category: ["Influencers & Celebreties"],
      picuri:
        "https://www.nwzonline.de/rf/image_online/NWZ_CMS/NWZ/2014-2016/Produktion/2016/08/26/KULTUR/ONLINE/Bilder/cropped/32923200E8CEB67C-klSF--600x337%40NWZ-Online.jpg",
    },
    {
      id: "10",
      accountname: "neildegrassetyson",
      name: "Neil deGrasse Tyson",
      text: "Neil deGrasse Tyson is an American astrophysicist, planetary scientist, author, and science communicator.",
      tags: ["neil", "degrasse", "tyson", " science", "neildegrassetyson"],
      category: "Millionaires & Business",
      picuri:
        "https://celebs-networth.com/img/fun-games/41/50-neil-degrasse-tyson-quotes-that-are-out-this-universe.jpg",
    },

    {
      id: "11",
      accountname: "travisscott",
      name: "Travis Scott",
      text: "Jacques Bermon Webster II, known professionally as Travis Scott, is an American rapper and record producer.",
      tags: ["travis", "scott", "travisscott", " muisc", "musician"],
      category: "Musicians",
      picuri: "https://live.staticflickr.com/4295/35789467592_741ff5b0f6_c.jpg",
    },
    {
      id: "12",
      accountname: "cristiano",
      name: "Cristiano Ronaldo",
      text: "Cristiano Ronaldo dos Santos Aveiro, (born 5 February 1985) is a Portuguese professional footballer who is often considered the best player in the world and widely regarded as one of the greatest players of all time.",
      tags: ["football", "soccer", "ronaldo", "cristiano", "cristiano ronaldo"],
      category: ["Sports", "Soccer Players"],
      picuri:
        "https://cdn.corrieredellosport.it/img/990/495/2021/09/25/200609735-d201a59e-044a-4da6-881e-55417c5de481.jpg",
    },
    {
      id: "13",
      accountname: "justinbieber",
      name: "Justin Bieber",
      text: "Justin Drew Bieber is a Canadian singer. He was discovered by American record executive Scooter Braun and signed with RBMG Records in 2008, gaining recognition with the release of his debut seven-track EP My World (2009) and soon establishing himself as a teen idol.",
      tags: ["justinbieber", "justin", "bieber", " music", "musician"],
      category: "Musicians",
      picuri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2pzNpNikjQ1LHBR160_6OoYkK3O7jK2p3w&usqp=CAU",
    },
    {
      id: "14",
      accountname: "arianagrande",
      name: "Ariana Grande",
      text: "Ariana Grande-Butera, born June 26, 1993) is an American singer, songwriter and actress. Her music, much of which is based on personal experiences, has been the subject of widespread media attention, while her four-octave vocal range has received critical acclaim.",
      tags: ["music", "musician", "arianagrande", "ariana", "grande"],
      category: "Musicians",
      picuri:
        "https://www.maedchen.de/sites/default/files/styles/image870w/public/2020-10/ariana-grande.webp?h=79906091",
    },
    {
      id: "15",
      accountname: "mikebloomberg",
      name: "Mike Bloomberg",
      text: "Michael Mike Rubens Bloomberg (born February 14, 1942) is an American businessman, politician, philanthropist, and author..",
      tags: ["mikebloomberg", "mike", "bloomberg", " ceo", "millionaire"],
      category: "Millionaires & Business",
      picuri:
        "https://images.axios.com/8r1BRRRvZN81fbWZQAk263Y82KI=/0x70:3000x1757/1920x1080/2019/11/08/1573210195387.jpg",
    },
    {
      id: "16",
      accountname: "gigihadid",
      name: "Gigi Hadid",
      text: "Jelena Noura Hadid (born April 23, 1995) is an American model. In November 2014, she made her debut in the Top 50 Models ranking at Models.com.",
      tags: ["gigihadid", "gigi", "hadid", " model", "millionaire"],
      category: "Influencers & Celebreties",
      picuri:
        "https://cdn.prod.www.spiegel.de/images/c70b4268-cf3f-4ca0-af12-8b99f752541f_w1600_r1.4443909484833894_fpx47.74_fpy44.97.jpg",
    },
    {
      id: "17",
      accountname: "bundeskanzlerinmerkel",
      name: "Angela Merkel",
      text: "Angela Dorothea Merkel is a German politician and scientist who served as the chancellor of Germany from 2005 to 2021.",
      tags: [
        "bundeskanzlerinmerkel",
        "merkel",
        "angela",
        " politician",
        "chancellor",
        "german",
      ],
      category: "Politicians",
      picuri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/2015-12-14_Angela_Merkel_CDU_Parteitag_by_Olaf_Kosinsky_-12.jpg/1920px-2015-12-14_Angela_Merkel_CDU_Parteitag_by_Olaf_Kosinsky_-12.jpg",
    },
    {
      id: "18",
      accountname: "richardbranson",
      name: "Richard Branson",
      text: "Sir Richard Charles Nicholas Branson (born 18 July 1950)[2] is a British business magnate, entrepeneur, investor, and author. In the 1970s he founded the Virgin Group, which today controls more than 400 companies in various fields.",
      tags: [
        "business",
        "entrepreneur",
        "investor",
        "author",
        "ceo",
        "richard",
        "branson",
        "richardbranson",
      ],
      category: ["Millionaires & Busines"],
      picuri:
        "https://images.ctfassets.net/rxqefefl3t5b/2SeS78R9jIJjKSTsMFOPkD/e332cbf70851670789f3dd42cc51e716/richard-branson-hero.jpg?fl=progressive&q=80",
    },
    {
      id: "19",
      accountname: "khloekardashian",
      name: "Khloe Kardashian",
      text: "Khloé Alexandra Kardashian is an American media personality, socialite, and model.",
      tags: ["khloe", "kardashian", "khloekardashian", " model"],
      category: "Influencers & Celebreties",
      picuri:
        "https://image.gala.de/22185970/t/ww/v6/w1440/r1.5/-/khloe-kardashian.jpg",
    },
    {
      id: "20",
      accountname: "kevinruss",
      name: "Kevin Russ",
      text: "Kevin Russ is a professional photographer based out of Portland, United States . He captures shots mainly surrounding Nature and the Environment.",
      tags: ["kevinruss", "kevin", "photographer", " russ"],
      category: "Photographer",
      picuri:
        "https://64.media.tumblr.com/dc788aad51e9f7511847b8c68118774b/b8d9bfa01836401d-e4/s500x750/0c9dd1f83ab18eed69ade4037ed915ffd7d97e4d.png",
    },
    {
      id: "21",
      accountname: "bchesky",
      name: "Brian Chesky",
      text: "Brian Joseph Chesky (born August 29, 1981) is an American businessman and industrial designer. He is the co-founder and CEO of the peer-to-peer lodging service Airbnb.",
      tags: ["bchesky", "brian", "chesky", " ceo", "millionaire"],
      category: "Millionaires & Business",
      picuri: "https://ucarecdn.com/a6fdd41f-7229-4bb4-b627-92dbcc6bc1e6/",
    },
  ]);

  const [categorys, setCategorys] = React.useState([
    {
      id: "1",
      name: "Influencers & Celebreties",
      desc: "Stars and famous People",
      icon: "star",
    },
    {
      id: "2",
      name: "Millionaires & Business",
      desc: "Ceo's, Entrepreneurs and Investors",
      icon: "cash-multiple",
    },
    {
      id: "3",
      name: "Politicians",
      desc: "Presidents and Prime Ministers",
      icon: "account-tie",
    },
    {
      id: "3",
      name: "Sports",
      desc: "Most famous Athletes",
      icon: "basketball",
    },
    {
      id: "5",
      name: "Photographer",
      desc: "Interesting Photographers",
      icon: "camera",
    },
    {
      id: "6",
      name: "Musicians",
      desc: "Producers and Musicians",
      icon: "account-music",
    },
  ]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    var output = data.filter(function (x) {
      return (
        x.accountname.includes(query.toLowerCase()) ||
        x.tags.includes(query.toLowerCase()) ||
        x.name.includes(query.toLowerCase())
      );
    });
    setFilterdtdata(output);
  };

  const [favs, setFavs] = useState([]);
  // Similar to componentDidMount and componentDidUpdate:

  const [visible, setVisible] = React.useState(true);

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const initalState = "";
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    setInterval(() => {
      var d = new Date();
      var hours = 24 - d.getHours();
      var min = 60 - d.getMinutes();
      if ((min + "").length == 1) {
        min = "0" + min;
      }
      var sec = 60 - d.getSeconds();
      if ((sec + "").length == 1) {
        sec = "0" + sec;
      }

      setCount("" + hours + "h " + min + "m " + sec + "s");
    }, 1000);
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "'Scroll Feed From' shows you what your favourite Celebrities, Ceo's, Photographers and Scientists Instagram Feed looks like. Available on the Google Play Store: https://play.google.com/store/apps/details?id=com.ezcodeezlife.myapp",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  if (searchQuery == "") {
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <Text>{mydata}</Text>
          <Banner
            visible={visible}
            actions={[
              {
                label: "Ok ✔️",
                onPress: () => setVisible(false),
              },
            ]}
            icon={({ size }) => (
              <Image
                source={{
                  uri: "https://www.iconsdb.com/icons/preview/gray/clock-xxl.png",
                }}
                style={{
                  width: size,
                  height: size,
                }}
              />
            )}
          >
            Feeds update automatically every 24 hours. Next update in: {count}{" "}
          </Banner>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />

          <List.Section>
            <List.Accordion
              title="Categories"
              left={(props) => <List.Icon {...props} icon="shape" />}
            >
              {categorys.map((category) => (
                <TouchableHighlight
                  underlayColor={"#e6f0ff"}
                  onPress={() =>
                    navigation.navigate(category.name, {
                      routestring: category.name,
                    })
                  }
                  style={styles.card}
                >
                  <List.Item
                    title={category.name}
                    description={category.desc}
                    left={(props) => (
                      <List.Icon {...props} icon={category.icon} />
                    )}
                  />
                </TouchableHighlight>
              ))}
            </List.Accordion>
          </List.Section>

          <Divider />
          <Button
            style={styles.createFeed}
            icon="shape-plus"
            mode="contained"
            onPress={() => {
              navigation.navigate("Recreate anyones Feed", {});
            }}
          >
            Recreate anyones Feed
          </Button>
          <Divider />

          <Headline style={styles.titleText}>Trending</Headline>

          {trending.map((entry) => (
            <TouchableHighlight
              underlayColor={"#e6f0ff"}
              onPress={() =>
                navigation.navigate(entry.id, {
                  routestring: entry.accountname,
                })
              }
              style={styles.card}
            >
              <Card>
                {entry.picuri != undefined ? (
                  <Card.Cover source={{ uri: entry.picuri }} />
                ) : null}
                <Card.Content>
                  <Title>{entry.name}</Title>

                  <Caption>@{entry.accountname}</Caption>
                  <Paragraph>{entry.text}</Paragraph>
                </Card.Content>

                <Card.Actions>
                  <Button
                    icon="view-day"
                    mode="contained"
                    onPress={() =>
                      navigation.navigate(entry.id, {
                        routestring: entry.accountname,
                      })
                    }
                  >
                    View Feed
                  </Button>
                  <Button
                    icon="share-variant"
                    mode="outlined"
                    onPress={onShare}
                  >
                    Share Feed
                  </Button>
                  <Button icon="trending-up"></Button>
                </Card.Actions>
              </Card>
            </TouchableHighlight>
          ))}

          <Headline style={styles.titleText}>Explore</Headline>

          {data.map((entry) => (
            <TouchableHighlight
              underlayColor={"#e6f0ff"}
              onPress={() =>
                navigation.navigate(entry.id, {
                  routestring: entry.accountname,
                })
              }
              style={styles.card}
            >
              <Card>
                {entry.picuri != undefined ? (
                  <Card.Cover source={{ uri: entry.picuri }} />
                ) : null}
                <Card.Content>
                  <Title>{entry.name}</Title>

                  <Caption>@{entry.accountname}</Caption>
                  <Paragraph>{entry.text}</Paragraph>
                </Card.Content>

                <Card.Actions>
                  <Button
                    icon="view-day"
                    mode="contained"
                    onPress={() =>
                      navigation.navigate(entry.id, {
                        routestring: entry.accountname,
                      })
                    }
                  >
                    View Feed
                  </Button>
                  <Button
                    icon="share-variant"
                    mode="outlined"
                    onPress={onShare}
                  >
                    Share Feed
                  </Button>
                </Card.Actions>
              </Card>
            </TouchableHighlight>
          ))}

          <Button style={styles.notmorefound} icon="account-remove">
            nothing more found
          </Button>
        </ScrollView>

        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-8251732556629149/7005555227"
          servePersonalizedAds={true}
        />
      </>
    );
  } else {
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <Banner
            visible={visible}
            actions={[
              {
                label: "Ok ✔️",
                onPress: () => setVisible(false),
              },
            ]}
            icon={({ size }) => (
              <Image
                source={{
                  uri: "https://www.iconsdb.com/icons/preview/gray/clock-xxl.png",
                }}
                style={{
                  width: size,
                  height: size,
                }}
              />
            )}
          >
            Feeds update automatically every 24 hours.
          </Banner>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />

          <Headline style={styles.titleText}>Results</Headline>

          {filterdtdata.map((entry) => (
            <TouchableHighlight
              underlayColor={"#e6f0ff"}
              onPress={() =>
                navigation.navigate(entry.id, {
                  routestring: entry.accountname,
                })
              }
              style={styles.card}
            >
              <Card>
                {entry.picuri != undefined ? (
                  <Card.Cover source={{ uri: entry.picuri }} />
                ) : null}
                <Card.Content>
                  <Title>{entry.name}</Title>

                  <Caption>@{entry.accountname}</Caption>
                  <Paragraph>{entry.text}</Paragraph>
                </Card.Content>

                <Card.Actions>
                  <Button
                    icon="view-day"
                    mode="contained"
                    onPress={() =>
                      navigation.navigate(entry.id, {
                        routestring: entry.accountname,
                      })
                    }
                  >
                    View Feed
                  </Button>
                  <Button
                    icon="share-variant"
                    mode="outlined"
                    onPress={onShare}
                  >
                    Share Feed
                  </Button>
                </Card.Actions>
              </Card>
            </TouchableHighlight>
          ))}

          <Button style={styles.notmorefound} icon="account-remove">
            nothing more found
          </Button>
        </ScrollView>

        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-8251732556629149/7005555227"
          servePersonalizedAds={true}
        />
      </>
    );
  }
}

function Story({ route, navigation }) {
  const { routestring } = route.params;
  return (
    <View style={styles.container}>
      <WebView
        style={styles.top}
        source={{
          uri: "https://scrollfeedfrom.herokuapp.com/".concat(routestring),
        }}
      />
      <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-8251732556629149/7005555227"
        servePersonalizedAds={true}
      />
    </View>
  );
}

function Category({ route, navigation }) {
  const [categoryData, setCategoryData] = useState([
    {
      id: "1",
      accountname: "thisisbillgates",
      name: "Bill Gates",
      text: "William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, while also being the largest individual shareholder until May 2014.",
      tags: ["bill", "gates", "ceo", "bill gates"],
      category: "Millionaires & Business",
      picuri:
        "https://img.morgenpost.de/img/panorama/crop232210987/5087655479-w1200-cv16_9-q85/Microsoft-Gruender-Familienvater-und-Milliardaer-Bill-Gates.jpg",
    },
    {
      id: "2",
      accountname: "barackobama",
      name: "Barack Obama",
      text: "Barack Hussein Obama II is an American politician, lawyer, and author who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States.",
      tags: ["barck", "obama"],
      category: "Politicians",
      picuri:
        "https://images.greelane.com/proxy?url=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FjxxLoYLV1bxkImEGnyNVaz8_t_M%3D%2F1024x683%2Ffilters%3Afill%28auto%2C1%29%2FBarackObama-799035cd446c443fb392110c01768ed0.jpg&width=750",
    },
    {
      id: "3",
      accountname: "kyliejenner",
      name: "Kylie Jenner",
      text: "Kylie Kristen Jenner (born August 10, 1997)[3] is an American media personality, socialite, model, and businesswoman. She starred in the E! reality television series Keeping Up with the Kardashians from 2007 to 2021 and is the founder and owner of cosmetic company Kylie Cosmetics. She is currently the most followed woman on Instagram.",
      tags: ["kylie", "jenner"],
      category: "Influencers & Celebreties",
      picuri:
        "https://aisvip-a.akamaihd.net/masters/1413875/1856x1044/kylie-jenner-ist-sauer-auf-kim-kardashian-wegen-diesem-throwback-schnappschuss.jpg",
    },
    {
      id: "4",
      accountname: "virat.kohli",
      name: "Virat Kohli",
      text: "Virat Kohli is an Indian cricketer. He was born in Delhi, India on November 5, 1988. Virat is the first player in ICC cricket history to win all 3 ICC awards in a single year- ICC ODI player of the year, ICC Test player of the year and ICC Player of the year award in 2018. He is rated as one of the best batsmen in the world.",
      tags: ["kirat", "kohli"],
      category: "Sports",
      picuri:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/viratkohliindveng3rdt20i_1200x768.png?jM8nAK_N5kdSetGlIeH86MZJbWOK4JQJ&size=770:433",
    },

    {
      id: "5",
      accountname: "pewdiepie",
      name: "PewDiePie",
      text: "Felix Arvid Ulf Kjellberg born 24 October 1989, known online as PewDiePie is a Swedish YouTuber known primarily for his Let's Play videos",
      tags: ["pewdiepie", "pew", "felix", "arvid"],
      category: "Influencers & Celebreties",
      picuri:
        "https://www.earlygame.com/uploads/images/_headerImage/pewdiepie-net-worth.jpg",
    },
    {
      id: "6",
      accountname: "leomessi",
      name: "Lionel Messi",
      text: "Lionel Messi is an Argentinian footballer widely regarded as one of the greatest players of the modern generation. He plays for FC Barcelona and the Argentina national team. He has won FIFA world player of the year four times (a record already). He has often been described as Diego Maradona’s successor because of his prolific goal scoring record and ability to dribble past opponents.",
      tags: [
        "leo",
        "messi",
        "lionel messi",
        "soccer",
        "football",
        "FIFA",
        "argentinian",
      ],
      category: ["Sports", "soccer players", "argentinian"],
      picuri:
        "https://bilder.t-online.de/b/89/93/18/60/id_89931860/610/tid_da/lionel-messi-der-vertrag-des-argentiniers-beim-fc-barcelona-laeuft-im-sommer-aus-.jpg",
    },

    {
      id: "7",
      accountname: "kimkardashian",
      name: "Kim Kardashian",
      text: "Kimberly Noel Kardashian West (born October 21, 1980) is an American media personality, socialite, model, and businesswoman.",
      tags: ["kim", "kardashian", "kimkardashian", "kim kardashian"],
      category: "Influencers & Celebreties",
      picuri:
        "https://i1.wp.com/wikifamouspeople.com/wp-content/uploads/2018/06/kim-kardashian.jpg?fit=768%2C384&ssl=1",
    },

    {
      id: "8",
      accountname: "snoopdogg",
      name: "Snoopdogg",
      text: "Calvin Cordozar Broadus Jr. , known professionally as Snoop Dogg (previously Snoop Doggy Dogg and briefly Snoop Lion), is an American rapper, songwriter, media personality, actor, and entrepreneur.",
      tags: ["snoopdogg", "snoop", "dogg", "weed"],
      category: "Musicians",
      picuri:
        "https://www.fkpscorpio.com/ccds_cache_img/4e/4e506084c072505f305aa56c6353f441.2000x2000x0.jpg",
    },
    {
      id: "9",
      accountname: "therock",
      name: "Dwayne Johnson",
      text: "Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American actor, businessman, and former professional wrestler.",
      tags: ["actor", "therock", "Dwayne Johnson", "The Rock Johnson"],
      category: ["Influencers & Celebreties"],
      picuri:
        "https://www.nwzonline.de/rf/image_online/NWZ_CMS/NWZ/2014-2016/Produktion/2016/08/26/KULTUR/ONLINE/Bilder/cropped/32923200E8CEB67C-klSF--600x337%40NWZ-Online.jpg",
    },
    {
      id: "10",
      accountname: "neildegrassetyson",
      name: "Neil deGrasse Tyson",
      text: "Neil deGrasse Tyson is an American astrophysicist, planetary scientist, author, and science communicator.",
      tags: ["neil", "degrasse", "tyson", " science", "neildegrassetyson"],
      category: "Millionaires & Business",
      picuri:
        "https://celebs-networth.com/img/fun-games/41/50-neil-degrasse-tyson-quotes-that-are-out-this-universe.jpg",
    },

    {
      id: "11",
      accountname: "travisscott",
      name: "Travis Scott",
      text: "Jacques Bermon Webster II, known professionally as Travis Scott, is an American rapper and record producer.",
      tags: ["travis", "scott", "travisscott", " muisc", "musician"],
      category: "Musicians",
      picuri: "https://live.staticflickr.com/4295/35789467592_741ff5b0f6_c.jpg",
    },
    {
      id: "12",
      accountname: "cristiano",
      name: "Cristiano Ronaldo",
      text: "Cristiano Ronaldo dos Santos Aveiro, (born 5 February 1985) is a Portuguese professional footballer who is often considered the best player in the world and widely regarded as one of the greatest players of all time.",
      tags: ["football", "soccer", "ronaldo", "cristiano", "cristiano ronaldo"],
      category: ["Sports", "Soccer Players"],
      picuri:
        "https://cdn.corrieredellosport.it/img/990/495/2021/09/25/200609735-d201a59e-044a-4da6-881e-55417c5de481.jpg",
    },
    {
      id: "13",
      accountname: "justinbieber",
      name: "Justin Bieber",
      text: "Justin Drew Bieber is a Canadian singer. He was discovered by American record executive Scooter Braun and signed with RBMG Records in 2008, gaining recognition with the release of his debut seven-track EP My World (2009) and soon establishing himself as a teen idol.",
      tags: ["justinbieber", "justin", "bieber", " music", "musician"],
      category: "Musicians",
      picuri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2pzNpNikjQ1LHBR160_6OoYkK3O7jK2p3w&usqp=CAU",
    },
    {
      id: "14",
      accountname: "arianagrande",
      name: "Ariana Grande",
      text: "Ariana Grande-Butera, born June 26, 1993) is an American singer, songwriter and actress. Her music, much of which is based on personal experiences, has been the subject of widespread media attention, while her four-octave vocal range has received critical acclaim.",
      tags: ["music", "musician", "arianagrande", "ariana", "grande"],
      category: "Musicians",
      picuri:
        "https://www.maedchen.de/sites/default/files/styles/image870w/public/2020-10/ariana-grande.webp?h=79906091",
    },
    {
      id: "15",
      accountname: "mikebloomberg",
      name: "Mike Bloomberg",
      text: "Michael Mike Rubens Bloomberg (born February 14, 1942) is an American businessman, politician, philanthropist, and author..",
      tags: ["mikebloomberg", "mike", "bloomberg", " ceo", "millionaire"],
      category: "Millionaires & Business",
      picuri:
        "https://images.axios.com/8r1BRRRvZN81fbWZQAk263Y82KI=/0x70:3000x1757/1920x1080/2019/11/08/1573210195387.jpg",
    },
    {
      id: "16",
      accountname: "gigihadid",
      name: "Gigi Hadid",
      text: "Jelena Noura Hadid (born April 23, 1995) is an American model. In November 2014, she made her debut in the Top 50 Models ranking at Models.com.",
      tags: ["gigihadid", "gigi", "hadid", " model", "millionaire"],
      category: "Influencers & Celebreties",
      picuri:
        "https://cdn.prod.www.spiegel.de/images/c70b4268-cf3f-4ca0-af12-8b99f752541f_w1600_r1.4443909484833894_fpx47.74_fpy44.97.jpg",
    },
    {
      id: "17",
      accountname: "bundeskanzlerinmerkel",
      name: "Angela Merkel",
      text: "Angela Dorothea Merkel is a German politician and scientist who served as the chancellor of Germany from 2005 to 2021.",
      tags: [
        "bundeskanzlerinmerkel",
        "merkel",
        "angela",
        " politician",
        "chancellor",
        "german",
      ],
      category: "Politicians",
      picuri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/2015-12-14_Angela_Merkel_CDU_Parteitag_by_Olaf_Kosinsky_-12.jpg/1920px-2015-12-14_Angela_Merkel_CDU_Parteitag_by_Olaf_Kosinsky_-12.jpg",
    },
    {
      id: "18",
      accountname: "richardbranson",
      name: "Richard Branson",
      text: "Sir Richard Charles Nicholas Branson (born 18 July 1950)[2] is a British business magnate, entrepeneur, investor, and author. In the 1970s he founded the Virgin Group, which today controls more than 400 companies in various fields.",
      tags: [
        "business",
        "entrepreneur",
        "investor",
        "author",
        "ceo",
        "richard",
        "branson",
        "richardbranson",
      ],
      category: ["Millionaires & Busines"],
      picuri:
        "https://images.ctfassets.net/rxqefefl3t5b/2SeS78R9jIJjKSTsMFOPkD/e332cbf70851670789f3dd42cc51e716/richard-branson-hero.jpg?fl=progressive&q=80",
    },
    {
      id: "19",
      accountname: "khloekardashian",
      name: "Khloe Kardashian",
      text: "Khloé Alexandra Kardashian is an American media personality, socialite, and model.",
      tags: ["khloe", "kardashian", "khloekardashian", " model"],
      category: "Influencers & Celebreties",
      picuri:
        "https://image.gala.de/22185970/t/ww/v6/w1440/r1.5/-/khloe-kardashian.jpg",
    },
    {
      id: "20",
      accountname: "kevinruss",
      name: "Kevin Russ",
      text: "Kevin Russ is a professional photographer based out of Portland, United States . He captures shots mainly surrounding Nature and the Environment.",
      tags: ["kevinruss", "kevin", "photographer", " russ"],
      category: "Photographer",
      picuri:
        "https://64.media.tumblr.com/dc788aad51e9f7511847b8c68118774b/b8d9bfa01836401d-e4/s500x750/0c9dd1f83ab18eed69ade4037ed915ffd7d97e4d.png",
    },
    {
      id: "21",
      accountname: "bchesky",
      name: "Brian Chesky",
      text: "Brian Joseph Chesky (born August 29, 1981) is an American businessman and industrial designer. He is the co-founder and CEO of the peer-to-peer lodging service Airbnb.",
      tags: ["bchesky", "brian", "chesky", " ceo", "millionaire"],
      category: "Millionaires & Business",
      picuri: "https://ucarecdn.com/a6fdd41f-7229-4bb4-b627-92dbcc6bc1e6/",
    },
  ]);

  const { routestring } = route.params;
  /*
  useEffect(() => {
    var output = categoryData.filter(function (x) {
      return (
        x.category.includes(routestring)
      );
    });
    setCategoryData(output);
  });
  */

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        {categoryData
          .filter(function (x) {
            return x.category.includes(routestring);
          })
          .map((entry) => (
            <View>
              <TouchableHighlight
                underlayColor={"#e6f0ff"}
                onPress={() =>
                  navigation.navigate(entry.id, {
                    routestring: entry.accountname,
                  })
                }
                style={styles.card}
              >
                <Card>
                  {entry.picuri != undefined ? (
                    <Card.Cover source={{ uri: entry.picuri }} />
                  ) : null}
                  <Card.Content>
                    <Title>{entry.name}</Title>

                    <Caption>@{entry.accountname}</Caption>
                    <Paragraph>{entry.text}</Paragraph>
                  </Card.Content>

                  <Card.Actions>
                    <Button
                      icon="view-day"
                      mode="contained"
                      onPress={() =>
                        navigation.navigate(entry.id, {
                          routestring: entry.accountname,
                        })
                      }
                    >
                      View Feed
                    </Button>
                  </Card.Actions>
                </Card>
              </TouchableHighlight>
            </View>
          ))}
      </View>
    </ScrollView>
  );
}

function Comment({ route, navigation }) {
  const { routestring } = route.params;
  return (
    <View style={styles.container}>
      <Text>Ye</Text>
      <WebView
        style={styles.top}
        source={{
          uri: "https://scrollfeedfrom.herokuapp.com/comment/".concat(
            routestring
          ),
        }}
      />
      <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-8251732556629149/7005555227"
        servePersonalizedAds={true}
      />
    </View>
  );
}

function CreateFeed({ route, navigation }) {
  const { routestring } = route.params;
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [requestDone, setRequestDone] = React.useState(false);
  const [buttonState, setButtonState] = React.useState(false);

  const createNewFeed = (accname) => {
    const url = "https://flaskapiforssf.herokuapp.com/collect/" + accname.text;
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          setLoading(false); //for button acitvity indicator
          setRequestDone(true);
          navigation.setOptions({
            title: `Recreated: @` + text,
          });
        } else {
          setLoading(false);
          setRequestDone(true);
          navigation.setOptions({
            title: "Error, Try again",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (requestDone) {
    return (
      <WebView
        style={styles.top}
        source={{
          uri: "https://scrollfeedfrom2.herokuapp.com/" + text,
        }}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <Text>Enter accountname of the feed you want to see:</Text>
          <TextInput
            style={styles.Input}
            label="Input accountname"
            value={text}
            mode="outlined"
            onChangeText={(text) => setText(text)}
          />

          <Button
            style={styles.createFeed}
            icon="sticker-plus-outline"
            mode="contained"
            loading={loading}
            disabled={buttonState}
            onPress={() => {
              setLoading(true);
              setButtonState(true);
              createNewFeed({ text });
            }}
          >
            Recreate Feed: "{text}"
          </Button>
          {loading ? (
            <Text>Creating a personal feed usually takes ~ 15 seconds</Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </View>
    );
  }
}

const Stack = createNativeStackNavigator();

function App() {
  const [data, setData] = useState([
    {
      id: "1",
      accountname: "thisisbillgates",
      name: "Bill Gates",
      text: "William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, while also being the largest individual shareholder until May 2014.",
      tags: ["bill", "gates", "ceo", "bill gates"],
      category: "Millionaires & Business",
      picuri:
        "https://img.morgenpost.de/img/panorama/crop232210987/5087655479-w1200-cv16_9-q85/Microsoft-Gruender-Familienvater-und-Milliardaer-Bill-Gates.jpg",
    },
    {
      id: "2",
      accountname: "barackobama",
      name: "Barack Obama",
      text: "Barack Hussein Obama II is an American politician, lawyer, and author who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States.",
      tags: ["barck", "obama"],
      category: "Politicians",
      picuri:
        "https://images.greelane.com/proxy?url=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FjxxLoYLV1bxkImEGnyNVaz8_t_M%3D%2F1024x683%2Ffilters%3Afill%28auto%2C1%29%2FBarackObama-799035cd446c443fb392110c01768ed0.jpg&width=750",
    },
    {
      id: "3",
      accountname: "kyliejenner",
      name: "Kylie Jenner",
      text: "Kylie Kristen Jenner (born August 10, 1997)[3] is an American media personality, socialite, model, and businesswoman. She starred in the E! reality television series Keeping Up with the Kardashians from 2007 to 2021 and is the founder and owner of cosmetic company Kylie Cosmetics. She is currently the most followed woman on Instagram.",
      tags: ["kylie", "jenner"],
      category: "Influencers & Celebreties",
      picuri:
        "https://aisvip-a.akamaihd.net/masters/1413875/1856x1044/kylie-jenner-ist-sauer-auf-kim-kardashian-wegen-diesem-throwback-schnappschuss.jpg",
    },
    {
      id: "4",
      accountname: "virat.kohli",
      name: "Virat Kohli",
      text: "Virat Kohli is an Indian cricketer. He was born in Delhi, India on November 5, 1988. Virat is the first player in ICC cricket history to win all 3 ICC awards in a single year- ICC ODI player of the year, ICC Test player of the year and ICC Player of the year award in 2018. He is rated as one of the best batsmen in the world.",
      tags: ["kirat", "kohli"],
      category: "Sports",
      picuri:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/viratkohliindveng3rdt20i_1200x768.png?jM8nAK_N5kdSetGlIeH86MZJbWOK4JQJ&size=770:433",
    },

    {
      id: "5",
      accountname: "pewdiepie",
      name: "PewDiePie",
      text: "Felix Arvid Ulf Kjellberg born 24 October 1989, known online as PewDiePie is a Swedish YouTuber known primarily for his Let's Play videos",
      tags: ["pewdiepie", "pew", "felix", "arvid"],
      category: "Influencers & Celebreties",
      picuri:
        "https://www.earlygame.com/uploads/images/_headerImage/pewdiepie-net-worth.jpg",
    },
    {
      id: "6",
      accountname: "leomessi",
      name: "Lionel Messi",
      text: "Lionel Messi is an Argentinian footballer widely regarded as one of the greatest players of the modern generation. He plays for FC Barcelona and the Argentina national team. He has won FIFA world player of the year four times (a record already). He has often been described as Diego Maradona’s successor because of his prolific goal scoring record and ability to dribble past opponents.",
      tags: [
        "leo",
        "messi",
        "lionel messi",
        "soccer",
        "football",
        "FIFA",
        "argentinian",
      ],
      category: ["Sports", "soccer players", "argentinian"],
      picuri:
        "https://bilder.t-online.de/b/89/93/18/60/id_89931860/610/tid_da/lionel-messi-der-vertrag-des-argentiniers-beim-fc-barcelona-laeuft-im-sommer-aus-.jpg",
    },

    {
      id: "7",
      accountname: "kimkardashian",
      name: "Kim Kardashian",
      text: "Kimberly Noel Kardashian West (born October 21, 1980) is an American media personality, socialite, model, and businesswoman.",
      tags: ["kim", "kardashian", "kimkardashian", "kim kardashian"],
      category: "Influencers & Celebreties",
      picuri:
        "https://i1.wp.com/wikifamouspeople.com/wp-content/uploads/2018/06/kim-kardashian.jpg?fit=768%2C384&ssl=1",
    },

    {
      id: "8",
      accountname: "snoopdogg",
      name: "Snoopdogg",
      text: "Calvin Cordozar Broadus Jr. , known professionally as Snoop Dogg (previously Snoop Doggy Dogg and briefly Snoop Lion), is an American rapper, songwriter, media personality, actor, and entrepreneur.",
      tags: ["snoopdogg", "snoop", "dogg", "weed"],
      category: "Musicians",
      picuri:
        "https://www.fkpscorpio.com/ccds_cache_img/4e/4e506084c072505f305aa56c6353f441.2000x2000x0.jpg",
    },
    {
      id: "9",
      accountname: "therock",
      name: "Dwayne Johnson",
      text: "Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American actor, businessman, and former professional wrestler.",
      tags: ["actor", "therock", "Dwayne Johnson", "The Rock Johnson"],
      category: ["Influencers & Celebreties"],
      picuri:
        "https://www.nwzonline.de/rf/image_online/NWZ_CMS/NWZ/2014-2016/Produktion/2016/08/26/KULTUR/ONLINE/Bilder/cropped/32923200E8CEB67C-klSF--600x337%40NWZ-Online.jpg",
    },
    {
      id: "10",
      accountname: "neildegrassetyson",
      name: "Neil deGrasse Tyson",
      text: "Neil deGrasse Tyson is an American astrophysicist, planetary scientist, author, and science communicator.",
      tags: ["neil", "degrasse", "tyson", " science", "neildegrassetyson"],
      category: "Millionaires & Business",
      picuri:
        "https://celebs-networth.com/img/fun-games/41/50-neil-degrasse-tyson-quotes-that-are-out-this-universe.jpg",
    },

    {
      id: "11",
      accountname: "travisscott",
      name: "Travis Scott",
      text: "Jacques Bermon Webster II, known professionally as Travis Scott, is an American rapper and record producer.",
      tags: ["travis", "scott", "travisscott", " muisc", "musician"],
      category: "Musicians",
      picuri: "https://live.staticflickr.com/4295/35789467592_741ff5b0f6_c.jpg",
    },
    {
      id: "12",
      accountname: "cristiano",
      name: "Cristiano Ronaldo",
      text: "Cristiano Ronaldo dos Santos Aveiro, (born 5 February 1985) is a Portuguese professional footballer who is often considered the best player in the world and widely regarded as one of the greatest players of all time.",
      tags: ["football", "soccer", "ronaldo", "cristiano", "cristiano ronaldo"],
      category: ["Sports", "Soccer Players"],
      picuri:
        "https://cdn.corrieredellosport.it/img/990/495/2021/09/25/200609735-d201a59e-044a-4da6-881e-55417c5de481.jpg",
    },
    {
      id: "13",
      accountname: "justinbieber",
      name: "Justin Bieber",
      text: "Justin Drew Bieber is a Canadian singer. He was discovered by American record executive Scooter Braun and signed with RBMG Records in 2008, gaining recognition with the release of his debut seven-track EP My World (2009) and soon establishing himself as a teen idol.",
      tags: ["justinbieber", "justin", "bieber", " music", "musician"],
      category: "Musicians",
      picuri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2pzNpNikjQ1LHBR160_6OoYkK3O7jK2p3w&usqp=CAU",
    },
    {
      id: "14",
      accountname: "arianagrande",
      name: "Ariana Grande",
      text: "Ariana Grande-Butera, born June 26, 1993) is an American singer, songwriter and actress. Her music, much of which is based on personal experiences, has been the subject of widespread media attention, while her four-octave vocal range has received critical acclaim.",
      tags: ["music", "musician", "arianagrande", "ariana", "grande"],
      category: "Musicians",
      picuri:
        "https://www.maedchen.de/sites/default/files/styles/image870w/public/2020-10/ariana-grande.webp?h=79906091",
    },
    {
      id: "15",
      accountname: "mikebloomberg",
      name: "Mike Bloomberg",
      text: "Michael Mike Rubens Bloomberg (born February 14, 1942) is an American businessman, politician, philanthropist, and author..",
      tags: ["mikebloomberg", "mike", "bloomberg", " ceo", "millionaire"],
      category: "Millionaires & Business",
      picuri:
        "https://images.axios.com/8r1BRRRvZN81fbWZQAk263Y82KI=/0x70:3000x1757/1920x1080/2019/11/08/1573210195387.jpg",
    },
    {
      id: "16",
      accountname: "gigihadid",
      name: "Gigi Hadid",
      text: "Jelena Noura Hadid (born April 23, 1995) is an American model. In November 2014, she made her debut in the Top 50 Models ranking at Models.com.",
      tags: ["gigihadid", "gigi", "hadid", " model", "millionaire"],
      category: "Influencers & Celebreties",
      picuri:
        "https://cdn.prod.www.spiegel.de/images/c70b4268-cf3f-4ca0-af12-8b99f752541f_w1600_r1.4443909484833894_fpx47.74_fpy44.97.jpg",
    },
    {
      id: "17",
      accountname: "bundeskanzlerinmerkel",
      name: "Angela Merkel",
      text: "Angela Dorothea Merkel is a German politician and scientist who served as the chancellor of Germany from 2005 to 2021.",
      tags: [
        "bundeskanzlerinmerkel",
        "merkel",
        "angela",
        " politician",
        "chancellor",
        "german",
      ],
      category: "Politicians",
      picuri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/2015-12-14_Angela_Merkel_CDU_Parteitag_by_Olaf_Kosinsky_-12.jpg/1920px-2015-12-14_Angela_Merkel_CDU_Parteitag_by_Olaf_Kosinsky_-12.jpg",
    },
    {
      id: "18",
      accountname: "richardbranson",
      name: "Richard Branson",
      text: "Sir Richard Charles Nicholas Branson (born 18 July 1950)[2] is a British business magnate, entrepeneur, investor, and author. In the 1970s he founded the Virgin Group, which today controls more than 400 companies in various fields.",
      tags: [
        "business",
        "entrepreneur",
        "investor",
        "author",
        "ceo",
        "richard",
        "branson",
        "richardbranson",
      ],
      category: ["Millionaires & Busines"],
      picuri:
        "https://images.ctfassets.net/rxqefefl3t5b/2SeS78R9jIJjKSTsMFOPkD/e332cbf70851670789f3dd42cc51e716/richard-branson-hero.jpg?fl=progressive&q=80",
    },
    {
      id: "19",
      accountname: "khloekardashian",
      name: "Khloe Kardashian",
      text: "Khloé Alexandra Kardashian is an American media personality, socialite, and model.",
      tags: ["khloe", "kardashian", "khloekardashian", " model"],
      category: "Influencers & Celebreties",
      picuri:
        "https://image.gala.de/22185970/t/ww/v6/w1440/r1.5/-/khloe-kardashian.jpg",
    },
    {
      id: "20",
      accountname: "kevinruss",
      name: "Kevin Russ",
      text: "Kevin Russ is a professional photographer based out of Portland, United States . He captures shots mainly surrounding Nature and the Environment.",
      tags: ["kevinruss", "kevin", "photographer", " russ"],
      category: "Photographer",
      picuri:
        "https://64.media.tumblr.com/dc788aad51e9f7511847b8c68118774b/b8d9bfa01836401d-e4/s500x750/0c9dd1f83ab18eed69ade4037ed915ffd7d97e4d.png",
    },
    {
      id: "21",
      accountname: "bchesky",
      name: "Brian Chesky",
      text: "Brian Joseph Chesky (born August 29, 1981) is an American businessman and industrial designer. He is the co-founder and CEO of the peer-to-peer lodging service Airbnb.",
      tags: ["bchesky", "brian", "chesky", " ceo", "millionaire"],
      category: "Millionaires & Business",
      picuri: "https://ucarecdn.com/a6fdd41f-7229-4bb4-b627-92dbcc6bc1e6/",
    },
  ]);

  const [categorys, setCategorys] = React.useState([
    {
      id: "1",
      name: "Influencers & Celebreties",
      desc: "Stars and famous People",
      icon: "star",
    },
    {
      id: "2",
      name: "Millionaires & Business",
      desc: "Ceo's, Entrepreneurs and Investors",
      icon: "cash-multiple",
    },
    {
      id: "3",
      name: "Politicians",
      desc: "Presidents and Prime Ministers",
      icon: "account-tie",
    },
    {
      id: "3",
      name: "Sports",
      desc: "Most famous Athletes",
      icon: "basketball",
    },
    {
      id: "5",
      name: "Photographer",
      desc: "Interesting Photographers",
      icon: "camera",
    },
    {
      id: "6",
      name: "Musicians",
      desc: "Producers and Musicians",
      icon: "account-music",
    },
  ]);

  //wakup heroku dyno
  useEffect(() => {
    fetch("http://scrollfeedfrom.herokuapp.com/thisisbillgates", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          backgroundColor="#fff"
          initialRouteName="Scroll Feed From"
        >
          <Stack.Screen name="Scroll Feed From" component={HomeScreen} />

          <Stack.Screen name="Recreate anyones Feed" component={CreateFeed} />

          {data.map((entry) => (
            <>
              <Stack.Screen
                name={entry.id}
                component={Story}
                options={{ title: entry.accountname }}
              />
              <Stack.Screen
                name={entry.accountname}
                component={Story}
                options={{ title: entry.accountname }}
              />
            </>
          ))}

          {categorys.map((entry) => (
            <Stack.Screen
              name={entry.name}
              component={Category}
              options={{ title: entry.name }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  containerInner: {
    margin: 20,
  },
  top: {},
  titleText: {
    padding: 8,
    fontSize: 26,
    fontWeight: "bold",
  },
  notmorefound: {
    paddingBottom: 12,
    fontSize: 22,
  },
  card: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  searchbutton: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  createFeed: {
    marginTop: 5,
    marginBottom: 5,

    marginLeft: 5,
    marginRight: 5,

    paddingBottom: 10,
    paddingTop: 10,
  },
  Input: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default App;
