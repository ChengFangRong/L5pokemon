import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, SectionList, TouchableOpacity } from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import {dataSource} from "./Data";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'lightgrey',


    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        padding: 5
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
});







const Home = ({navigation}) => {


    const renderItem = ({item, section, index}) => {
        return (
            <TouchableOpacity style={[styles.container, {flexDirection: 'row'}]}
                onPress={() => navigation.navigate('Edit' , {index: index, type:section.title, name:item.name, number:item.number})}>
            >

                <TouchableOpacity style={{flex:2}}>
                    <Text style={[styles.textStyle]}>{item.name}</Text>

                </TouchableOpacity>

                <Image source={{uri: `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.number}.png`}} style={{ width: 140, height: 200}} />

            </TouchableOpacity>
        );
    }



    return (
        <View style={{padding: 20, paddingTop: 40}}>
            <Button title="Add Pokemon"
                onPress={() => {
                    navigation.navigate('Add');
                }}></Button>

            <ScrollView>

                <View style={[{marginBottom:20, margin: 10}]}>

                    <StatusBar hidden={true} />
                    <SectionList sections={dataSource} renderItem={renderItem}
                                 renderSectionHeader={({section:{title, bgColor, icon}}) => (
                                     <Text style={[styles.headerText, { backgroundColor:bgColor}]}><Icon name={icon} size={20}/>
                                         {title}<Icon />
                                     </Text>

                                 )}/>

                </View>

            </ScrollView>

        </View>
    );
};




export default Home;

