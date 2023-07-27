// Define action types
export const SET_REGION = 'SET_REGION';
export const SET_NIGHT_MODE = 'SET_NIGHT_MODE';

// Define action creators
export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});

export const setNightMode = (nightMode) => ({
  type: SET_NIGHT_MODE,
  payload: nightMode,
});
