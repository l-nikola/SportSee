import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout({ children }) {
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
