import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

export default Chart = () => {
  const chartConfig = {
    backgroundGradientFrom: 'blue',
    backgroundGradientFromOpacity: 0.25,
    backgroundGradientTo: 'black',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 18],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  };
  const screenWidth = Dimensions.get('window').width;

  const dataProgress = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };

  const dataBar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const dataStacked = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  };

  const dataPie = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  const commitsData = [
    {date: '2017-01-02', count: 1},
    {date: '2017-01-03', count: 2},
    {date: '2017-01-04', count: 3},
    {date: '2017-01-05', count: 4},
    {date: '2017-01-06', count: 5},
    {date: '2017-01-30', count: 2},
    {date: '2017-01-31', count: 3},
    {date: '2017-03-01', count: 2},
    {date: '2017-04-02', count: 4},
    {date: '2017-03-05', count: 2},
    {date: '2017-02-30', count: 4},
  ];

  const [change, setChange] = useState(true);
  const [pie, setPie] = useState(true);
  const [bezier, setBezier] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text> Line Chart</Text>
        <Text style={{fontSize: 10}}>Click on graph to see bezier graph</Text>
        <TouchableOpacity onPress={() => setBezier(!bezier)}>
          <LineChart
            data={data}
            width={screenWidth}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier={!bezier}
          />
        </TouchableOpacity>

        <Text> Progress Chart</Text>
        <TouchableOpacity onPress={() => setChange(!change)}>
          <ProgressChart
            data={dataProgress}
            width={screenWidth}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={change}
            style={
              change ? {backgroundColor: null} : {backgroundColor: 'black'}
            }
          />
        </TouchableOpacity>

        <Text> Bar Chart</Text>
        <TouchableOpacity>
          <BarChart
            // style={{height: 300}}
            data={data}
            width={screenWidth}
            height={270}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={15}
          />
        </TouchableOpacity>
        <Text> Stacked Chart</Text>
        <TouchableOpacity>
          <StackedBarChart
            // style={graphStyle}
            data={dataStacked}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPie(!pie)}>
          <Text> Pie Chart</Text>
          <PieChart
            data={dataPie}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={pie ? 'transparent' : 'black'}
            paddingLeft={'15'}
            // center={[10, 50]}
            // absolute
            hasLegend={!pie}
          />
        </TouchableOpacity>
        <Text> ContributionGraph</Text>
        <TouchableOpacity>
          <ContributionGraph
            values={commitsData}
            endDate={new Date('2017-04-01')}
            numDays={105}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
