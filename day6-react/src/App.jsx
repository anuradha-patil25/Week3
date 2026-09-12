function App() {
  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">

        <h1 className="text-2xl font-bold text-orange-600 mb-3">
          My Student Profile
        </h1>

        <h2 className="text-xl font-semibold mb-2">
          Anuradha Patil
        </h2>

        <p className="text-orange-700 mb-1">
          Course:BCA
        </p>

        <p className="text-orange-700 mb-1">
          Semester:V
        </p>

        <p className="text-orange-700 mb-4">
          Learning:React
        </p>

        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          View Profile
        </button>

      </div>
    </div>
  );
}

export default App;