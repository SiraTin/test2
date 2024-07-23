import HomePage from "./homepage/page";
import Navbar from "./layouts/navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <main className="bg-black w-full min-h-screen  overflow-hidden">
        <HomePage/>
      </main>
    </>
  );
}
