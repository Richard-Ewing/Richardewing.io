"use client";

import React, { useState, useId } from "react";

export default function UnitEconomicsExperiment() {
  const [sliderValue, setSliderValue] = useState<number>(6); // 6 cents = $0.06
  const unitCostId = useId();

  const cost = sliderValue / 100;
  const expense = 80000 * cost + 1200;
  const contribution = 24000 - expense;
  const margin = (contribution / 24000) * 100;
  const expenseBarWidth = Math.min(100, (expense / 24000) * 100);

  const formattedMoney = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(contribution);

  const formattedExpense = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(expense);

  return (
    <section className="ed-section ed-wrap" id="economics">
      <div className="ed-lab">
        <div className="ed-lab-copy">
          <span className="ed-index">02 / AN INTERACTIVE THOUGHT EXPERIMENT</span>
          <h2 className="ed-h2">
            The feature stays.<br />
            The economics change.
          </h2>
          <p className="ed-lede">
            Move the inference cost. Watch what happens to contribution margin when revenue and usage stay fixed.
          </p>
          <p className="ed-caption mt-4">
            This is a transparent scenario, not an estimate of your company&apos;s waste or an audit finding.
          </p>
        </div>
        <div>
          <div className="ed-controls">
            <div className="ed-controlhead">
              <label htmlFor={unitCostId}>Inference cost per request</label>
              <output id="cost-output" htmlFor={unitCostId}>
                ${cost.toFixed(2)}
              </output>
            </div>
            <input
              id={unitCostId}
              type="range"
              min={1}
              max={25}
              value={sliderValue}
              step={1}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="ed-range"
              aria-describedby="assumptions-text"
              aria-valuetext={`$${cost.toFixed(2)} per request`}
            />
          </div>

          <p className="ed-eyebrow mt-7 mb-0">Illustrative contribution margin</p>
          <p className="ed-result">
            <output id="margin-output" htmlFor={unitCostId}>
              {margin.toFixed(1)}%
            </output>
          </p>
          <p id="contribution" className="text-zinc-300 font-sans text-sm">
            {formattedMoney} monthly contribution before engineering, support, and other expenses.
          </p>

          <div className="ed-meter">
            <div className="ed-meter-line">
              <span>Monthly revenue</span>
              <span>$24,000</span>
            </div>
            <div className="ed-track">
              <div className="ed-fill" style={{ width: "100%" }} />
            </div>
            <div className="ed-meter-line">
              <span>Inference + fixed platform costs</span>
              <output id="expense-output" htmlFor={unitCostId}>
                {formattedExpense}
              </output>
            </div>
            <div className="ed-track">
              <div className="ed-fill cost" style={{ width: `${expenseBarWidth}%` }} />
            </div>
          </div>

          <p id="assumptions-text" className="ed-assumptions mt-6">
            Assumptions: $24,000 monthly revenue; 80,000 requests/month; $1,200 monthly fixed platform costs. Contribution = revenue - inference cost - fixed platform costs. Margin = contribution / revenue. Excludes engineering, support, taxes, and all other costs. These are illustrative inputs, not benchmarks.
          </p>
        </div>
      </div>
    </section>
  );
}
