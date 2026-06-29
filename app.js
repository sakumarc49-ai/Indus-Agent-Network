const sectors = {
  supply_chain: {
    nav: "Supply Chain & Manufacturing",
    title: "Supply Chain & Manufacturing Agent",
    role: "Stabilizes demand, inventory, production, logistics, and supplier exceptions before they become revenue leakage.",
    impact: ["-18% expedite cost", "+9% OEE", "2.4 day inventory release"],
    incidents: ["Supplier delay", "Demand spike", "Quality escape", "Line stoppage"],
    defaultIncident: "Supplier delay",
    kpiLabel: "OTIF risk",
    valueChain: ["Plan", "Source", "Make", "Move", "Serve"],
    agent: "I can diagnose disruption risk, recommend a response, request approval, trigger the runbook, and produce a business-impact report.",
    recommendations: [
      {
        title: "Rebalance supplier allocation",
        detail: "Shift 38% of constrained components to approved secondary suppliers and reserve premium freight for high-margin orders.",
        impact: "Protects $4.8M revenue",
        speed: "4 hour execution"
      },
      {
        title: "Reschedule production sequence",
        detail: "Prioritize orders with available materials, freeze low-margin custom jobs, and release revised schedules to plants.",
        impact: "Recovers 7.5 OEE points",
        speed: "Same shift"
      }
    ],
    runbook: [
      "Check supplier EDI and shipment milestones",
      "Reallocate constrained materials by margin and service tier",
      "Publish revised production schedule to MES",
      "Notify logistics tower and customer success",
      "Monitor OTIF, inventory, and expedite spend"
    ]
  },
  healthcare: {
    nav: "Healthcare Services",
    title: "Healthcare Access & Care Coordination Agent",
    role: "Improves patient flow, triage accuracy, capacity planning, prior authorization, and discharge coordination.",
    impact: ["-24% wait time", "+13% bed turns", "-11% denied claims"],
    incidents: ["ED surge", "Care gap", "Prior auth delay", "Discharge bottleneck"],
    defaultIncident: "ED surge",
    kpiLabel: "Patient delay risk",
    valueChain: ["Intake", "Triage", "Care", "Discharge", "Follow-up"],
    agent: "I can triage operational load, recommend care-flow actions, coordinate approvals, automate handoffs, and generate a patient-access report.",
    recommendations: [
      {
        title: "Activate surge triage lane",
        detail: "Route low-acuity patients to fast-track, reserve imaging for high-risk cases, and call in flex nursing capacity.",
        impact: "Cuts wait time by 42 minutes",
        speed: "30 minute setup"
      },
      {
        title: "Automate discharge readiness",
        detail: "Pre-fill medication, transport, and follow-up tasks for patients with completed clinical clearance.",
        impact: "Opens 18 bed-hours",
        speed: "2 hour release"
      }
    ],
    runbook: [
      "Classify demand by acuity and resource need",
      "Open fast-track triage lane",
      "Match available clinicians and rooms",
      "Prepare discharge tasks for cleared patients",
      "Track wait time, LWBS, and bed availability"
    ]
  },
  banking: {
    nav: "Banking & Finance",
    title: "Banking Risk & Revenue Agent",
    role: "Accelerates fraud response, credit operations, collections, service recovery, and compliance-ready decisions.",
    impact: ["-31% fraud loss", "+16% case throughput", "6 min alert triage"],
    incidents: ["Fraud cluster", "Loan queue spike", "KYC exception", "Payment outage"],
    defaultIncident: "Fraud cluster",
    kpiLabel: "Exposure risk",
    valueChain: ["Acquire", "Verify", "Transact", "Protect", "Retain"],
    agent: "I can diagnose exposure, recommend controls, route human approval, automate case actions, and create an audit-ready report.",
    recommendations: [
      {
        title: "Contain suspicious transaction ring",
        detail: "Apply temporary step-up authentication to affected segments and prioritize confirmed high-value exposure cases.",
        impact: "Avoids $2.1M loss",
        speed: "12 minute containment"
      },
      {
        title: "Auto-cluster case investigation",
        detail: "Group alerts by device, merchant, IP, and customer network so analysts work one consolidated case path.",
        impact: "Improves throughput 22%",
        speed: "Immediate"
      }
    ],
    runbook: [
      "Score alerts by monetary exposure and confidence",
      "Cluster accounts, devices, and merchants",
      "Apply step-up authentication controls",
      "Open analyst cases with evidence packs",
      "Report loss avoided and false-positive movement"
    ]
  },
  telecom: {
    nav: "Telecom Networks",
    title: "Telecom Network Resilience Agent",
    role: "Keeps service quality high by diagnosing congestion, outages, churn triggers, field-force load, and SLA breaches.",
    impact: ["-37% MTTR", "+8 NPS points", "-14% truck rolls"],
    incidents: ["Cell congestion", "Fiber cut", "SLA breach", "Churn hotspot"],
    defaultIncident: "Cell congestion",
    kpiLabel: "SLA breach risk",
    valueChain: ["Sense", "Route", "Serve", "Repair", "Retain"],
    agent: "I can diagnose network degradation, recommend remediation, get approval, automate network and field actions, and brief executives.",
    recommendations: [
      {
        title: "Reroute traffic and tune parameters",
        detail: "Shift traffic to neighboring cells, adjust admission controls, and protect enterprise SLA slices first.",
        impact: "Restores 92% affected sessions",
        speed: "8 minute network push"
      },
      {
        title: "Dispatch targeted field repair",
        detail: "Use correlated alarms and weather data to send one crew with the right spares instead of broad area dispatch.",
        impact: "Avoids 9 truck rolls",
        speed: "45 minute dispatch"
      }
    ],
    runbook: [
      "Correlate alarms, counters, and customer complaints",
      "Estimate affected customers and enterprise SLAs",
      "Push traffic-routing changes",
      "Dispatch field crew if physical fault persists",
      "Monitor MTTR, SLA recovery, and churn risk"
    ]
  },
  energy: {
    nav: "Energy & Utilities",
    title: "Energy Grid & Utilities Agent",
    role: "Optimizes generation, distribution, outage response, demand flexibility, emissions, and asset health.",
    impact: ["-19% outage minutes", "+12% renewable use", "$1.7M peak-cost avoided"],
    incidents: ["Peak demand", "Transformer anomaly", "Storm outage", "Renewable dip"],
    defaultIncident: "Peak demand",
    kpiLabel: "Grid stress risk",
    valueChain: ["Forecast", "Generate", "Distribute", "Restore", "Settle"],
    agent: "I can diagnose grid stress, recommend dispatch and restoration actions, ask for approval, automate the playbook, and prepare a regulator-ready report.",
    recommendations: [
      {
        title: "Trigger demand response portfolio",
        detail: "Dispatch commercial flexibility, stage battery discharge, and defer non-critical loads in constrained feeders.",
        impact: "Avoids $1.7M peak cost",
        speed: "15 minute activation"
      },
      {
        title: "Pre-position restoration crews",
        detail: "Prioritize assets with thermal anomalies and high customer criticality before storm cells reach the service area.",
        impact: "Cuts outage minutes 19%",
        speed: "1 hour staging"
      }
    ],
    runbook: [
      "Forecast feeder load and renewable variance",
      "Score grid assets by stress and customer criticality",
      "Dispatch flexibility and storage resources",
      "Stage restoration crews and spares",
      "Track SAIDI, peak cost, and emissions impact"
    ]
  }
};

