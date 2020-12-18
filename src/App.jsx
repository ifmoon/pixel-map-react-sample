
import { useMemo } from 'react';
import maps from './maps';

const appStyle = {
  display: 'grid',
  gridAutoRows: '1fr',
  gridAutoColumns: '1fr',
  alignItems: 'center',
  justifyItems: 'center',
  width: '80vh',
  height: '50vh'
}

const getRandomHexCode = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

const Cell = ({name, x, y, color}) => {
  const cellStyle = useMemo(()=>({gridColumn: `${x}/${x}`, gridRow: `${y}/${y}`, width: '80%', height: '80%', backgroundColor: color, borderRadius: '50%'}),[x,y, color]);
  return <div id={name} style={cellStyle} />
}

function App() {

  return (
      <div style={appStyle}>
        {maps.map(({name, locations }) => {
          const color = getRandomHexCode();
          return <>{locations.map(({x,y}) => (<Cell key={`${name}_${x}_${y}`} name={name} x={x} y={y} color={color}/>))}</>
          }
          )}
      </div>
    )
  }
export default App;
