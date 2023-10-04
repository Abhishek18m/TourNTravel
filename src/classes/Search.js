import React, {useState, useEffect} from 'react';
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

import I18n from 'react-native-i18n';
import en from '../languages/en';
import hi from '../languages/hi';
import ja from '../languages/ja';

I18n.fallback = true;
I18n.translations = {
  hi,
  en,
  ja,
};

let array = [];
export default function Search(props) {
  const [myInput, setMyInput] = useState('');
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
  const value = () => {
    setFilterData(RecentSearches);
  };
  useEffect(() => {
    value();
  }, []);
  const [filterData, setFilterData] = useState([]);

  const [search, setsearch] = useState('');

  const searchFilter = text => {
    if (text) {
      const newData = RecentSearches.filter(item => {
        return item.PlacesTxt1.toUpperCase().indexOf(text.toUpperCase()) > -1;
      });

      setFilterData(newData);
      setsearch(text);
    } else {
      setFilterData(RecentSearches);
      setsearch(text);
    }
  };

  const RecentSearches = [
    {
      id: 1,
      PlacesImg: require('../assets/mountains.jpg'),
      PlacesTxt1: I18n.t('mount'),
      PlacesTxt2: I18n.t('china'),
    },
    {
      id: 2,
      PlacesImg: require('../assets/SukhnaLake.png'),
      PlacesTxt1: I18n.t('SuLake'),
      PlacesTxt2: I18n.t('chd'),
    },
    {
      id: 3,
      PlacesImg: require('../assets/Tokyo.jpeg'),
      PlacesTxt1: I18n.t('tokyo'),
      PlacesTxt2: I18n.t('japan'),
    },
    {
      id: 4,
      PlacesImg: require('../assets/RockGarden.webp'),
      PlacesTxt1: I18n.t('rock'),
      PlacesTxt2: I18n.t('chd'),
    },
    {
      id: 5,
      PlacesImg: require('../assets/SukhnaLake.png'),
      PlacesTxt1: I18n.t('elante'),
      PlacesTxt2: I18n.t('chd'),
    },
    {
      id: 6,
      PlacesImg: require('../assets/RoseGarden.webp'),
      PlacesTxt1: I18n.t('rose'),
      PlacesTxt2: I18n.t('chd'),
    },
    {
      id: 7,
      PlacesImg: require('../assets/Paris.jpeg'),
      PlacesTxt1: I18n.t('eifel'),
      PlacesTxt2: I18n.t('paris'),
    },
    {
      id: 8,
      PlacesImg: require('../assets/NewYork.jpeg'),
      PlacesTxt1: I18n.t('empire'),
      PlacesTxt2: I18n.t('york'),
    },
    {
      id: 9,
      PlacesImg: require('../assets/tajmahal.jpg'),
      PlacesTxt1: I18n.t('taj'),
      PlacesTxt2: I18n.t('agra'),
    },
    {
      id: 10,
      PlacesImg: require('../assets/USA.jpeg'),
      PlacesTxt1: I18n.t('liberty'),
      PlacesTxt2: I18n.t('york'),
    },
    {
      id: 11,
      PlacesImg: require('../assets/Spain.jpeg'),
      PlacesTxt1: I18n.t('sagrada'),
      PlacesTxt2: I18n.t('spain'),
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
            placeholder={I18n.t('chd')}
            placeholderTextColor={'grey'}
            style={CSS.InputText}
            onChangeText={text => searchFilter(text)}
            value={search}
          />

          <TouchableOpacity onPress={() => searchFilter()}>
            {/* <Image
              source={require('../assets/search.png')}
              style={{height: 30, width: 30, margin: 5}}
            /> */}
            <Text>{I18n.t('clear')}</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{backgroundColor: Design.secondaryColor}}>
          <Text style={CSS.HomeText1}>{I18n.t('recent')}</Text>
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
