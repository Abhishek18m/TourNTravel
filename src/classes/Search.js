import React, { useState , useEffect } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import CSS from '../StyleSheet/CSS';
// import SearchBar from '../component/TopSearchBar';
import MySearch from '../component/MySearch';
import Design from '../StyleSheet/Design';
let array =[];
export default function Search(props) {
 

  const [myInput, setMyInput]=useState('')
//   const [data,setData]=useState('')
 

//   const searchItems = () => {
//   if (myInput==''){
//     Alert.alert('empty')
//   }else(console.log(myInput), showFilter())
// }
// const showFilter=()=>{
//   let result = RecentSearches.filter((item)=>item.PlacesTxt1==myInput)
//   return console.log(result);
// }
const value =()=>{
  setFilterData(RecentSearches)
}
useEffect(()=>{
  value()
},[])
const [filterData, setFilterData]=useState([]);

const [search, setsearch] = useState('');

const searchFilter=(text)=>{

if (text){
  const newData = RecentSearches.filter((item)=>{
    return item.PlacesTxt1.toUpperCase().indexOf(text.toUpperCase())>-1;
  });

  setFilterData(newData);
  setsearch(text);
}else {
  setFilterData(RecentSearches);
  setsearch(text);
}
}
  // const RecentSearches = [
  //   {
  //     id: 1,
  //     PlacesImg: require('../assets/mountains.jpg'),
  //     PlacesTxt1: 'Mount Everest',
  //     PlacesTxt2: 'China',
  //   },
  //   {
  //     id: 2,
  //     PlacesImg: require('../assets/SukhnaLake.png'),
  //     PlacesTxt1: 'Sukhna Lake',
  //     PlacesTxt2: 'Chandigarh, India',
  //   },
  //   {
  //     id: 3,
  //     PlacesImg: require('../assets/Tokyo.jpeg'),
  //     PlacesTxt1: 'Tokyo',
  //     PlacesTxt2: 'Tokyo, Japan',
  //   },
  // ];
  // const PopularCities = [
  //   {
  //     id: 1,
  //     PlacesImg: require('../assets/Paris.jpeg'),
  //     PlacesTxt1: 'Eiffel Tower',
  //     PlacesTxt2: 'Paris',
  //   },
  //   {
  //     id: 2,
  //     PlacesImg: require('../assets/NewYork.jpeg'),
  //     PlacesTxt1: 'The Empire State Building',
  //     PlacesTxt2: 'New York',
  //   },
  //   {
  //     id: 3,
  //     PlacesImg: require('../assets/tajmahal.jpg'),
  //     PlacesTxt1: 'Taj Mahal',
  //     PlacesTxt2: 'Agra, India',
  //   },
  // ];
  // const PopularImg = [
  //   {
  //     id: 1,
  //     PlacesImg: require('../assets/USA.jpeg'),
  //     PlacesTxt1: 'Statue of Liberty',
  //     PlacesTxt2: 'New York,USA',
  //   },
  //   {
  //     id: 2,
  //     PlacesImg: require('../assets/Tokyo.jpeg'),
  //     PlacesTxt1: 'Tokyo',
  //     PlacesTxt2: 'Tokyo, Japan',
  //   },
  //   {
  //     id: 3,
  //     PlacesImg: require('../assets/Spain.jpeg'),
  //     PlacesTxt1: 'La Sagrada Familia',
  //     PlacesTxt2: 'Spain',
  //   },
  // ];
  
  const RecentSearches = [
    {
      id: 1,
      PlacesImg: require('../assets/mountains.jpg'),
      PlacesTxt1: 'MOUNT EVEREST',
      PlacesTxt2: 'China',
    },
    {
      id: 2,
      PlacesImg: require('../assets/SukhnaLake.png'),
      PlacesTxt1: 'SUKHNA LAKE',
      PlacesTxt2: 'Chandigarh, India',
    },
    {
      id: 3,
      PlacesImg: require('../assets/Tokyo.jpeg'),
      PlacesTxt1: 'TOKYO',
      PlacesTxt2: 'Tokyo, Japan',
    },
    {
      id: 4,
      PlacesImg: require('../assets/mountains.jpg'),
      PlacesTxt1: 'ROCK GARDEN',
      PlacesTxt2: 'China',
    },
    {
      id: 5,
      PlacesImg: require('../assets/SukhnaLake.png'),
      PlacesTxt1: 'ELANTE',
      PlacesTxt2: 'Chandigarh, India',
    },
    {
      id: 6,
      PlacesImg: require('../assets/Tokyo.jpeg'),
      PlacesTxt1: 'ROSE GARDEN',
      PlacesTxt2: 'Tokyo, Japan',
    },
    {
      id: 7,
      PlacesImg: require('../assets/Paris.jpeg'),
      PlacesTxt1: 'EIFFEL TOWER',
      PlacesTxt2: 'Paris',
    },
    {
      id: 8,
      PlacesImg: require('../assets/NewYork.jpeg'),
      PlacesTxt1: 'THE EMPIRE STATE BUILDING',
      PlacesTxt2: 'New York',
    },
    {
      id: 9,
      PlacesImg: require('../assets/tajmahal.jpg'),
      PlacesTxt1: 'TAJ MAHAL',
      PlacesTxt2: 'Agra, India',
    },
    {
      id: 10,
      PlacesImg: require('../assets/USA.jpeg'),
      PlacesTxt1: 'STATUE OF LIBERTY',
      PlacesTxt2: 'New York,USA',
    },
    {
      id: 11,
      PlacesImg: require('../assets/Tokyo.jpeg'),
      PlacesTxt1: 'JAPAN',
      PlacesTxt2: 'Tokyo, Japan',
    },
    {
      id: 12,
      PlacesImg: require('../assets/Spain.jpeg'),
      PlacesTxt1: 'LA SAGRADA FAMILIA' ,
      PlacesTxt2: 'Spain',
    },
  ]; 
  
  const _renderItem = ({item}) => {
    return (
      <MySearch
        PlacesImg={item.PlacesImg}
        PlacesTxt1={item.PlacesTxt1}
        PlacesTxt2={item.PlacesTxt2}
        navigation={props.navigation}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Design.primaryColor}}>
      <View style={{flex: 1, backgroundColor: Design.primaryColor}}>

        <View style={CSS.SearchButton}>
          <TextInput
            placeholder="Chandigarh, India"
            style={CSS.InputText} 
            onChangeText={text=>searchFilter(text)}
            value={search}
            />
            

          <TouchableOpacity onPress={() => searchFilter()}>
            {/* <Image
              source={require('../assets/search.png')}
              style={{height: 30, width: 30, margin: 5}}
            /> */}
            <Text>Clear</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{backgroundColor: Design.secondaryColor}}>
          <Text style={CSS.HomeText1}>Recent Searches</Text>
          <FlatList data={filterData} renderItem={_renderItem} />

          {/* <Text style={CSS.HomeText1}>Popular Cities</Text>

          <FlatList data={PopularCities} renderItem={_renderItem} />
          <Text style={CSS.HomeText1}>Popular Countries</Text>
          <FlatList data={PopularImg} renderItem={_renderItem} /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
