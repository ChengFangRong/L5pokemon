import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, SectionList, TouchableOpacity } from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const dataSource = [

    {data:[

            {
                name: 'blubasaur' ,
                image: require('./img/bulbasaur166.png'),
                link: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_166-2x.png'
            },
            {
                name: 'ivysaur' ,
                image: require('./img/ivysaur167.png'),
                link: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_167-2x.png'
            },

        ],
        title: "grass ", bgColor: 'lightgreen', icon: 'leaf'},

    {data:[

            {
                name: 'clefairy' ,
                image: require('./img/clefairy.png'),
                link: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_035-2x.png'
            },
            {
                name: 'mew' ,
                image: require('./img/mew151.png'),
                link: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151-2x.png'
            },
            {
                name: 'mew' ,
                image: require('./img/mew193.png'),
                link: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_193-2x.png'
            },

        ],
        title: "fairy ", bgColor: 'lightpink', icon: 'star'},

    {data:[

            {
                name: 'eevee' ,
                image: require('./img/eevee.png'),
                link: 'https://dz3we2x72f7ol.cloudfront.net/expansions/133/en-us/SV3pt5_EN_035-2x.png'
            },
            {
                name: 'vaporeon' ,
                image: require('./img/vaporeon134.png'),
                link: 'https://dz3we2x72f7ol.cloudfront.net/expansions/136/en-us/SV3pt5_EN_193-2x.png'
            },
            {
                name: 'jolteon' ,
                image: require('./img/jolteon135.png'),
                link: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_135-2x.png'
            },
            {
                name: 'flareon' ,
                image: require('./img/flareon136.png'),
                link: 'https://dz3we2x72f7ol.cloudfront.net/expansions/136/en-us/SV3pt5_EN_193-2x.png'
            },


        ],
        title: "eeveelution >:3 ", bgColor: 'grey', icon: 'heart'},



]









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


const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={[styles.container, {flexDirection: 'row'}]}>
            <Text style={[styles.textStyle, {flex:2}]}>{item.name}</Text>
            <Image source={item.image} style={{ width: 140, height: 200}} />
        </TouchableOpacity>
    );
}


const App = () => {
    return (
        <View style={{padding: 20, paddingTop: 40}}>
            <Button title="Add Pokemon"></Button>

            <ScrollView>
                <View style={[{marginBottom:20, margin: 10}]}>
                    <StatusBar hidden={true} />
                    <SectionList sections={dataSource} renderItem={renderItem}
                                 renderSectionHeader={({section:{title, bgColor, icon}}) => (
                                     <Text style={[styles.headerText, { backgroundColor:bgColor}]}><Icon name={icon} size={20}/> {title}<Icon /></Text>

                                 )}/>


                </View>




            </ScrollView>

        </View>
    );
};



































export default App;

