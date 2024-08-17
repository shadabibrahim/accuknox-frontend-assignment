
import './App.css';
import Dashboard from './Dashboard';
import {AuthProvider} from "./dashboardContext.js"

function App() {
  return (
    <AuthProvider>
      <div>
        <Dashboard/>
      </div>
    </AuthProvider>
  );
}

export default App;
