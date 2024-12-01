import { useReducer } from 'react'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'
// import Header from './components/Header'
import { ThemeProvider } from './context/TemeContext'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

const initialState = {
  isAuthenticated: false,
  user: null
}

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeProvider>
      <AuthProvider value={{ state, dispatch }}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Header/>
          <main className="container mx-auto px-4 py-8">
            {state.isAuthenticated ? <Dashboard /> : <Login />}
          </main>
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App;
