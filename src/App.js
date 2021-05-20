import React from 'react';
import {ScrollView, View} from 'react-native';
import MateriFlexBox from '../MateriFlexBox';
import PositionReactNative from '../PositionReactNative';
import SampleComponent from '../SampleComponent';
import StylingReactNativeComponent from '../StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/>
        <StylingReactNativeComponent/>
        <MateriFlexBox/> */}
        <PositionReactNative/>
      </ScrollView>
    </View>
  )
}

export default App;