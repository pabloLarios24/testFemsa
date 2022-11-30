import React from 'react';
import {View, Text, Image} from 'react-native';
import { ProductInterface } from '../../types/productTypes';

import styles from './styles';

interface Props {
    product: ProductInterface
}

const CardProduct = ({product}: Props) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={{uri: product.image}} style={styles.image}/>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfo}>{product.product}</Text>
                <Text style={styles.textInfo}>{`${product.is_redemption ? '+' : '-'} $${product.price}`}</Text>
            </View>
            <View style={styles.containerIcon}>
                <Text style={styles.icon}>></Text>
            </View>
        </View>
    )
}

export default CardProduct;