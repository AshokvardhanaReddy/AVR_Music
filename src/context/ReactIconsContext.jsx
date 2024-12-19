

import { IconContext } from 'react-icons';

// size: '2rem'
// color: 'blue',

function ReactIconsContextProvider(props) {
  return (
    <IconContext.Provider value={{  }}>
     {props.children}
    </IconContext.Provider>
  );
}


export default ReactIconsContextProvider;