import { ONTHEAIR, AIRINGTODAY, POPULAR, TOP_RATED, ERROR } from '../actions/tvActions';
let defaultState = { loading: true, data: [] };
export default tvReducer = (state = defaultState, action) => {
      switch (action.type) {
            case AIRINGTODAY:
                  return {
                        ...state,
                        loading: false,
                        airingtoday: action.payload
                  }
            case ONTHEAIR:
                  return {
                        ...state,
                        loading: false,
                        ontheair: action.payload
                  }
            case TOP_RATED:
                  return {
                        ...state,
                        loading: false,
                        toprated: action.payload
                  }
            case POPULAR:
                  return {
                        ...state,
                        loading: false,
                        popular: action.payload
                  }
            case ERROR:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}