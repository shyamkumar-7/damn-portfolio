import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(
            `Portfolio contact page - from ${form.name}`
        );

        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessege: ${form.message}`
        );

        const gmailUrl =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=kumarshyam03662@gmail.com` +
            `&su=${subject}` +
            `&body=${body}`;

        window.open(gmailUrl, "_blank", "noopener,noreferrer");
    };

    const handleclearform = () => {
        setForm({
            name: "",
            email: "",
            message: "",
        });
    }

    return (
        <section className="mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
                {/* Left */}
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Get in touch
                    </p>

                    <h1 className="max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Let&apos;s build something great together.
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-7 text-foreground-muted sm:text-lg">
                        Have a project, opportunity, or just want to say hello? Feel free
                        to send me a message.
                    </p>

                    <div className="mt-8 space-y-4">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=kumarshyam03662@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-foreground-muted transition-colors hover:text-primary"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-5 w-5"
                                >
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <path d="m3 7 9 6 9-6" />
                                </svg>
                            </span>

                            kumarshyam03662@gmail.com
                        </a>
                    </div>
                </div>

                {/* Form */}
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <div className="flex justify-between " >
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground"
                                > Name </label>

                                <span onClick={handleclearform}
                                className="mb-2 block text-sm font-medium text-foreground
                                h-auto w-auto cursor-pointer hover:-translate-y-px " >Clear form</span>
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-foreground"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-foreground"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your messege here..."
                                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        <button type="submit"
                            className="w-full cursor-pointer rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        > Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}