import useLocalStorage from "../utilities/useLocalStorage";

export default function ReadingFromLocalStorage() {


  const [email] = useLocalStorage('email', '');
  const [name] = useLocalStorage('name', '');

  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Hello {name ? name : 'Guest'}</h1>
        <p className="text-white text-sm"> {email ? email : 'guest@example.com'}</p>
      </div>
    </header>
  )
}