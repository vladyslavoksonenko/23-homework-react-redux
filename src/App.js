import './App.scss';
import { Provider } from 'react-redux';
import store from './store/store'
import Posts from './components/Posts'
import PostAdd from './components/PostAdd'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PostAdd />
        <Posts posts={[1, 2, 3]} />
      </Provider>
    </div>
  );
}

export default App;
