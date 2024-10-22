import { useState } from "react"
import useLocalStorage from "../utilities/useLocalStorage";

export default function SettingInLocalStorage() {

  const [storedEmail, setStoredEmail] = useLocalStorage('email', '');
  const [storedName, setStoredName] = useLocalStorage('name', '');

  return (
    <div className="App flex justify-center min-h-screen p-8 bg-gray-100">
      <div>
        <div className="mb-4">
          <input
            type="text"
            placeholder='enter your email'
            value={storedEmail}
            onChange={(e) => setStoredEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder='enter your name'
            value={storedName}
            onChange={(e) => setStoredName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          onClick={() => { setStoredName(''); setStoredEmail('') }}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Clear local storage data
        </button>

      </div>
    </div>

  )
}