"use client";

import React, { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/beehiiv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "concept_b_newsletter_page" }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Subscription failed. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="search-input flex-grow bg-white text-zinc-900 border-[var(--line)]"
          disabled={status === "loading" || status === "success"}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="button button-gold whitespace-nowrap"
        >
          {status === "loading"
            ? "Subscribing..."
            : status === "success"
            ? "Subscribed ✓"
            : "Subscribe ↗"}
        </button>
      </div>

      {status === "success" && (
        <p className="text-xs text-emerald-800 font-medium">
          ✓ Welcome aboard! Check your inbox for the latest executive briefing.
        </p>
      )}

      {status === "error" && (
        <p className="text-xs text-rose-700 font-medium">
          ✕ {errorMessage}
        </p>
      )}

      <p className="text-[11px] text-[var(--muted)]">
        Join 11,000+ technology executives. Free weekly briefings. Zero spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
