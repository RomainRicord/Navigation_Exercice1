import {Text,Button,Platform, Pressable,Image,View} from 'react-native'

const HomeScreen = ({navigation}) => (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Image style={{width:600,height:600}} source={require('../../assets/img/giphy.gif')}></Image>
    </View>
)

export default HomeScreen