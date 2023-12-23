import {View, Text,Image} from 'react-native';
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';
import React from 'react';

const ProfileDetails = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{marginVertical: responsiveHeight(1),marginLeft: responsiveWidth(2.5),marginRight: responsiveWidth(0.7)}}>
        <Image 
        source={{uri: 'https://picsum.photos/200'}}
          style={{
            width: responsiveWidth(8),
            height: responsiveWidth(8),
            borderRadius: responsiveWidth(4),
            borderColor: 'brown',
            borderWidth: 1,
          }}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontWeight: '800',color: '#000',marginLeft: responsiveWidth(1.7),fontSize: responsiveFontSize(1.6),letterSpacing: 0.3}}>
          {props.item.name}
        </Text>
        <Text style={{fontWeight: '600',fontSize: responsiveFontSize(1.6)}}>
          @{props.item.name}
        </Text>
      </View>
    </View>
  );
};

export default ProfileDetails;
