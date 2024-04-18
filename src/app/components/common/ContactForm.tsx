"use client";
import {ChangeEvent, FormEvent, useState} from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value, name} = e.target;
        setForm({...form, [name]: value});
    };
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setError("validation-error");
            return;
        }

        setError("");
        setLoading(true);

        emailjs
            .send(
                `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
                {
                    from_name: form.name,
                    to_name: "Paweł Bryła",
                    from_email: form.email,
                    to_email: "biuro@gregorius.pl",
                    message: form.message,
                },
                `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
            )
            .then(
                () => {
                    setLoading(false);
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                    toast.success(("Wysłano maila!"));
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error(("Wiadomość nie została wysłana"));
                },
            );
    };
    return (
        <form className="flex flex-col gap-8" onSubmit={submitHandler}>
            <label className="flex flex-col">
                <span className="mb-4 font-medium text-primary-t">{("Imię")}</span>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={changeHandler}
                    placeholder={("Imię")}
                    className="rounded-lg border-none bg-secondary-b px-3 py-4 font-medium text-primary-t shadow-md outline-none placeholder:text-secondary-t md:px-6"
                />
            </label>
            <label className="flex flex-col">
                <span className="mb-4 font-medium text-primary-t">{("Email")}</span>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={changeHandler}
                    placeholder={("Email")}
                    className="rounded-lg border-none bg-secondary-b px-3 py-4 font-medium text-primary-t shadow-md outline-none placeholder:text-secondary-t md:px-6"
                />
            </label>

            <label className="flex flex-col">
                <span className="mb-4 font-medium text-primary-t">{("Wiadomość")}</span>
                <textarea
                    rows={8}
                    name="message"
                    value={form.message}
                    onChange={changeHandler}
                    placeholder={("Treść twojej wiadomości")}
                    className="resize-none rounded-lg border-none bg-secondary-b px-3 py-4 font-medium text-primary-t shadow-md outline-none placeholder:text-secondary-t md:px-6"
                />
            </label>
            <button
                type="submit"
                className="hover:bg-blue-500 w-fit rounded-xl bg-blue-300 px-8 py-3 font-bold text-tertiary-t shadow-xl outline-blue-100 transition-colors"
            >
                {loading ? ("Wysyłanie") : ("Wyślij")}
            </button>
        </form>


    )
}

export default ContactForm;