import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="p-8">
      <NavBar />
      <h1 className="text-3xl font-bold mb-4">Private chater app</h1>
      <button className="btn btn-primary">DaisyUI Button</button>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>Some card content</p>
        </div>
      </div>
    </div>
  );
}
