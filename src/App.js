import './App.css';
import './asset/css/todos.scss';
import Insert from './component/Insert';
import List from './component/List';
import Sort from './component/Sort';

function App() {

  return (
    <div className='todolist'>
      <h2>To-do-list</h2>
        <Insert/>
      <div className='wrap'>
        <Sort/>
        <List/>
      </div>
    </div>
  );
}

export default App;
