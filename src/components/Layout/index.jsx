import Header from "../Header";
import Sidebar from "../Sidebar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        {children}
      </main>
    </>
  );
}

export default Layout;