const state = {
  activeTab: "dashboard",
  selectedRecommendation: null,
  approvedRecommendation: null,
  sectorState: Object.fromEntries(Object.keys(sectors).map((key) => [
    key,
    {
      incident: sectors[key].defaultIncident,
      severity: 68,
      volume: 58,
      chat: [
        { by: "agent", text: sectors[key].agent }
      ],
      automation: [],
      report: ""
    }
  ]))
};

const main = document.querySelector("#main-content");
const modal = document.querySelector("#approval-modal");
const modalCategory = document.querySelector("#modal-category");
const approvalQuestion = document.querySelector("#approval-question");
const approvalImpact = document.querySelector("#approval-impact");

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeTab = button.dataset.tab;
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
    render();
    main.focus();
  });
});

document.querySelector("#close-modal").addEventListener("click", closeModal);
document.querySelector("#revise-action").addEventListener("click", () => {
  addChat(state.activeTab, "agent", "Revision requested. I will lower execution risk by adding a phased rollout and tighter monitoring gates.");
  closeModal();
  render();
});
document.querySelector("#approve-action").addEventListener("click", () => {
  if (!state.selectedRecommendation) return;
  state.approvedRecommendation = state.selectedRecommendation;
  startAutomation(state.activeTab, state.selectedRecommendation);
  closeModal();
  render();
});
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

