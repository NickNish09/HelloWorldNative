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
    borderRadius: 5,
    backgroundColor: '#ff1320'
  },
  cardRow: {
    width: '100%',
    flexDirection: 'row',
    height: '25%',
  },
  slot: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#001bff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4
  },
  slotSelected: {
    backgroundColor: '#81d4ff',
  },
  slotImg: {
    height: 50,
    width: 50
  },
  luckyButton: {
    height: '50%',
    width: '50%',
    position: 'absolute',
    top: '25%',
    bottom: '25%',
    right: '25%',
    left: '25%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});
