import './App.css';
import { Footer, Header } from './components';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="app-container">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
