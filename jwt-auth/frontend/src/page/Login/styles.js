import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#bbe1fa'
  },

  inputsContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#0f4c75',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15
  },

  input: {
    height: 40,
    width: '100%', 
    borderColor: '#FFF',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#FFF'
  },
  
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#DDD',
    marginLeft: 10,
    marginBottom: 5
  },

  submitButton: {
    width:  '100%',
    height: 50,
    backgroundColor: '#1b262c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },

  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  }
});