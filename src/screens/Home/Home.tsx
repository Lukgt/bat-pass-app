import React from 'react';
import {Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import { BatLogo } from '../../components/BatLogo/Batlogo';
import { BatTextInput } from '../../components/TextInput/BatTextInput';
import { BatButton } from '../../components/BatButton/BatButton';

export default function Home() {
    return (

        <View style={styles.appContainer}>

            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>

            <View style={styles.inputContainer}>
                <BatButton/>
            </View>
            
            <Text>Home works!!</Text>
            <StatusBar style="light" /> 
        </View>
    )
}
