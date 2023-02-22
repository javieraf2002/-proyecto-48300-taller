import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  // VARIABLES
  
  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState([]);

  // EVENTOS

  const onChangeText = (text) =>{
    setItemText(text);
  }

  const addItem = () =>{
    setItems(oldArray => [...oldArray, {id: Date.now(), value: itemText}]);
    setItemText('');
  }

  // PARA VERIFICAR
  
  useEffect(()=>{
    console.log('items: ', items);
  }, [items]);

  return(
    <View style={styles.ST_container}>
      {/* TITULO DE LA PANTALLA */}
      <Text style={{
        paddingTop:40,
      }} 
      >Lista de Items</Text>
      
      {/* INGRESO DE LOS ITEMS */}
      <View style={styles.ST_inputContainer}>
        <TextInput placeholder='Item de la lista' style={styles.ST_textInput} onChangeText={onChangeText} />
        <Button title='Agregar' onPress={addItem} />
      </View>

      {/* LISTA DE ITEMS */}
      <View style={styles.ST_itemsContainer}>
        {
          items.map(item => <Text key={item.id} style={styles.ST_Text} > {item.value} </Text>)
        }
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  ST_container:{
    padding:30,
  },
  ST_inputContainer:{
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  ST_textInput:{
    borderBottomColor:'black',
    borderBottomWidth: 1,
    height:50,
    width:200,
  },
  ST_itemsContainer:{
    marginTop:50,
  },
  ST_Text:{
    padding: 10,
    textAlign: 'center',
    color: 'green',
  },
})

