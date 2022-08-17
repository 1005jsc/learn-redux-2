//1. initialState를 만들어준다

const initialState = {
  number: 0,
  diff: 1,
};

// 액션 타입 만든다

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수 만든다

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const counter = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFF:
      return { ...state, diff: action.diff };
    case INCREASE:
      return { ...state, number: state.number + state.diff };
    case DECREASE:
      return { ...state, number: state.number - state.diff };
    default:
      return state;
  }
};
export default counter;
