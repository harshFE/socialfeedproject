import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import { UserData } from './src/components/UserData';
import MainImage from './src/components/MainImage';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import LikeCommentUI from './src/components/LikeCommentUI';
import CustomStatusBar from './src/components/CustomStatusBar';
import ProfileDetails from './src/components/ProfileDetails';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <CustomStatusBar />
      <FlatList
        data={UserData}
        renderItem={({item}) => (
          <View style={styles.box}>
            <ProfileDetails item={item}/>
            <MainImage item={item}/>
            <Text style={styles.item}>{item.post}</Text>
            <LikeCommentUI />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f5f9fa',
    borderColor: 'black',
    borderWidth: 1,
    margin: responsiveWidth(3),
  },
  item: {
    fontSize: responsiveFontSize(2.1),
    padding: responsiveHeight(1.4),
    color: '#292a2b',
    marginLeft: responsiveWidth(1),
    marginBottom: responsiveHeight(0.7),
  }
});
export default App;