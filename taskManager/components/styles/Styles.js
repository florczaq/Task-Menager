import {StyleSheet} from 'react-native';
import {colors, font} from '../properties/colors';

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
    textShadowOffset: {width: 3, height: 3},
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
    textShadowOffset: {width: 2, height: 2},
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
    width: '90%',
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
  },
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: '45%',
    marginBottom: 20,
    zIndex: 4,
  },
  taskTitle: {
    fontSize: 28,
    width: '50%',
    textAlign: 'left',
  },
  description: {
    fontSize: 15,
    minWidth: '90%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  date: {
    fontSize: 17,
  },
  scrollView: {
    width: '100%',
  },
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
  },
});
