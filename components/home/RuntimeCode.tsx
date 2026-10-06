"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const events = [
  {
    action: "tool.execute",
    resource: "stripe.invoice",
    decision: "ALLOW",
  },
  {
    action: "database.write",
    resource: "customer.billing",
    decision: "ESCALATE",
  },
  {
    action: "email.send",
    resource: "customer.support",
    decision: "ALLOW",
  },
  {
    action: "filesystem.read",
    resource: "/etc/env.production",
    decision: "DENY",
  },
];

export default function RuntimeCode() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % events.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  const event = events[index];

  return (
    <div className="runtime-code">
      <div className="runtime-code-header">
        <span>EAAP / RUNTIME EVENT</span>
        <span>0.07ms</span>
      </div>

      <div className="runtime-code-body">
        <div className="code-line muted">
          <span>01</span>
          <span>const request =</span>
        </div>

        <div className="code-line">
          <span>02</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={event.action}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              {event.action}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="code-line">
          <span>03</span>
          <span>
            resource = <b>{event.resource}</b>
          </span>
        </div>

        <div className="code-line">
          <span>04</span>
          <span>governance.evaluate()</span>
        </div>

        <div className="code-line">
          <span>05</span>
          <AnimatePresence mode="wait">
            <motion.strong
              key={event.decision}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={
                event.decision === "DENY"
                  ? "decision deny"
                  : event.decision === "ESCALATE"
                  ? "decision escalate"
                  : "decision allow"
              }
            >
              {event.decision}
            </motion.strong>
          </AnimatePresence>
        </div>
      </div>

      <div className="runtime-hash">
        <span>SHA-256 STATE</span>
        <code>8f72a4c91e8d...d13b</code>
      </div>
    </div>
  );
}
