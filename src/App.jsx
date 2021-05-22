import Board from './styles/Board'
import Box from './styles/Box'

const createBox = () => {
  return (
      <Box />
  )
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <Board>
      {num.map(createBox)}
    </Board>
  );
}

export default App;
