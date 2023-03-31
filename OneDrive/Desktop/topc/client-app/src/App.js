import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/AuthScreens/SignUp";
import LoginScreen from "./components/AuthScreens/LoginScreen";

import NavigationBar from "./components/Navbar/NavigationBar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <NavigationBar/>
        <div className="container d-flex align-items-center flex-column">
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
