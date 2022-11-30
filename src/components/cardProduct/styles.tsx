import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../screens/utils/scaleMetrics";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: '#D4D4D4',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(5),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(10)
    },
    containerImage:{
        flex: .2
    },
    containerInfo:{
        flex: .7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerIcon:{
        flex: .1,
        alignItems: 'flex-end'
    },
    image:{
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        backgroundColor: 'white'
    },
    textInfo: {
        fontSize: moderateScale(14),
        color: 'black'
    },
    icon: {
        fontSize: moderateScale(14),
        color: 'white'
    }
})

export default styles;