function render() {
  if (state.activeTab === "dashboard") {
    renderDashboard();
  } else {
    renderSector(state.activeTab);
  }
}

function renderDashboard() {
  const sectorCards = Object.entries(sectors).map(([key, sector]) => {
    const sectorData = state.sectorState[key];
    const score = riskScore(sectorData.severity, sectorData.volume);
    return `
      <article class="metric">
        <span>${sector.nav}</span>
        <strong>${score}%</strong>
        <small>${score > 74 ? "High-priority intervention" : "Controlled with active monitoring"}</small>
      </article>
    `;
  }).join("");

  main.innerHTML = `
    <section class="page-head">
      <div>
        <p class="eyebrow">Interactive industrial agent</p>
        <h2>Chat, diagnose, recommend, approve, automate, and report.</h2>
        <p class="lead">A multi-industry command surface for agents that augment decisions, automate operational playbooks, and accelerate measurable business impact across critical value chains.</p>
      </div>
      <div class="head-actions">
        <button class="btn btn-secondary" type="button" data-jump="supply_chain">Open Supply Chain</button>
        <button class="btn" type="button" data-jump="banking">Run Risk Agent</button>
      </div>
    </section>

    <section class="metric-grid" aria-label="Cross-industry risk scores">
      ${sectorCards}
    </section>

    <section class="panel">
      <div class="panel-hdr">
        <h3>Value Chain Coverage</h3>
        <span class="pill">5 industries, 25 operational nodes</span>
      </div>
      <div class="panel-body value-chain">
        ${Object.values(sectors).map((sector) => `
          <div class="chain-node">
            <strong>${sector.nav}</strong>
            <span>${sector.valueChain.join(" -> ")}</span>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="dashboard-grid">
      <article class="panel">
        <div class="panel-hdr">
          <h3>Business Impact Projection</h3>
          <span class="pill">Estimated annualized benefit</span>
        </div>
        <div class="panel-body">
          <div class="chart-wrap">
            <canvas id="impact-chart" width="900" height="360" aria-label="Business impact chart"></canvas>
          </div>
        </div>
      </article>
      <article class="panel">
        <div class="panel-hdr">
          <h3>Live Agent Activity</h3>
          <span class="pill">Human-in-the-loop</span>
        </div>
        <div class="panel-body timeline">
          ${activityEvents().map((event) => `
            <div class="event">
              <strong>${event.title}</strong>
              <span>${event.detail}</span>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
  `;

  main.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.jump));
  });
  drawImpactChart();
}

