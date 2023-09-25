import React, {useRef, useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Tts from 'react-native-tts';

export default function Practice() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [display, setDisplay] = useState(false);
  const [date, setDate] = useState('09-10-2020');
  const [speechInput, setSpeechInput] = useState('');

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };
  const spk = () => {
    Tts.speak(speechInput, {
      iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
      rate: 0.1,
    });
  };

  const [test, setTest] = useState('');
  const testRef = useRef();

  const submit = () => {
    console.log(testRef.current.value);
  };

  return (
    <SafeAreaView>
      <View>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          // minDate={new Date(2023, 1, 1)}
          // maxDate={new Date(2050, 6, 3)}
          weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          // scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
          // showDayStragglers={true}
          allowBackwardRangeSelect={true}
        />
        <View style={{marginTop: 10}}>
          <Text style={{marginTop: 10}}>Selected Start Date :</Text>
          <Text style={{marginTop: 10}}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
          <Text style={{marginTop: 10}}>Selected End Date :</Text>
          <Text style={{marginTop: 10}}>
            {selectedEndDate ? selectedEndDate.toString() : ''}
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          }}>
          React Native Date Picker – To Pick the Date using Native Calendar
        </Text>
        {display ? (
          <TouchableOpacity onPress={() => setDisplay(!display)}>
            <DateTimePicker
              // style={{width: 200, marginTop: 20}}
              date={date} // Initial date from state
              mode="datetime" // The enum of date, datetime and time
              // display='spinner'
              value={new Date()}
              placeholder="select date"
              format="DD-MM-YYYY"
              // minDate="01-01-2016"
              // maxDate="01-01-2019"
              // confirmBtnText="Confirm"
              // cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  //display: 'none',
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              textColor="blue"
              accentColor="red"
              disabled={true}
              onDateChange={date => {
                setDate(date);
              }}
            />
          </TouchableOpacity>
        ) : (
          <Button
            title="Display Date & Time"
            onPress={() => setDisplay(!display)}
          />
        )}

        <Button title="Speak" onPress={spk} />
        <TextInput
          autoCorrect={false}
          placeholder="enter text"
          onChangeText={e => setSpeechInput(e)}
        />
      </View>
      <TextInput
        placeholder="enter anything"
        ref={testRef}
        textContentType="emailAddress"
        // keyboardType="number-pad"
        passwordRules={true}
        // inputMode="email"
      />
      <Button title="Submit" onPress={() => submit()} />
    </SafeAreaView>
  );
}
