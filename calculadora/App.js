import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
          <Text style={styles.displayText} numberOfLines={1}>
              1000
          </Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.functionButton}>
          <Text style = {styles.functionText}>C</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.functionButton}>
          <Text style = {styles.functionText}>+/-</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.functionButton}>
          <Text style = {styles.functionText}>%</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.operatorButton}>
          <Text style = {styles.operatorText}>÷</Text>
        </TouchableOpacity>
      </View> 
      <View style={styles.row}></View>
        <TouchableOpacity style={styles.buttonText}>
          <Text style = {styles.buttonText}>7</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonText}>
          <Text style = {styles.buttonText}>8</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonText}>
          <Text style = {styles.buttonText}>9</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.operatorButton}>
          <Text style = {styles.operatorText}>X</Text>
        </TouchableOpacity>
      </View>

      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  displayContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  displayText: {
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: '300',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  operatorButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height:'75%',
    backgroundColor: '#FF9500',
  },
   functionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height:'75%',
    backgroundColor: '#A5A5A5',
  },
  operatorText: {
    color: '#fff',
    fontSize:36,
  },
  functionText: {
    color: '#000',
    fontSize:28,
  },
  buttonNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height:'75%',
    backgroundColor: '#333333',
  },
  buttonText: {
    color: 'fff',
    fontSize:32,
  },
  doubleWidthButton: {
    flex: 2,
    alignItems:'flex-start',
    paddingLeft: 32,
  }
}
);