function renderSector(key) {
  const sector = sectors[key];
  const sectorData = state.sectorState[key];
  const score = riskScore(sectorData.severity, sectorData.volume);
  const scoreClass = score > 74 ? "high" : score > 50 ? "medium" : "";

  main.innerHTML = `
    <section class="page-head">
      <div>
        <p class="eyebrow">${sector.nav}</p>
        <h2>${sector.title}</h2>
        <p class="lead">${sector.role}</p>
      </div>
      <div class="head-actions">
        <button class="btn btn-secondary" type="button" id="run-diagnosis">Run Diagnosis</button>
        <button class="btn btn-success" type="button" id="generate-report">Generate Report</button>
      </div>
    </section>

    <section class="metric-grid" aria-label="${sector.nav} impact metrics">
      ${sector.impact.map((metric, index) => `
        <article class="metric">
          <span>${["Cost", "Speed", "Service"][index] || "Value"}</span>
          <strong>${metric.split(" ")[0]}</strong>
          <small>${metric.replace(metric.split(" ")[0], "").trim()}</small>
        </article>
      `).join("")}
      <article class="metric">
        <span>${sector.kpiLabel}</span>
        <strong>${score}%</strong>
        <small>${score > 74 ? "Needs approval" : "Within guardrails"}</small>
      </article>
    </section>

    <section class="agent-layout">
      <article class="panel">
        <div class="panel-hdr">
          <h3>Agent Chat</h3>
          <span class="pill">Context aware</span>
        </div>
        <div class="panel-body chat-log" id="chat-log">
          ${sectorData.chat.map((message) => `<div class="message ${message.by}">${message.text}</div>`).join("")}
        </div>
        <form class="chat-form" id="chat-form">
          <input id="chat-input" type="text" autocomplete="off" placeholder="Ask about risk, actions, impact, or next steps">
          <button class="btn" type="submit">Send</button>
        </form>
      </article>

      <div class="workflow-stack">
        <article class="panel">
          <div class="panel-hdr">
            <h3>Diagnosis Controls</h3>
            <span class="pill">${sector.kpiLabel}</span>
          </div>
          <div class="panel-body">
            <div class="control-grid">
              <div class="field">
                <label for="incident">Incident</label>
                <select id="incident">
                  ${sector.incidents.map((incident) => `<option ${incident === sectorData.incident ? "selected" : ""}>${incident}</option>`).join("")}
                </select>
              </div>
              <div class="field">
                <label for="severity">Severity</label>
                <input id="severity" type="range" min="0" max="100" value="${sectorData.severity}">
              </div>
              <div class="field">
                <label for="volume">Business Volume</label>
                <input id="volume" type="range" min="0" max="100" value="${sectorData.volume}">
              </div>
            </div>
            <div class="diagnosis-card">
              <strong>${sectorData.incident}: ${diagnosisLabel(score)}</strong>
              <div class="risk-row">
                <span>Risk</span>
                <div class="risk-bar"><div class="risk-fill ${scoreClass}" style="width:${score}%"></div></div>
                <strong>${score}%</strong>
              </div>
              <p class="lead">${diagnosisText(key, score)}</p>
            </div>
          </div>
        </article>

        <article class="panel">
          <div class="panel-hdr">
            <h3>Recommendation & Approval</h3>
            <span class="pill">Human gate</span>
          </div>
          <div class="panel-body recommendation-grid">
            ${sector.recommendations.map((rec, index) => `
              <article class="recommendation">
                <strong>${rec.title}</strong>
                <p>${rec.detail}</p>
                <div class="impact-pills">
                  <span class="pill">${rec.impact}</span>
                  <span class="pill">${rec.speed}</span>
                </div>
                <button class="btn btn-warning" type="button" data-recommendation="${index}">Request Approval</button>
              </article>
            `).join("")}
          </div>
        </article>

        <article class="panel">
          <div class="panel-hdr">
            <h3>Automation Runbook</h3>
            <span class="pill">${sectorData.automation.length ? "Running" : "Waiting for approval"}</span>
          </div>
          <div class="panel-body runbook">
            ${sector.runbook.map((step, index) => {
              const done = sectorData.automation.includes(index);
              return `
                <div class="step ${done ? "done" : ""}">
                  <span class="step-index">${done ? "OK" : index + 1}</span>
                  <strong>${step}</strong>
                  <span>${done ? "Done" : "Ready"}</span>
                </div>
              `;
            }).join("")}
          </div>
        </article>

        <article class="panel report-box">
          <div class="panel-hdr">
            <h3>Business Impact Report</h3>
            <span class="pill">Board ready</span>
          </div>
          <div class="panel-body">
            <textarea readonly>${sectorData.report || "Generate a report after diagnosis or approval to summarize issue, recommendation, automation status, and value delivered."}</textarea>
          </div>
        </article>
      </div>
    </section>
  `;

  bindSectorEvents(key);
  scrollChat();
}

function bindSectorEvents(key) {
  const data = state.sectorState[key];
  main.querySelector("#incident").addEventListener("change", (event) => {
    data.incident = event.target.value;
    addChat(key, "agent", `Diagnosis context updated to ${data.incident}. I am recalculating the operational impact and likely intervention path.`);
    renderSector(key);
  });
  main.querySelector("#severity").addEventListener("input", (event) => {
    data.severity = Number(event.target.value);
    renderSector(key);
  });
  main.querySelector("#volume").addEventListener("input", (event) => {
    data.volume = Number(event.target.value);
    renderSector(key);
  });
  main.querySelector("#run-diagnosis").addEventListener("click", () => {
    const score = riskScore(data.severity, data.volume);
    addChat(key, "agent", `Diagnosis complete. ${diagnosisLabel(score)} with ${score}% risk. I recommend selecting an action for approval so automation can start under human oversight.`);
    renderSector(key);
  });
  main.querySelector("#generate-report").addEventListener("click", () => {
    data.report = buildReport(key);
    addChat(key, "agent", "Report generated with diagnosis, recommendation, automation progress, and measurable impact language.");
    renderSector(key);
  });
  main.querySelector("#chat-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = main.querySelector("#chat-input");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    addChat(key, "user", text);
    addChat(key, "agent", chatResponse(key, text));
    renderSector(key);
  });
  main.querySelectorAll("[data-recommendation]").forEach((button) => {
    button.addEventListener("click", () => openApproval(key, Number(button.dataset.recommendation)));
  });
}

function switchTab(key) {
  state.activeTab = key;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.tab === key));
  render();
}

function riskScore(severity, volume) {
  return Math.min(98, Math.max(8, Math.round(severity * 0.62 + volume * 0.38)));
}

function diagnosisLabel(score) {
  if (score > 74) return "high-impact exception";
  if (score > 50) return "moderate disruption";
  return "controlled operating variance";
}

function diagnosisText(key, score) {
  const sector = sectors[key];
  if (score > 74) {
    return `The agent sees a material risk to ${sector.valueChain.slice(1, 4).join(", ")}. Approval is recommended before automated execution.`;
  }
  if (score > 50) {
    return `The issue is likely to affect throughput or service levels. The agent recommends a bounded intervention with close KPI monitoring.`;
  }
  return `The signal is within current operating guardrails. The agent can keep monitoring and prepare a low-risk automation path.`;
}

function addChat(key, by, text) {
  state.sectorState[key].chat.push({ by, text });
  state.sectorState[key].chat = state.sectorState[key].chat.slice(-12);
}

function chatResponse(key, text) {
  const sector = sectors[key];
  const data = state.sectorState[key];
  const score = riskScore(data.severity, data.volume);
  const lower = text.toLowerCase();
  if (lower.includes("impact") || lower.includes("benefit") || lower.includes("value")) {
    return `Expected business impact: ${sector.impact.join(", ")}. Current ${sector.kpiLabel.toLowerCase()} is ${score}%, so the strongest value case is rapid containment plus measurable KPI recovery.`;
  }
  if (lower.includes("approve") || lower.includes("approval")) {
    return "Use Request Approval on a recommendation. I will summarize the decision, expected benefit, execution speed, and automation controls for the human gate.";
  }
  if (lower.includes("report")) {
    return "Generate Report will create a concise executive summary covering diagnosis, action, automated steps, impact, and governance status.";
  }
  return `For ${data.incident}, I would diagnose severity, quantify ${sector.kpiLabel.toLowerCase()}, recommend the highest-value intervention, request approval, then run the automation playbook with KPI monitoring.`;
}

