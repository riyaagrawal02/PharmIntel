export const agentMock = {
  status: "success",
  message: "Analysis completed successfully",
  intent: "portfolio_planning",
  intelligence: {
    summary:
      "Completed analysis for Respiratory drugs in India using multi-agent orchestration.",
    key_findings: [
      "Strong market growth indicates expanding opportunity",
      "Low clinical trial saturation suggests development opportunity",
      "Strong freedom-to-operate position",
    ],
    risk_flags: [
      "Medium IP risk due to active patents",
    ],
    opportunity_score: 0.73,
    recommendations: [
      "Proceed with feasibility study",
      "Design around existing patents",
      "Diversify sourcing strategy",
    ],
  },
  execution: {
    total_agents: 4,
    successful_agents: 4,
    failed_agents: 0,
  },
  data: {
    market_metrics: {
      market_size_usd_millions: 2500,
      cagr_percent: 10.5,
    },
    phase_distribution: {
      Phase1: 15,
      Phase2: 28,
      Phase3: 12,
      Phase4: 5,
    },
  },
};
