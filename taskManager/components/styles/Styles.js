import { StyleSheet } from 'react-native';
import { colors, font } from '../properties/colors';

export const general = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#edf6f9',
  },
});

export const header = StyleSheet.create({
  upperContainer: {
    position: 'absolute',
    width: '100%',
    height: '20%',
  },
  upperRect: {
    width: '100%',
    height: '80%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  upperText: {
    color: '#fff',
    fontSize: 50,
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
  },
  upperBackroundRect: {
    position: 'absolute',
    backgroundColor: colors.primary,
    top: '0%',
    width: '150%',
    height: '100%',
    rotation: 5,
    borderWidth: 2,
    zIndex: 5,
  },
  input: {
    color: '#fff',
    fontSize: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    paddingBottom: 5,
    paddingHorizontal: 30,
    minWidth: '40%',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

export const welcomePage = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    height: '60%',
    backgroundColor: 'transparent',
    marginTop: '70%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    backgroundColor: '#fff',
    height: 120,
    margin: 10,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 2,
    elevation: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: font,
  },
});

export const taskList = StyleSheet.create({
  task: {
    backgroundColor: 'rgb(245,245,245)',
    width: '100%',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 10,
    opacity: 0.9
  },
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: '45%',
    marginBottom: 20,
    zIndex: 4,
  },
  taskTitle: {
    fontSize: 20,
    width: '60%',
    textAlign: 'left',
    fontWeight: "700",
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  description: {
    fontSize: 15,
    minWidth: '90%',
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingLeft: '15%',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  date: {
    fontSize: 17,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  scrollView: {
    width: '100%',
  },
  gestureRecognizer: {
    width: "100%"
  },
  emptyListText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "700",
    color: "grey",
    opacity: 0.5
  },
  emptyList: {
    width: "100%",
    alignItems: "center"
  },
  animatedView: {
    width: "95%"
  }
});

export const noteList = StyleSheet.create({
  noteContainer: {
    width: '100%',
    marginTop: '50%',
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  note: {
    width: '40%',
    height: 250,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'grey',
  },
});

export const noteEdit = StyleSheet.create({
  textarea: {
    width: '95%',
    minHeight: '40%',
    maxHeight: '90%',
    borderWidth: 1,
    textAlignVertical: 'top',
    padding: 10,
    borderColor: 'grey',
    fontSize: 25,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  textareaContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 20,
    marginTop: '50%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '100%',
    height: '35%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  confirmationButtonsContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  preferences: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 20,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'grey',
  },
});

export const taskEdit = StyleSheet.create({
  description: {
    width: '80%',
    fontSize: 20,
    height: '10%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  button: {
    width: '70%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: '#fff',
    elevation: 10,
  },
  content: {
    marginTop: '40%',
    width: '100%',
    height: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
  },
  confirmButtonContainer: {
    height: '20%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  confirmButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 2,
    elevation: 10,
  },
  reminderButton: {
    width: '90%',
    height: 70,
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'grey',
    backgroundColor: '#fff',
  },
  reminderButtonText: {
    fontSize: 35,
    fontWeight: '500',
    color: 'grey',
  },
  reminderModal: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
  },
  reminderContainer: {
    width: '100%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reminderScrollViewContainer: {
    width: '90%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reminderScrollView: {
    width: '100%',
    backgroundColor: '#fff',
    elevation: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'grey',
  },
  reminderItemsContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  reminderCloseButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    bottom: -50,
    opacity: 0.9,
  },
  reminderCloseButtonText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '500',
  },

  _reminderButtonSelected_true: {
    backgroundColor: colors.primary,
  },
  _reminderButtonTextSelected_true: {
    color: '#fff',
  },
});

export const colorPicker = StyleSheet.create({
  centerDiv: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 10,
    borderWidth: 4,
    borderColor: 'grey',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  saveButton: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    width: '50%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
