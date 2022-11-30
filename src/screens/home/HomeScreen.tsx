import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import CardProduct from '../../components/cardProduct';
import CardWelcomeHome from '../../components/cardWelcomeHome';
import { HomeStackParams } from '../../navigation/types/HomeStackParams';
import { ProductInterface } from '../../types/productTypes';

import styles from './styles';

interface Props {
    products: ProductInterface [];
}

const HomeScreen: React.FC <Props> = ({products}) => {
    const { navigate } = useNavigation<NativeStackNavigationProp<HomeStackParams>>();
    return(
        <View>
            <CardWelcomeHome/>
            <Text style={styles.titleText}>Tus movimientos:</Text>
            {
                !!products && products.length ?
                    products.map((product)=>(
                        <TouchableOpacity onPress={()=>navigate('ProductDetail', { product: product })}>
                            <CardProduct product={product} />
                        </TouchableOpacity>
                    ))
                :
                    null
            }
        </View>
    )
}

export default HomeScreen;