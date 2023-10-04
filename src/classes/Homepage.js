import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';

import CSS from '../StyleSheet/CSS';
import Topbar from '../component/Topbar';
import Categories from '../component/Categories';
import {SliderBox} from 'react-native-image-slider-box';
import PopularImages from '../component/MyImages';
import Design from '../StyleSheet/Design';
import ToVistImg from '../component/ToVistImg';
import AsyncStorage from '@react-native-community/async-storage';

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
export default function Homepage(props) {
  // function handleBackButtonClick() {
  //   BackHandler.exitApp();
  //   return true;
  // }

  useEffect(() => {
    getData();
    // BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    // return () => {
    //   BackHandler.removeEventListener(
    //     'hardwareBackPress',
    //     handleBackButtonClick,
    //   );
    // };
  }, []);
  const getData = async () => {
    let likeStatus = await AsyncStorage.getItem('likeStatus');
    let parsedata = JSON.parse(likeStatus);
    {
      likeStatus ? setPopularPlaces(parsedata) : null;
    }
  };

  const [categories, setCategories] = useState(0);
  const [btn, setBtn] = useState(false);

  const HomeCategories = [
    {
      id: 1,
      Img: require('../assets/categories.png'),
      Title: I18n.t('all'),
    },
    {
      id: 2,
      Img: require('../assets/beach.png'),
      Title: I18n.t('lake'),
    },
    {
      id: 3,
      Img: require('../assets/cart.png'),
      Title: I18n.t('shopping'),
    },
    {
      id: 4,
      Img: require('../assets/museum.png'),
      Title: I18n.t('museum'),
    },
    {
      id: 5,
      Img: require('../assets/boating.png'),
      Title: I18n.t('boating'),
    },
    {
      id: 6,
      Img: require('../assets/restaurant.png'),
      Title: I18n.t('cafe'),
    },
    {
      id: 7,
      Img: require('../assets/swimming.png'),
      Title: I18n.t('swim'),
    },
  ];
  const Recomended = [
    require('../assets/SukhnaLake.png'),
    require('../assets/RockGarden.webp'),
    require('../assets/RoseGarden.webp'),
    require('../assets/Elante.jpeg'),
  ];
  const [PopularPlaces, setPopularPlaces] = useState([
    {
      id: 1,
      PlacesImg: require('../assets/SukhnaLake.png'),
      PlacesTxt1: I18n.t('SuLake'),
      PlacesTxt2: I18n.t('chd'),
      status: 'false',
    },
    {
      id: 2,
      PlacesImg: require('../assets/Elante.jpeg'),
      PlacesTxt1: I18n.t('elante'),
      PlacesTxt2: I18n.t('chd'),
      status: 'false',
    },
    {
      id: 3,
      PlacesImg: require('../assets/RockGarden.webp'),
      PlacesTxt1: I18n.t('rock'),
      PlacesTxt2: I18n.t('chd'),
      status: 'false',
    },
  ]);
  const PlacesToVist = [
    {
      id: 1,

      PlacesImg: require('../assets/SukhnaLake.png'),
      PlacesTxt1: I18n.t('SuLake'),
      PlacesTxt2: I18n.t('chd'),
      category: I18n.t('lake') + I18n.t('boating'),
    },
    {
      id: 2,
      PlacesImg: require('../assets/Elante.jpeg'),
      PlacesTxt1: I18n.t('elante'),
      PlacesTxt2: I18n.t('chd'),
      category: I18n.t('shopping'),
    },
    {
      id: 3,
      PlacesImg: require('../assets/RockGarden.webp'),
      PlacesTxt1: I18n.t('rock'),
      PlacesTxt2: I18n.t('chd'),
      category: I18n.t('garden'),
    },
    {
      id: 4,
      PlacesImg: require('../assets/RoseGarden.webp'),
      PlacesTxt1: I18n.t('rose'),
      PlacesTxt2: I18n.t('chd'),
      category: I18n.t('garden'),
    },
    {
      id: 5,
      PlacesImg: require('../assets/mansadevi.jpg'),
      PlacesTxt1: I18n.t('mansa'),
      PlacesTxt2: I18n.t('chd'),
      category: I18n.t('temple'),
    },
    {
      id: 6,
      PlacesImg: require('../assets/museum.jpg'),
      PlacesTxt1: I18n.t('museum'),
      PlacesTxt2: I18n.t('chd'),
      category: I18n.t('museum'),
    },
  ];
  let arr = [...PopularPlaces];

  const newArray = i => {
    if (arr[i].status == true) {
      arr[i].status = false;
      AsyncStorage.setItem('likeStatus', JSON.stringify(arr));
      setPopularPlaces(arr);
    } else {
      arr[i].status = true;
      AsyncStorage.setItem('likeStatus', JSON.stringify(arr));
      setPopularPlaces(arr);
    }
    const newData = PopularPlaces.filter(item => item.status == true).map(
      ({PlacesImg, PlacesTxt1, PlacesTxt2, status}) => ({
        PlacesImg,
        PlacesTxt1,
        PlacesTxt2,
        status,
      }),
    );
    {
      newData ? AsyncStorage.setItem('mylikes', JSON.stringify(newData)) : null;
    }
  };
  // const likedButton = () => {};
  const _renderItem_Category = ({item, index}) => {
    return (
      <Categories
        filter={t => filterList(t)}
        Img={item.Img}
        Title={item.Title}
        index={index}
        cat_click={index => setCategories(index)}
        Color={index == categories ? Design.primaryColor : Design.tertiaryColor}
        tint={index == categories ? 'white' : 'black'}
        navigation={props.navigation}
      />
    );
  };
  const _renderItem_PopularPlaces = ({item, index}) => {
    return (
      <PopularImages
        status={item.status}
        index={index}
        PlacesImg={item.PlacesImg}
        PlacesTxt1={item.PlacesTxt1}
        PlacesTxt2={item.PlacesTxt2}
        navigation={props.navigation}
        button={index => newArray(index)}
        // likedButton={() => likedButton()}
        liked={
          item.status == true
            ? require('../assets/heart.png')
            : require('../assets/unlike.png')
        }
      />
    );
  };

  const _renderItem_PlacesToVisit = ({item, index}) => {
    return (
      <ToVistImg
        PlacesImg={item.PlacesImg}
        PlacesTxt1={item.PlacesTxt1}
        PlacesTxt2={item.PlacesTxt2}
        navigation={props.navigation}
      />
    );
  };
  const [filterData, setFilterData] = useState(PlacesToVist);

  const filterList = t => {
    if (t == I18n.t('all')) {
      setFilterData(PlacesToVist);
    } else {
      const newData = PlacesToVist.filter(item => {
        return item.category.toUpperCase().indexOf(t.toUpperCase()) > -1;
      });

      setFilterData(newData);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Design.primaryColor}}>
      <View
        style={{
          backgroundColor: Design.secondaryColor,
          flex: 1,
        }}>
        <Topbar
          location={I18n.t('chd')}
          latest={I18n.t('latest')}
          news={I18n.t('news')}
          MyMenu={() => props.navigation.navigate('Contact')}
          News={() => props.navigation.navigate('News')}
          Map={() => props.navigation.navigate('Map')}
        />

        <View
          style={{
            paddingVertical: 10,
          }}>
          <Text style={CSS.HomeText1}>{I18n.t('cat')} </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={HomeCategories}
            renderItem={_renderItem_Category}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {categories == 0 ? (
            <>
              <View>
                <Text style={CSS.HomeText1}>{I18n.t('rec')} </Text>
                <SliderBox
                  style={{
                    height: 200,
                    marginHorizontal: 10,
                    width: Dimensions.get('screen').width * 0.95,
                  }}
                  images={Recomended}
                  dotColor={'blue'}
                  circleLoop
                  autoplay
                />
              </View>

              <View style={{borderRadius: 15}}>
                <Text style={CSS.HomeText1}>{I18n.t('popular')} </Text>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  data={PopularPlaces}
                  renderItem={_renderItem_PopularPlaces}
                />
              </View>
            </>
          ) : null}

          <Text style={CSS.HomeText1}>{I18n.t('places')} </Text>
          <FlatList
            // inverted={-1}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={filterData}
            renderItem={_renderItem_PlacesToVisit}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
