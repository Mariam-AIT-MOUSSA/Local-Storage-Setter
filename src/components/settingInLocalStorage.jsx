import { useState } from "react"
import useLocalStorage from "../utilities/useLocalStorage";

export default function SettingInLocalStorage() {

  const [storedEmail, setStoredEmail] = useLocalStorage('email', '');
  const [storedName, setStoredName] = useLocalStorage('name', '');

  const [email, setEmail] = useState(storedEmail);
  const [name, setName] = useState(storedName);

  return (
    <div className="App flex justify-center min-h-screen p-8 bg-gray-100">
      <div>
        <div className="mb-4">
          <input
            type="text"
            placeholder='enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder='enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <button
            onClick={() => {setStoredEmail(email); setStoredName(name)}}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Set in local storage
          </button>
        </div>
      </div>
    </div>

  )
}