import './App.css';
import { Student } from './components/comp-param/Student';
import { User } from './components/comp-param/User';
import { Item } from './components/component/Item';
import { Counter } from './components/counter/Counter';
import { Form } from './components/form/Form';
import { ListWithForLoop } from './components/list/ListWithForLoop';
import { ListWithMap } from './components/list/ListWithMap';
import { SimpleList } from './components/list/SimpleList';
import { Todo } from './components/todo/Todo';

function App() {
  return (
    <div className="App">
      <h2>useState() hooks'as</h2>
      <Todo />
      <Counter />
      <Form />

      <h2>Sarasu generavimas</h2>
      <SimpleList />
      <ListWithMap />
      <ListWithForLoop />

      <h2>Komponentas su parametrais</h2>
      <User name="Jonas" age={99} />
      <User name="Maryte" age={88} />
      <User name="Petras" age={77} />
      <User name="Ona" age={66} />
      <Student name="Jonas" age={99} />
      <Student name="Maryte" age={88} />
      <Student name="Petras" age={77} />
      <Student name="Ona" age={66} />

      <h2>Tiesiog komponento panaudojimas</h2>
      <Item />
      <Item></Item>
    </div>
  );
}

export default App;
