import Header from "../../components/header";
import Footer from "../../components/footer";
import SideNav from "../../components/sidenav";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-white text-black py-3 px-2 mt-2">
        <Header />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <SideNav/>
          </div>
          <div className="basis-3/4">
            {children}
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-3 px-2 mt-2">
        <Footer />
      </div>
    </div>

  );
}