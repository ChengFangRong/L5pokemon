import React, {useState} from 'react'
import {dataSource} from "./Data";
import {TextInput, View, Text, Button, Alert} from "react-native";

const Edit = ({navigation, route}) => {

    const [name, setName] = useState(route.params.name);
    const [number, setNumber] = useState(route.params.number);

    return (
        <View style={{paddingTop: 50}}>

            <Text style={{textAlign: 'center',padding: 20,color:'white', backgroundColor: 'darkblue'}}>Edit {name}</Text>

            <View style={{padding: 20}}>
                <Text style={{fontWeight: 'bold'}}>Name:</Text>

                <TextInput value={name} style={{borderWidth: 1}}
                           onChangeText = {(text)=> setName(text)}/>
            </View>

            <View style={{padding: 20}}>
                <Text style={{fontWeight: 'bold'}}>Number:</Text>

                <TextInput value={number} style={{borderWidth: 1}} keyboardType="numeric"
                           onChangeText={(text) => {
                               if (!isNaN(text)) {  // Ensure it's a number // i chat gpted this part i was gonna lose my mind on why my code cant work :C
                                   setNumber(text);
                               }
                           }} />
            </View>

            <View>
                <Button
                    style={{flex: 1, margin: 10}}
                    title = "Save"
                    onPress={() => {
                        let indexNum;

                        if (route.params.type === 'grass') {
                            indexNum = 0;
                        }
                        if (route.params.type === 'fairy') {
                            indexNum = 1;
                        }
                        if (route.params.type === 'eeveelution') {
                            indexNum = 2;
                        }
                        dataSource[indexNum].data[route.params.index].name = name;
                        dataSource[indexNum].data[route.params.index].number = Number(number);
                        navigation.navigate("Home");
                    }

                    }/>


                <Button
                    style={{flex: 1, margin: 10}}
                    title = "Delete"
                    onPress={() => {
                        let indexNum = 1;

                        if (route.params.type === 'grass') {
                            indexNum = 0;
                        }
                        if (route.params.type === 'fairy') {
                            indexNum = 1;
                        }
                        if (route.params.type === 'eeveelution') {
                            indexNum = 2;
                        }
                        Alert.alert("Are you sure?", '' ,
                            [{text: 'Yes', onPress: () => {
                                    dataSource[indexNum].data.splice(route.params.index , 1); //splice - delete
                                    navigation.navigate("Home");
                                }},
                                {text: 'No'}])



                    }}

                />
                <Button title = "Home"
                    onPress={() => {
                        navigation.navigate("Home");
                    }}/>
            </View>

        </View>
    );
};



export default Edit;
