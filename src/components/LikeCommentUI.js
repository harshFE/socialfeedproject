import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const LikeCommentUI = () => {

  return (
    <View style={styles.bottomView}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: responsiveWidth(7.5),
        }}>
        <TouchableOpacity>
          <Image
            source={require('../images/like.png')}
            style={{
              width: responsiveWidth(5.9),
              height: responsiveWidth(5.9),
            }}
          />
        </TouchableOpacity>
        <Text style={styles.count}>0 Likes</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: responsiveWidth(7.5),
        }}>
        <TouchableOpacity>
          <Image
            source={require('../images/commentnew.png')}
            style={{
              width: responsiveWidth(7.5),
              height: responsiveWidth(7.4),
            }}
          />
        </TouchableOpacity>
        <Text style={styles.count}>0 Comments</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  count: {
    color: '#000',
    fontSize: responsiveFontSize(1.95),
    marginLeft: responsiveWidth(2),
  },
  bottomView: {
    width: responsiveWidth(92.5),
    flexDirection: 'row',
    marginBottom: responsiveHeight(1.1),
    // borderWidth:0.3,
    // borderColor:'#000',   //If Client Wants Border Around Like and Comments then uncomment borderWidth,borderColor and borderRadius
    // borderRadius:7,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f7f6f2',
  },
});

export default LikeCommentUI;
