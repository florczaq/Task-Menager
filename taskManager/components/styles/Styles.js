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
    marginTop: '60%',
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
