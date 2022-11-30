import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native'
import Button from '../../components/button';
import { HomeStackParams } from '../../navigation/types/HomeStackParams';
import { ProductInterface } from '../../types/productTypes';

import styles from './styles';

interface Props {
    product: ProductInterface;
}

const ProductDetailScreen: React.FC <Props> = ({product}) => {
    const { goBack } = useNavigation<NativeStackNavigationProp<HomeStackParams>>();
    return(
        <View style={styles.container}>
            <Text style={styles.titleText} numberOfLines={2} >{product.product}</Text>
            <View style={styles.containerBanner}>
                <Text style={styles.subText}>Ganaste</Text>
                <Text style={styles.pointsText} >100 puntos</Text>
            </View>
            <View style={styles.containerButton}>
                <Button text='Regresar' onPress={()=>goBack()}/>
            </View>
        </View>
    )
}

export default ProductDetailScreen;