function openApproval(key, index) {
  const sector = sectors[key];
  const data = state.sectorState[key];
  const rec = sector.recommendations[index];
  state.selectedRecommendation = { key, index, ...rec };
  modalCategory.textContent = sector.nav;
  approvalQuestion.textContent = `Approve "${rec.title}" for the current ${data.incident.toLowerCase()} scenario?`;
  approvalImpact.textContent = `Expected impact: ${rec.impact}. Execution window: ${rec.speed}. The runbook will execute under monitoring and generate a report trail.`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function startAutomation(key, rec) {
  const data = state.sectorState[key];
  data.automation = [];
  data.report = "";
  addChat(key, "agent", `Approved: ${rec.title}. I am starting automation and will update the runbook as each step completes.`);
  sectors[key].runbook.forEach((_, index) => {
    window.setTimeout(() => {
      if (!data.automation.includes(index)) data.automation.push(index);
      if (index === sectors[key].runbook.length - 1) {
        data.report = buildReport(key, rec);
        addChat(key, "agent", "Automation completed. The business-impact report is ready for review.");
      }
      if (state.activeTab === key) renderSector(key);
    }, 550 + index * 520);
  });
}

function buildReport(key, rec = null) {
  const sector = sectors[key];
  const data = state.sectorState[key];
  const score = riskScore(data.severity, data.volume);
  const recommendation = rec || sector.recommendations[0];
  const complete = `${data.automation.length}/${sector.runbook.length}`;

  return [
    `${sector.nav} Agent Report`,
    "",
    `Scenario: ${data.incident}`,
    `Diagnosis: ${diagnosisLabel(score)} with ${score}% ${sector.kpiLabel.toLowerCase()}.`,
    `Recommendation: ${recommendation.title}.`,
    `Business impact: ${recommendation.impact}; ${sector.impact.join("; ")}.`,
    `Automation status: ${complete} runbook steps completed.`,
    `Governance: human approval ${data.automation.length ? "captured before execution" : "required before execution"}.`,
    "",
    `Next action: monitor ${sector.valueChain.join(", ")} and refresh the report after KPI movement is confirmed.`
  ].join("\n");
}

function activityEvents() {
  return [
    {
      title: "Diagnosis agent",
      detail: "Continuously scores incidents by severity, volume, and value-chain exposure."
    },
    {
      title: "Recommendation agent",
      detail: "Selects business actions based on impact, execution speed, and operational guardrails."
    },
    {
      title: "Approval gate",
      detail: "Routes high-impact actions to an accountable leader before automation begins."
    },
    {
      title: "Automation agent",
      detail: "Executes runbooks, updates system handoffs, and monitors outcome KPIs."
    },
    {
      title: "Reporting agent",
      detail: "Creates executive summaries with value delivered, risk posture, and audit context."
    }
  ];
}

function drawImpactChart() {
  const canvas = document.querySelector("#impact-chart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const values = [4.8, 2.3, 2.1, 1.6, 1.7];
  const labels = ["Supply", "Care", "Banking", "Telecom", "Energy"];
  const colors = ["#1e63c6", "#087f83", "#24774f", "#b26a00", "#be3f3f"];
  const max = Math.max(...values);
  const pad = 46;
  const barGap = 24;
  const barWidth = (width - pad * 2 - barGap * (values.length - 1)) / values.length;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d9e0e7";
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i += 1) {
    const y = pad + i * ((height - pad * 2) / 3);
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  values.forEach((value, index) => {
    const barHeight = (value / max) * (height - pad * 2);
    const x = pad + index * (barWidth + barGap);
    const y = height - pad - barHeight;
    ctx.fillStyle = colors[index];
    roundRect(ctx, x, y, barWidth, barHeight, 8);
    ctx.fill();
    ctx.fillStyle = "#16202a";
    ctx.font = "700 22px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`$${value.toFixed(1)}M`, x + barWidth / 2, y - 12);
    ctx.fillStyle = "#667482";
    ctx.font = "700 16px Inter, sans-serif";
    ctx.fillText(labels[index], x + barWidth / 2, height - 16);
  });
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function scrollChat() {
  const chatLog = document.querySelector("#chat-log");
  if (chatLog) chatLog.scrollTop = chatLog.scrollHeight;
}

render();
