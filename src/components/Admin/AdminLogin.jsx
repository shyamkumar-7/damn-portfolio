import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Portfolio-only authentication
        if (
            email === "admin@example.com" &&
            password === "admin123"
        ) {
            const expiresAt = Date.now() + (10 * 60 * 1000); // set the localstorage admin login expiration here
            localStorage.setItem("adminAuthenticated",JSON.stringify({
            authenticated: true,
            expiresAt,
        }));
            
            navigate("/admin");
            return;
        }

        setError("Invalid email or password.");
    };

    return (
        <section className="min-h-[calc(100vh-73px)] flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">

                {/* Header */}
                <div className="mb-8 text-center">
                    <p className="mb-2 text-sm font-medium text-primary">
                        Admin Panel
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Welcome back
                    </h1>

                    <p className="mt-3 text-sm text-muted-foreground">
                        Sign in to access your portfolio dashboard.
                    </p>
                </div>

                {/* Login Card */}
                <div className="rounded-2xl border border-border bg-background p-6 shadow-xl sm:p-8">

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-foreground"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@example.com"
                                required
                                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-foreground"
                            >   Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                        {/* Error */}
                        {error && (
                            <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
                                {error}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full cursor-pointer rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        > Sign in
                        </button>
                    </form>

                    {/* Note */}
                    <div className="mt-6 border-t border-border pt-5">
                        <p className="text-center text-xs text-muted-foreground">
                            This is a private portfolio administration area.
                        </p>
                    </div>
                </div>

                {/* Back to portfolio */}
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="mt-6 block w-full text-center text-sm cursor-pointer text-muted-foreground transition hover:text-foreground"
                >
                    ← Back to portfolio
                </button>
            </div>
        </section>
    );
};

export default AdminLogin;
