import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

function Home() {
  return (
    <>
      <Header />

      <div
        style={{
          height: "120vh",
          paddingTop: "120px",
        }}
      >
        Homepage Content
      </div>

      <Footer />
    </>
  );
}

export default Home;