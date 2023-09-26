import React from 'react';
import {View, Text, Dimensions, SafeAreaView, ScrollView} from 'react-native';
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
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0.25,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.6,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
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

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Bezier Line Chart</Text>
        {/* <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        /> */}
        <LineChart
          data={data}
          width={screenWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          bezier
        />
        <Text> Line Chart</Text>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
        <Text> Progress Chart</Text>
        <ProgressChart
          data={dataProgress}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <Text> Bar Chart</Text>
        <BarChart
          // style={graphStyle}
          data={data}
          width={screenWidth}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
        <Text> Stacked Chart</Text>

        {/* <StackedBarChart
          // style={graphStyle}
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        /> */}
        <StackedBarChart
          data={{
            labels: ['Test1', 'Test2'],
            legend: ['L1', 'L2', 'L3'],
            data: [
              [60, 60, 60],
              [30, 30, 60],
            ],
            barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
          }}
          width={screenWidth} // from react-native
          height={220}
          yAxisLabel={'Rp'}
          chartConfig={{
            backgroundColor: 'green',
            backgroundGradientFrom: 'green',
            backgroundGradientTo: 'green',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `white`,
            labelColor: (opacity = 1) => `white`,
            style: {
              borderRadius: 16,
            },
          }}
          // style={{
          //   marginVertical: 8,
          //   borderRadius: 16,
          // }}
        />
        <Text> Stacked Chart</Text>
        <PieChart
          data={dataPie}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          // center={[10, 50]}
          // absolute
        />
        <Text> ContributionGraph</Text>
        <ContributionGraph
          values={commitsData}
          endDate={new Date('2017-04-01')}
          numDays={105}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
