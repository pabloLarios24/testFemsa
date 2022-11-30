import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../utils/scaleMetrics";

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: moderateScale(15)
    },
    titleText:{
        fontSize: moderateScale(32),
        fontWeight: 'bold',
        color:'black',
        marginTop: verticalScale(80)
    },
    containerBanner:{
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aqua',
        borderRadius: moderateScale(10),
        height: verticalScale(400),
        marginTop: moderateScale(20)
    },
    subText:{
        fontSize: moderateScale(32),
        fontWeight: 'bold',
        color:'black'
    },
    pointsText:{
        fontSize: moderateScale(24),
        fontWeight: 'bold',
        color:'black',
        marginTop: verticalScale(30)
    },
    containerButton:{
        marginTop: verticalScale(40),
        width: '100%',
        alignItems: 'center'
    }
})

export default styles;