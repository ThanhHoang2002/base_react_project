import { decrement, increment } from '../../../store/slices/counterSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'

const Hello = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default Hello
