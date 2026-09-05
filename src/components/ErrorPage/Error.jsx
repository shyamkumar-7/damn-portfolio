import { NavLink, useLocation } from "react-router-dom";

const Error = () => {
  const location = useLocation();

  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-2xl text-center">

        {/* Error icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-surface shadow-lg">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-9 w-9 text-primary"
            aria-hidden="true"
          >
            <path
              d="M12 9v4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M12 17h.01"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <path
              d="M10.3 3.8 2.7 17a2 2 0 0 0 1.73 3h15.14a2 2 0 0 0 1.73-3L13.7 3.8a2 2 0 0 0-3.4 0Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Error code */}
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          404 · Page Not Found
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Looks like this page
          <br />
          <span className="text-primary">doesn&apos;t exist.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-foreground-muted sm:text-lg">
          The page you&apos;re looking for may have been moved, removed, or
          the URL might be incorrect.
        </p>

        {/* Requested URL */}
        {location.pathname && (
          <div className="mx-auto mt-6 max-w-md rounded-xl border border-border bg-surface px-4 py-3 text-left shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
              Requested path
            </p>

            <p className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-sm text-foreground">
              {location.pathname}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <NavLink
            to="/"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-primary
              px-5
              py-3
              text-sm
              font-semibold
              text-foreground-inverse
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-primary-hover
            "
          >
            Back to Home

            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="ml-2 h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M4 10h11M10 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>

          <NavLink
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              border-border
              bg-surface
              px-5
              py-3
              text-sm
              font-semibold
              text-foreground
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-primary/50
              hover:bg-surface-hover
            "
          >
            Contact Me
          </NavLink>

        </div>

        {/* Developer-style status */}
        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-left shadow-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-foreground-inverse">
            &lt;/&gt;
          </span>

          <div>
            <p className="text-xs font-semibold text-foreground">
              Route not found
            </p>

            <p className="mt-0.5 text-[11px] text-foreground-muted">
              The requested resource is unavailable.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Error;
