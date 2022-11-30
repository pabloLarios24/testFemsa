import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native'
import { HomeStackParams } from '../../navigation/types/HomeStackParams';
import ProductDetailScreen from './ProductDetailScreen';

const ProductDetail: React.FC = () => {
    const route = useRoute<RouteProp<HomeStackParams, 'ProductDetail'>>();
    const { product } = route.params;
    return(
        <ScrollView>
            <ProductDetailScreen product={product} />
        </ScrollView>
    )
}

export default ProductDetail;