import React from 'react';
import {StyleSheet, View} from 'react-native';

import Svg from 'react-native-svg';
import {
  VictoryChart,
  VictoryScatter,
  VictoryZoomContainer,
} from 'victory-native';

import chartsData from './chart-data';

export default function App() {
  const events = [
    {
      target: 'data',
      eventHandlers: {
        onPress: () => {
          console.log('Tap');
        },
      },
    },
  ];

  const scatter = (
    <VictoryScatter
      size={15}
      events={events}
      data={chartsData}
      samples={chartsData.length}
    />
  );

  return (
    <View style={styles.container}>
      {/* onPress works well on Android devices with Svg wrapper as workaround */}
      <VictoryChart width={400} height={300} containerComponent={<Svg />}>
        {scatter}
      </VictoryChart>

      {/* onPress doesn't work at all on Android devices */}
      <VictoryChart
        containerComponent={
          <VictoryZoomContainer
            allowZoom={false}
            zoomDomain={{
              x: [0, 7],
              y: [0, 16],
            }}
          />
        }>
        {scatter}
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
