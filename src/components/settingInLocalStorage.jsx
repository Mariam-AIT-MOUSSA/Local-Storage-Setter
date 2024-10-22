import { useState } from "react"
import useLocalStorage from "../utilities/useLocalStorage";

export default function SettingInLocalStorage() {

  const [storedValue, setStoredValue] = useLocalStorage('email', '');

  const [value, setValue] = useState(storedValue);

  return (
    <div className="App flex justify-center min-h-screen p-8 bg-gray-100">
      <div>
        <div className="mb-4">
          <input
            type="text"
            placeholder='enter your email'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <button
            onClick={() => setStoredValue(value)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Set email in LocalStorage
          </button>
        </div>
      </div>
    </div>

  )
}