import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CardWelcomeHome = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>¡Bienvenido!</Text>
            <Text style={styles.subTitle}>Jose Perez Joglar</Text>
            <Text style={styles.extraInfo}>Cumpleaños: 18 de octubre</Text>
        </View>
    )
}

export default CardWelcomeHome;