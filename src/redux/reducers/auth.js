
const initialState = {
  dataLogin: '',
}

const auth = (state=initialState, action) => {
  switch(action.type){
    case 'DATALOGIN': {
      return {
        ...state,
        dataLogin: action.meta
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default auth