
import { useMemo } from 'react';
import maps from './maps';

const appStyle = {
  display: 'grid',
  gridTemplateRows: 'repeat(52, 5px)',
  gridTemplateColumns: 'repeat(78, 5px)',
  width: '80vh',
  height: '50vh',
  gap: '1px',
  justifyItems: 'center',
  aliginItems: 'center'
}

const getRandomHexCode = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

const Cell = ({name, x, y, color}) => {
  const cellStyle = useMemo(()=>({gridColumn: `${x}/${x}`, gridRow: `${y}/${y}`, width: '85%', height: '85%', backgroundColor: color, borderRadius: '50%' }),[x,y, color]);
  return <div id={name} style={cellStyle} />
}

function App() {

  return (
      <div style={appStyle} id="map">
        {maps.map(({name, locations }) => {
          const color = getRandomHexCode();
          return <>{locations.map(({x,y}) => (<Cell key={`${name}_${x}_${y}`} name={name} x={x} y={y} color={color}/>))}</>
          }
          )}
      </div>
    )
  }
export default App;
