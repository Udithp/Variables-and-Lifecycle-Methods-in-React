import React from 'react';
import UserList from './components/UserList'; 
import Counter from './components/Counter'; 
import ComponentA from './components/ComponentA'; 

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>           </h1>
      <UserList />
      
      <h1>               </h1>
      <Counter />
      
      <h1>                  </h1>
      <ComponentA />
    </div>
  );
}

export default App;