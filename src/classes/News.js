import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function News() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url =
      'https://newsapi.org/v2/everything?q=tesla&from=2023-08-13&sortBy=publishedAt&apiKey=e5ab757e9e634aa1b1b7bbd1e95083ac';
    let result = await fetch(url);
    result = await result.json();
    setData(result?.articles);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'grey'}}>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>NEWS</Text>
      <View style={{padding: 10, backgroundColor: 'white'}}>
      
        {data ? (
          <FlatList
            keyExtractor={item => item.id}
            data={data}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    borderBottomWidth: 1,
                    marginBottom: 30,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{height: 150, width: 150, margin: 10}}
                      source={{uri: item.urlToImage}}
                    />
                    <View>
                      <Text
                        style={{
                          fontWeight: '600',
                          width: 235,
                        }}>
                        {item.title}
                      </Text>
                      <Text style={{width: 230}}>{item.description}</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                    <Text style={{color: 'blue'}}>{item.url}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}
