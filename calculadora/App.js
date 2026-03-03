import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOflines={1}> 1000
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayContainer:{
    flex: 2.5,
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  displayText:{
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: '300',
  },
  row: {
    flex:1,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 10,

  },
  },
);
