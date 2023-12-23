import { Image } from 'react-native';
import React from 'react';
import { responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions';

const MainImage = (props) => {
  return (
    <Image
              source={{uri: props.item.pics}}
              style={{
                width: responsiveWidth(88),
                height: responsiveWidth(62),
                alignSelf: 'center',
                marginTop: responsiveHeight(1.7),
                borderColor: '#edeff0',
                borderWidth: 2,
                borderRadius: responsiveWidth(2.5),
                // resizeMode:'stretch'  //According to client needs developer can change the way images should be shown to user using resizeMode.Uncomment to use it.
              }}
            />
  )
}

export default MainImage