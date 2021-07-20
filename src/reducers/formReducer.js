import {
  ADD_ROW,
  REMOVE_ROW,
  UNDO_REMOVE,
  SET_STATE
} from '../reducers-actions/formReducerActions'

const formReducer = (state, action) => {
  const parseList = [...state.parseKeys]
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        parseKeys: [
          ...state.parseKeys,
          { key: action.payload, dataType: '', value: '', visualize: true }
        ]
      }
    case REMOVE_ROW:
      const removedItem = state.parseKeys[action.index]
      parseList[action.index].visualize = false

      return {
        ...state,
        removedItemsHistory: [...state.removedItemsHistory, removedItem.key],
        parseKeys: parseList
      }
    case UNDO_REMOVE:
      const removedList = [...state.removedItemsHistory]
      const index = state.parseKeys.findIndex(
        (e) => e.key === removedList[removedList.length - 1]
      )
      parseList[index].visualize = true
      removedList.pop()
      return {
        ...state,
        removedItemsHistory: removedList,
        parseKeys: parseList
      }
    case SET_STATE:
      return action.payload
    default:
      return state
  }
}

export default formReducer
