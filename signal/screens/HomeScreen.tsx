//import { StyleSheet } from 'react-native';
import * as React from 'react';
import { Text, Image, View, StyleSheet, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../assets/dummy-data/ChatRooms';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
// import { RootTabScreenProps } from '../types';

const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];


export default function TabOneScreen() {
  return (
    <View style={styles.page}>
     {/* for stories
      <FlatList
     data={chatRoomsData}
     renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
     showsVerticalScrollIndicator={false}
     horizontal
     listHeaderComponent={() => <Text>Messages</Text>}
     /> */}
      <FlatList
     data={chatRoomsData}
     renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
     showsVerticalScrollIndicator={false}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  }
  
});
