import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginForm from "./components/Auth/LoginForm"
import RegisterForm from "./components/Auth/RegisterForm"
import Layout from "./components/Layout/Layout"
import NoteList from "./components/Notes/NotesList"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import { useAppSelector } from "./store/hooks"
import ErrorBoundary from "./ErrorBoundary"

function App() {
  const { token } = useAppSelector((state) => state.auth);

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />

            <Route element={  <ProtectedRoute isAllowed={!!token} redirectPath="/login" />  }>
              <Route index path="/notes" element={<NoteList />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
