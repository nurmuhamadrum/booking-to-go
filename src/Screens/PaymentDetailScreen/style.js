import { StyleSheet } from 'react-native';

const blueColor = '#3A5896';
const borderGreyColor = 'rgb(239, 239, 239)';
const greyColor = '#343A40'

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
  numberStepCircle: {
    width: 28,
    height: 28,
    backgroundColor: blueColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: 8
  },
  titleNumberStep: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  titleStep: {
    fontWeight: 'bold'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    borderBottomWidth: 1.5,
    borderColor: borderGreyColor,
    justifyContent: 'center'
  },
  contentContainer: {
    padding: 12
  },
  titleDetail: {
    fontWeight: 'bold'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    borderWidth: 1.5,
    borderColor: borderGreyColor,
    borderRadius: 16,
    marginTop: 8,
  },
  titleCard: {
    fontWeight: 'bold',
    color: blueColor,
    marginBottom: 4
  },
  subtitleCard: {
    fontSize: 12,
    color: greyColor,
    lineHeight: 16
  },
  imageCard: {
    width: 64,
    height: 64,
    resizeMode: 'cover',
    borderRadius: 12,
    marginRight: 8
  },
  titleCardContainer: {
    maxWidth: '80%'
  },
  titleCheckContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  titleRefundContainer: {
    marginTop: 10,
    display: 'flex',
    alignSelf: 'flex-end'
  },
  titleRefund: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 12
  },
  divider: {
    height: 1.5,
    backgroundColor: borderGreyColor,
    marginVertical: 14
  },
  cardContainerOrder: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    borderWidth: 1.5,
    borderColor: borderGreyColor,
    borderRadius: 16,
    marginVertical: 8,
  },
  emailContainer: {
    marginTop: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleEdit: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: blueColor
  },
  iconUser: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 8
  },
  cardContainerUser: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    height: 48,
    borderWidth: 1.5,
    borderColor: borderGreyColor,
    borderRadius: 16,
    marginTop: 8,
    alignItems: 'center'
  },
  editGuestDataContainer: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  radioButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: blueColor,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6
  },
  circleRadioActive: {
    width: 10,
    height: 10,
    backgroundColor: blueColor,
    borderRadius: 100
  },
  circleRadioInActive: {
    width: 10,
    height: 10,
    backgroundColor: '#FFF',
    borderRadius: 100
  },
  radioButtonItem: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 4
  },
  radioButtonContainer: {
    marginVertical: 4
  }
});