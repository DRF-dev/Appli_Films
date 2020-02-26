const initialState = { filmVue: [] }

function toggleVue(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_VUE':
      const VueIndex = state.filmVue.findIndex(item => item.id === action.value.id)
      if (VueIndex !== -1) {
        nextState = {
          ...state,
          filmVue: state.filmVue.filter( (item, index) => index !== VueIndex)
        }
      }
      else {
        nextState = {
          ...state,
          filmVue: [...state.filmVue, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleVue