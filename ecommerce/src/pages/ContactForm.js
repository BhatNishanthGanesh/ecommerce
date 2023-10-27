import PageWrapper from "../components/PageWrapper";
import Banner from "../components/banner";
import contact from "../assets/contact.jpg";
import styles from "../components/banner.module.css";
import InputLabel from "../components/Forms/InputLabel";
import TextInput from "../components/Forms/TextInput";
const ContactForm = () => {
    return (
        <PageWrapper>
            <Banner image={contact}>
                <h2 className={styles.heading}>Contact us today!</h2>
                <p></p>
                <form>
                    <InputLabel input="email">Email Address:</InputLabel>
                    <TextInput type="text" id="email" />
                    <InputLabel input="subject">Subject:</InputLabel>
                    <TextInput type="text" id="subject" />
                    <InputLabel input="body">Your Message:</InputLabel>
                    <textarea
                        id="body"
                        className="border-0 w-100 mb-4 p-2 rounded"
                    ></textarea>
                    <button
                        className="d-block w-100 p-2 rounded border-0 bg-primary text-white"
                        type="submit"
                    >
                        SUBMIT
                    </button>
                </form>
            </Banner>
        </PageWrapper>
    );
};
export default ContactForm;
