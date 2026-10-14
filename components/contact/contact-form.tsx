"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Failed to submit message. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1">
          Your Name
        </label>
        <input
          type="text"
          required
          placeholder="First & Last Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="search-input bg-white w-full border-[var(--line)]"
          disabled={status === "loading" || status === "success"}
        />
      </div>

      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1">
          Work Email
        </label>
        <input
          type="email"
          required
          placeholder="name@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="search-input bg-white w-full border-[var(--line)]"
          disabled={status === "loading" || status === "success"}
        />
      </div>

      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1">
          Company / Organization (Optional)
        </label>
        <input
          type="text"
          placeholder="Company Name"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="search-input bg-white w-full border-[var(--line)]"
          disabled={status === "loading" || status === "success"}
        />
      </div>

      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1">
          Message
        </label>
        <textarea
          rows={4}
          required
          placeholder="How can Richard help? (Advisory, Keynote, Pricing Sprint, etc.)"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="search-input bg-white w-full border-[var(--line)] resize-y"
          disabled={status === "loading" || status === "success"}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="button button-gold w-full text-center"
        >
          {status === "loading"
            ? "Sending inquiry..."
            : status === "success"
            ? "Message Sent Successfully ✓"
            : "Send message ↗"}
        </button>
      </div>

      {status === "success" && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 font-medium">
          ✓ Thank you. Your inquiry was delivered directly to Richard. We will respond within 24 hours.
        </div>
      )}

      {status === "error" && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 font-medium">
          ✕ {errorMessage}
        </div>
      )}

      <p className="text-[10px] font-mono text-zinc-500">
        Direct delivery to richardewing@exogram.ai. Zero spam. Strictly confidential.
      </p>
    </form>
  );
}
