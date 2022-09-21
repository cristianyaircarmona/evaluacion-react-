import style from './App.module.css';
import { Route } from 'react-router-dom'
import { Table } from '../src/components/Table/Table.jsx'
import { Detail } from './components/Detail/Detail';


function App() {
  return <div className={style}>
    <Route exact path='/' component={Table} />
    <Route path='/detail/:id' component={Detail} />
  </div>
}

export default App;
