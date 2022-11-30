import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../screens/utils/scaleMetrics";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: verticalScale(130),
        backgroundColor: 'aqua',
        borderBottomRightRadius: moderateScale(15),
        borderBottomLeftRadius: moderateScale(15),
        paddingTop: verticalScale(40),
        paddingHorizontal: moderateScale(10)
    },
    titleText:{
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        color:'black'
    },
    subTitle:{
        fontSize: moderateScale(16),
        color:'black',
        marginTop: verticalScale(10)
    },
    extraInfo:{
        fontSize: moderateScale(14),
        color:'black',
        marginTop: verticalScale(10)
    }
})

export default styles;