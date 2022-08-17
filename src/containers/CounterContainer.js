import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';
function CounterContainer() {
  // provider에 감싸진 곳에서 state를 조회할 수 있음
  // ()안에 객체를 어떻게 만들고 싶은가 만들어 주면 됨
  // 보통 index.js를 보면서 만들면 됨

  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  // dispatch를 쓰려면 useDispatch를 실행해서 써야됨
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onSetDiff = (diff) => {
    dispatch(setDiff(diff));
  };

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
