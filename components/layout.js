import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="mx-0 md:max-w-full md:mx-auto font-poppins h-screen">
      <Nav />
      <main className="mx-6 mb-auto md:max-w-2xl md:mx-auto pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
