import React from "react";
import { Text, View, StyleSheet } from "react-native";
//import { View } from "../components/Themed";
import Message from "../components/Message";
import chatRoomData from '../assets/dummy-data/Chats';

export default function ChatRoomScreen() {

    return (
        <View style={styles.page}>
            <Message message={chatRoomData.messages[2]}/>
        </View>
       
    )

};


const styles = StyleSheet.create({

    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})