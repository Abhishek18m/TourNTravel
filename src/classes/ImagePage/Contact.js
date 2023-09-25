import React from 'react';
import {SectionList, StyleSheet, Text, SafeAreaView} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
const List = [
  {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
  {
    title: 'J',
    data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
  },

  {title: 'F', data: ['Fevin', 'Fan', 'Fminic']},
  {
    title: 'K',
    data: ['Kackson', 'Kames', 'Killian', 'Kimmy', 'Koel', 'Kohn', 'Kulie'],
  },
  {
    title: 'P',
    data: ['Packson', 'Pames', 'Pillian', 'Pimmy', 'Poel', 'Pohn', 'Pulie'],
  },
];
const SectionListBasics = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={List}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </SafeAreaView>
  );
};

export default SectionListBasics;

