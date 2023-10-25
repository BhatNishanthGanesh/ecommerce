import Navbar from "./navbar";
import Banner from "./banner";
import NewsLetter from "./subscribe";
import Footer from "./footer";
const PageWrapper = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <NewsLetter />
            <Footer />
        </>
    );
};
export default PageWrapper;
