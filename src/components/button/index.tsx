import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface Props {
    text: string;
    onPress: () => void
}

const Button = ({ text, onPress }: Props) => {
    return(
        <TouchableOpacity style={styles.container} onPress={()=>onPress()}>
            <Text style={styles.textButton} >{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;