import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import logo from "./assets/logo.svg";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-slate-200">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div className="flex gap-5">
          <Link
            to="/chat"
            className="font-inter font-medium bg-violet-500 text-white px-4 py-2 rounded-md"
          >
            Chat
          </Link>
          <Link
            to="/create-post"
            className="font-inter font-medium bg-violet-500 text-white px-4 py-2 rounded-md"
          >
            Create Post
          </Link>
        </div>
      </header>

      <main className="w-full bg-slate-100 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
