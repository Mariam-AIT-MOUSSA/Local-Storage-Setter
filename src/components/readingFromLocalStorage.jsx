import useLocalStorage from "../utilities/useLocalStorage";

export default function ReadingFromLocalStorage() {

  //For reading email ... 
  const emailKey = "email";

  const [storedValue] = useLocalStorage(emailKey, '');

  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My App</h1>
        <p className="text-white text-sm">Email: {storedValue ? storedValue : 'guest@example.com'}</p>
      </div>
    </header>
  )
}