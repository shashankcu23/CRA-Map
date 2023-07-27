import { SET_REGION, SET_NIGHT_MODE } from './actions';

const initialState = {
  selectedRegion: 'us',
  nightMode: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGION:
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case SET_NIGHT_MODE:
      return {
        ...state,
        nightMode: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
