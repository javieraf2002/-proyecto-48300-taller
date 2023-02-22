import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return(
    <View style={styles.ST_container}>
      {/* TITULO DE LA PANTALLA */}
      <Text style={{
        paddingTop:40,
      }} 
      >Lista de Items</Text>
      
      {/* INGRESO DE LOS ITEMS */}
      <View style={styles.ST_inputContainer}>
        <TextInput placeholder='Item de la lista' style={styles.ST_textInput} />
        <Button title='Agregar' />
      </View>

      {/* LISTA DE ITEMS */}
      <View style={styles.ST_itemsContainer}>
        <Text style={styles.ST_Text}>Item 1.</Text>
        <Text style={styles.ST_Text}>Item 2.</Text>
        <Text style={styles.ST_Text}>Item 3.</Text>
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

