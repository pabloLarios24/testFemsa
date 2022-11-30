import React, { useEffect, useState } from 'react';
import {ScrollView, View} from 'react-native'
import Button from '../../components/button';
import { getProductsApi } from '../../http/services/apiServices';
import { ProductInterface } from '../../types/productTypes';
import HomeScreen from './HomeScreen';

import styles from './styles';

const HomeController: React.FC = () => {
    const [ products, setProducts ] = useState<ProductInterface []>([]);
    const [ productsToRender, setProductsToRender ] = useState<ProductInterface []>([]);

    useEffect(()=>{
        getProducts();
    },[])

    const chooseChanges = () => {
        const productsTem = products.filter((item) => !item.is_redemption);
        setProductsToRender(productsTem);
    }

    const chooseWins = () => {
        const productsTem = products.filter((item) => item.is_redemption);
        setProductsToRender(productsTem);
    }

    const getProducts = async () => {
        try{
            const productsRes = await getProductsApi();
            setProducts(productsRes);
            setProductsToRender(productsRes)
        }catch {

        }
    }

    console.log({productsToRender: products})

    return(
        <View>
            <View style={styles.containerScreen}>
                <ScrollView >
                    <HomeScreen products={productsToRender}/>
                </ScrollView>
            </View>
            <View style={styles.containerButtons}>
                <Button text='Canjeados' onPress={chooseChanges} />
                <Button text='Ganados' onPress={chooseWins} />
            </View>
        </View>
    )
}

export default HomeController;