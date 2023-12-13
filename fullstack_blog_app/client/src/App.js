import { Routes, Route, Layout, Outlet } from "react-router-dom";
import { BlogDetails, CategoriesPage, LoginPage, SignUpPage, Home, WriterPage } from "./pages";
import { Loading } from "./components";

function App() {

  const theme = 'dark';

  const isLoading = false;

  const Layout = () => {
    return (
      <div className="w-full flex flex-col min-h-screen px-4 md:px-10 2xl:px-28">
        {/* Navbar*/}
        <div className="flex-1">
          <Outlet/>
        </div>
        <div>
          {/*Footer*/}
        </div>
      </div>
    )
  }

  return (
    <main className={theme}>
      <div className="w-full min-h-screen relative bg-white dark:bg-[#020b19]">
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/category" element={<CategoriesPage />}/>
            <Route path="/:slug/:id?" element={<BlogDetails />}/>
            <Route path="/writer/:id" element={<WriterPage />}/>
            </Route>

            <Route path="/signup" element={<SignUpPage />}/> 
            <Route path="/signin" element={<LoginPage />}/>  
        </Routes>

        {isLoading && <Loading />}
      </div>
    </main>
  );
}

export default App;
