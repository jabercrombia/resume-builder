import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-white text-black py-3 px-2 mt-2">
        <Header />
      </div>
      <div className="container mx-auto px-2">
          {children}
      </div>
      <div className="bg-black text-white py-3 px-2 mt-2">
        <Footer />
      </div>
    </div>

  );
}