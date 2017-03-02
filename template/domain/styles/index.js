import StyleSheet from 'stilr'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '0px 25px'
  },
  titleAndButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  headersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  clientsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'white',
    border: '1px solid grey'
  },
  client: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '100%',
    padding: '0px 10px',
    borderBottom: '1px solid grey',
    cursor: 'pointer',
    ':hover': {                 // Pseudo Selectors are allowed
      backgroundColor: 'grey'
    }
  },
  clientColumn: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    width: '50%'
  },
  createClient: {
    height: 25,
    width: 100,
    margin: '0px 10px'
  }
})
