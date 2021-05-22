import React, { useEffect, useState } from 'react';
import {ScrollView, View} from 'react-native';
import BasicJavaScript from './pages/BasicJavascript';
import CallAPIAxios from './pages/CallAPIAxios';
import CallAPIVanilla from './pages/CallAPIVanilla';
import Communication from './pages/Communication';
import FlexBox from './pages/FlexBox';
import LocalAPI from './pages/LocalAPI';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import ReactNativeSvg from './pages/ReactNativeSvg';
import SampleComponent from './pages/SampleComponent';
import StateDinamis from './pages/StateDinamis';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, setIsShow] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false)
  //   }, 6000);
  // }, [])

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/> */}
        {/* <StylingComponent/> */}
        {/* {isShow && <FlexBox/>} */}
        {/* <Position/> */}
        {/* <PropsDinamis/> */}
        {/* <StateDinamis/> */}
        {/* <Communication/> */}
        {/* <BasicJavaScript/> */}
        {/* <ReactNativeSvg/> */}
        {/* <CallAPIVanilla/> */}
        {/* <CallAPIAxios/> */}
        <LocalAPI/>
      </ScrollView>
    </View>
  )
}

export default App;