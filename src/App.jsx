import Card from "./components/Card";

function App() {
  // TODO: add react router
  return (
    <div >
      <main className="bg-[#ff859f] h-screen grid grid-cols-3 gap-4">
        <Card strMeal="Pizza"/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </main>
    </div>
  );
}

export default App;
