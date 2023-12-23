//This Component Customizes the staus bar in android mobiles/emulator.
/*Caution:This statusbar code might not work in iphone mobiles/emulator
which can cause whole code not run in iphone, so if code is showing
error in iphone then please remove this section, then code will work.*/

import { View, StatusBar} from 'react-native'
import React from 'react'

const CustomStatusBar = () => {
  return (
    <View>
      <StatusBar
        backgroundColor="#f5f9fa"
        barStyle="dark-content"
        hidden={false}
      />
    </View>
  )
}

export default CustomStatusBar;