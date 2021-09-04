import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { PickerIOSComponent, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([
    {name: "Task 1"},
    {name: "Task 2"},
    {name: "Task 3"},
  ])
  const clickHandler = () => {
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Today's Tasks</Text>
     {taskList.map(({name}, index) => (
       <React.Fragment>
         <View style={styles.button}>
       <Text onPress={clickHandler} style={styles.buttonLabel}>{name}</Text>
     </View>
       </React.Fragment>
     ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: "column",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 80,
    fontSize: 35,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5
  },
  buttonLabel: {
    marginHorizontal:"auto",
    color: "#fff"
  }
});
