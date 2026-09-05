import React from "react";
import construction from '../../assets/icons/construction.svg'

const UnderMaintenance = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/70 px-4 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-background p-8 shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Decorative accent */}
        {/* <div className="absolute left-0 top-0 h-1 w-full bg-primary" /> */}

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute cursor-pointer right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-foreground-muted transition-colors duration-200 hover:bg-surface hover:text-foreground"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-surface text-primary">
            <img src={construction} />
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Under Maintenance
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-sm text-sm leading-6 text-foreground-muted">
            This section is currently under development
          </p>

          {/* Status */}
          <div className="mt-6 flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

            <span className="text-xs font-medium text-foreground-muted">
              Work in progress
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance;