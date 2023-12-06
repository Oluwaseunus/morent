import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, hideFooter = false }) {
  return (
    <div>
      <Header />

      {children}

      {!hideFooter && <Footer />}
    </div>
  );
}

export default Layout;
