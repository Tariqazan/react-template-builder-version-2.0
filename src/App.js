import './App.css';

import DragDrop from './components/DragDrop';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';


// import Frame, { FrameContextConsumer } from 'react-frame-component';

// const FrameBindingContext = ({ children }) => (
//   <FrameContextConsumer>
//     {({ window }) => (<DndProvider backend={HTML5Backend} context={window}>
//       {children}
//     </DndProvider>)}
//   </FrameContextConsumer>
// );


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragDrop></DragDrop>
    </DndProvider>
  );
}

export default App;
