import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../utils/scaleMetrics";

const styles = StyleSheet.create({
    titleText:{
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        color:'black',
        marginTop: verticalScale(15),
        marginBottom: verticalScale(10)
    },
    containerButtons:{
        width: '100%',
        height: verticalScale(90),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: moderateScale(15)
    },
    containerScreen:{
        width: '100%',
        height: verticalScale(590),
    }
})

export default styles;