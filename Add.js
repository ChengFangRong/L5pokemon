import React, {useState} from 'react'
import {dataSource} from "./Data";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('');
    return (
        <View style={{padding: 10, paddingTop: 50}}>

            <Text style={{textAlign: 'center',padding: 20,color:'white', backgroundColor: 'darkblue'}}>Whos that pokemon ?!??!?!</Text>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Name of Pokemon:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setName(text)}/>

            </View>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Number of Pokemon:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setNumber(text)}/>
            </View>

            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value)=>setType(value)}
                    items={[
                        {label:"grass", value:"grass"},
                        {label:"fairy", value:"fairy"},
                        {label:"eeveelution", value:"eeveelution"}
                    ]}
                />
            </View>
            <Button title="SUBMIT"
                    onPress={() => {
                        let item = {name: name, number:number};
                        let indexNum = 1;
                        if (type === 'grass') {
                            indexNum = 0;
                        }
                        if (type === 'fairy') {
                            indexNum = 1;
                        }
                        if (type === 'eeveelution') {
                            indexNum = 3;
                        }

                        dataSource[indexNum].data.push(item);
                        navigation.navigate("Home");
                    }}/>

            <Button title = "Home"
                    onPress={() => {
                        navigation.navigate("Home");
                    }}/>
        </View>
    );
};
export default Add;
