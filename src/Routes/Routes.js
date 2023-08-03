import SelectMood from '../components/SelectMood';
import GameScreen from '../components/GameScreen';
let Routes = [
  { path: "/", element: <SelectMood /> },
  { path: "/game", element: <GameScreen /> },
];
export default Routes;