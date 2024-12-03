
import { useAuth } from '../context/AuthContext'
import { Sun, Moon, LogOut } from 'lucide-react'
import { useTheme } from '../context/TemeContext'

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme()
  const { state, dispatch } = useAuth()

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Social Media Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {state.isAuthenticated && (
            <button
              onClick={handleLogout}
              className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              <LogOut size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

