import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto w-screen	">
      <div className=" text-black py-3 px-2 mt-2">
        <Header />
      </div>
      <div className="container mx-auto md:w-9/12 px-2">
       
            {children}

      </div>
      <div className="bg-black text-white
             text-3xl  text-center fixed 
             inset-x-0 
             bottom-0 
             p-4 mt-10">
        <Footer />
      </div>
    </div>

  );
}