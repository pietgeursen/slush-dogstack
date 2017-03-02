import StyleSheet from 'stilr'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '0px 25px'
  },
  nameAndButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid grey'
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    height: 25,
    width: 100,
    margin: '0px 10px'
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  formElement: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 5
  },
  label: {
    fontSize: '0.8em',
    marginBottom: 5
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,
    width: 250,
    padding: '0px 10px',
    backgroundColor: 'white'
  }
})
