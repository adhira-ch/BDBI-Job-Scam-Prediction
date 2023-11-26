import './App.css';
import Main from './Main/MainPage.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <Router>
    <Layout>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    </Layout>
</Router>
  );
}

export default App;
