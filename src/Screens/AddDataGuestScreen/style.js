import { StyleSheet } from 'react-native';

const blueColor = '#3A5896';
const borderGreyColor = 'rgb(239, 239, 239)';
const orangeColor = '#FF8136';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 54,
    alignItems: 'center',
    backgroundColor: blueColor,
    paddingHorizontal: 12
  },
  titleContainer: {
    display: 'flex',
    width: '90%',
    alignItems: 'center'
  },
  arrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  titleHeader: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold'
  },
  contentContainer: {
    padding: 12,
  },
  titleDataGuest: {
    fontSize: 16,
    fontWeight: 'bold',
    color: blueColor,
    marginBottom: 12
  },
  input: {
    height: 54,
    width: '70%',
    borderWidth: 1,
    padding: 10,
    borderColor: borderGreyColor,
    borderRadius: 10,
    marginRight: 12
  },
  iconTrash: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  genderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    width: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: borderGreyColor,
    borderRadius: 10,
    marginRight: 12
  },
  contentEditContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  titleGender: {
    fontSize: 16,
    fontWeight: 'bold',
    color: blueColor
  },
  addDataContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  titleAddData: {
    fontWeight: 'bold',
    color: orangeColor,
    textDecorationLine: 'underline'
  },
  buttonSave: {
    display: 'flex',
    width: '100%',
    height: 50,
    backgroundColor: orangeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  titleButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});