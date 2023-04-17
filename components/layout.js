import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="mx-6 md:max-w-full md:mx-auto font-poppins h-screen">
      <Nav />
      <main className="mb-auto md:max-w-2xl md:mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
