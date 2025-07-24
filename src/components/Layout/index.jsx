import Header from "../Header";
import Sidebar from "../Sidebar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <section>{children}</section>
      </main>
    </>
  );
}

export default Layout;
