import ContactForm from "@/app/components/common/ContactForm";


const Contact = () => {
    return (
        <div className="flex-col-reverse justify-between gap-5 overflow-hidden xl:pt-12 xl:flex-row bg-blue-100 pb-32"
             id="contact">
            <h1 className="font-bold text-2xl text-center">Skontaktuj się z nami</h1>

            <div className="flex flex-col justify-center xl:flex-row mt-20">
                <div className="flex-[0.3] m-4 rounded-2xl bg-blue-200 p-8 shadow-xl mb-8 xl:mb-0 xl:mr-36">
                    <ContactForm/>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col ml-4 xl:ml-0">
                        <a href="mailto:biuro@gregorius.pl" className="font-bold">Email: biuro@gregorius.pl</a>
                        <span>Adres: Os. Na Wzgórzach 22 Kraków</span>
                        <span>Nr telefonu: 321321</span>
                        <span>Nip: 624321321 </span>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.494713938135!2d20.062018176901038!3d50.09574651283939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716457da617f935%3A0x1941138cfc8dd657!2sGregorius.%20Tuleje%20i%20gniazda%20zaworowe!5e0!3m2!1spl!2spl!4v1713427505990!5m2!1spl!2spl"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="mt-5 rounded-2xl h-96 w-full xl:w-96"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;