import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardBackground: {
    borderWidth: 10,
    borderColor: '#ffaf78',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    padding: 4,
    borderRadius: 5,
    backgroundColor: '#ff1320'
  },
  cardRow: {
    width: '100%',
    marginBottom: 2,
    flexDirection: 'row',
    height: '24.5%',
  },
  slot: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#001bff',
    padding: 10,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotSelected: {
    backgroundColor: '#81d4ff',
  },
  slotImg: {
    height: 50,
    width: 50
  }
});
