// ------------------------------------
// Constants
// ------------------------------------
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// ------------------------------------
// Actions
// ------------------------------------
export function setVisibilityFilter (filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
/*export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}*/

// ------------------------------------
// Reducer
// ------------------------------------
export default function visibilityFilter (state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

