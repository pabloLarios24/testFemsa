import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../screens/utils/scaleMetrics";

const styles = StyleSheet.create({
    container: {
        width: moderateScale(140),
        height: verticalScale(30),
        borderRadius: moderateScale(10),
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton:{
        fontSize: moderateScale(12),
        fontWeight: 'bold',
        color:'black'
    }
})

export default styles;