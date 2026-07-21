# 👑 KFS Business in a Box — Quick Start Guide

**Get your first client from inquiry to delivery in 3–6 weeks.**

---

## 30-Second Setup

1. ✅ You have everything. No more setup needed.
2. ✅ Pick your first real client or use the template to test.
3. ✅ Follow the 10-step routine below.

---

## The 10-Step Routine (Per Client)

### Step 1: Create the Case ID
**Time:** 2 min | **Owner:** Hermes

- Use format: `KFS-YYYY-###-ClientName` (e.g., `KFS-2026-001-JohnSmith`)
- Copy `Client Work/KFS-2026-001_TEMPLATE/` → `Client Work/KFS-2026-001_ClientName/`
- Update the case ID in `00_Client_Case_Dashboard.md`
- Record status = `LEAD`

### Step 2: Send the Quote
**Time:** 5 min | **Owner:** Hermes

- Customize `templates/CLIENT_MESSAGE_QUOTE.md`
- Replace placeholders: [Client First Name], [Business Name], [State], [your contact]
- Send via WhatsApp, email, or Telegram
- Record "quote sent" date in case dashboard

### Step 3: Agreement & Payment
**Time:** 10 min + payment processing | **Owner:** Client

- Send signed `templates/SERVICE_AGREEMENT_TEMPLATE.md`
- Collect deposit: $800 (preferred) or $1,600 (full upfront)
- Record payment received in case dashboard
- Set status = `PAID_DEPOSIT`

### Step 4: Collect Intake
**Time:** 15 min + 24-48hr response | **Owner:** Client

- Send `templates/CLIENT_INTAKE_FORM.md`
- Schedule callback for any questions
- Record date intake received
- Set status = `INTAKE_RECEIVED`

### Step 5: Verify Completeness
**Time:** 30 min | **Owner:** Hermes

- Check intake against verification checklist in `docs/01_MASTER_WORKFLOW.md` (Stage 4)
- List any missing information
- Send follow-up request if needed
- Set status = `VERIFYING` (if waiting) or `INTAKE_VERIFIED` (if complete)

### Step 6: Submit Formation
**Time:** 1 hour | **Owner:** Hermes

- Use formation provider (e.g., Bizee, LegalZoom, or direct to state)
- Submit LLC formation document
- Record submission date, confirmation #, fee
- Set status = `FORMATION_SUBMITTED`

### Step 7: Track Approvals
**Time:** Passive monitoring, 3–10 business days | **Owner:** State/IRS

- Monitor state filing status
- Receive entity number (NJ DEP # or similar)
- Apply for EIN simultaneously
- Update dashboard when approved
- Set status = `FORMATION_APPROVED`

### Step 8: Coordinate Registrations
**Time:** 2–4 weeks | **Owner:** IRS/State/KFS

- EIN confirmation received
- NJ-REG submitted and received
- Business Registration Certificate obtained
- Record all confirmation #s
- Set status = `REGISTRATION`

### Step 9: Deliver Banking-Readiness Package
**Time:** 2 hours | **Owner:** Hermes

- Generate operating agreement (use template)
- Create business plan (use template)
- Compile startup budget (use template)
- Create banking, insurance, and compliance checklists
- Organize all docs into final folder
- Set status = `BANK_READY`

### Step 10: Final Delivery & Closeout
**Time:** 1 hour + client acknowledgement | **Owner:** Hermes + Client

- Deliver final package (digital or printed)
- Client acknowledges receipt
- Record open obligations (annual reports, tax deadlines)
- Set up compliance reminders
- Set status = `DELIVERED` → `CLOSED`

---

## Status Vocabulary (Use These Only)

```
LEAD              → QUOTED → PAID_DEPOSIT → INTAKE_PENDING
   ↓
INTAKE_RECEIVED → VERIFYING → FORMATION_SUBMITTED → FORMATION_APPROVED
   ↓
REGISTRATION → BANK_READY → DELIVERED
   ↓
CLOSED (or MAINTENANCE if ongoing support)
```

Optional: `BLOCKED` (if waiting on client or external blocker)

---

## Key Files You'll Use

| File | Use When | How |
|------|----------|-----|
| `CLIENT_MESSAGE_QUOTE.md` | Sending initial quote | Customize & send |
| `SERVICE_AGREEMENT_TEMPLATE.md` | Collecting payment | Customize & send for signature |
| `CLIENT_INTAKE_FORM.md` | Collecting business details | Customize & send |
| `CLIENT_CASE_FILE.md` | Master record per case | Copy to case folder |
| `00_Client_Case_Dashboard.md` | Track progress | Update status, dates, blockers |
| `FINAL_DELIVERY_CHECKLIST.md` | QA before delivery | Check all 36 items before closing |
| `01_MASTER_WORKFLOW.md` | Questions about a stage | Refer for details |

---

## After Every Action

Update **2 things:**

1. **Case dashboard** — `status`, dates, blockers, next action
2. **Change log** — `_System/Hermes_Change_Log.md` (record what changed + why)

**Format:**
```markdown
## YYYY-MM-DD HH:MM — [Case ID] Stage [#] Complete

- **Action:** [What you did]
- **Files:** [Case ID]/00_Client_Case_Dashboard.md
- **Next:** [What happens next]
```

---

## What NOT to Do

❌ **Don't store secrets in the vault:**
- SSNs, driver's licenses → secure storage only
- Bank account numbers, passwords → secure storage only
- Signatures, identity docs → secure storage only
- Reference them in the dashboard, but don't paste them in markdown

❌ **Don't commit client data to GitHub:**
- Case files stay in `Client Work/` (local only)
- Only SOPs, templates, automation go to the repo

❌ **Don't skip the agreements:**
- Every client needs a signed service agreement
- Every client needs a completed intake form
- Every delivery needs client acknowledgement

❌ **Don't modify the workflow steps:**
- The 10-step routine is tested and proven
- If a step seems unnecessary, ask first

---

## Real Example: First Client

**Scenario:** Alex wants to start an LLC for a freelance consulting business in NJ.

**Step 1:** Create case `KFS-2026-001-AlexSmith`  
**Step 2:** Send quote: "Hi Alex, here's our package: $1,600, takes 3–6 weeks, covers formation + banking readiness..."  
**Step 3:** Alex signs agreement + pays $800  
**Step 4:** Alex completes intake form (business name: "Smith Consulting LLC", owner 100%, registered agent: Alex)  
**Step 5:** Verify: ✅ all complete  
**Step 6:** Submit LLC formation to NJ + apply for EIN  
**Step 7:** NJ approves, entity # is 123456; IRS issues EIN  
**Step 8:** Get NJ-REG + Business Registration Certificate  
**Step 9:** Create operating agreement, business plan, banking checklist  
**Step 10:** Alex receives final package, confirms, we record his annual report due date (July 31, 2027)  

**Total time:** 4 weeks | **Outcome:** Alex's business is legally formed and banking-ready ✅

---

## Dashboard at a Glance

**_System/Status_Dashboard.md** shows:

```
LEAD:            0 cases
QUOTED:          1 case (Alex Smith)
PAID_DEPOSIT:    2 cases (Jones LLC, Brown LLC)
INTAKE_PENDING:  1 case
BANK_READY:      1 case (waiting delivery ACK)
DELIVERED:       2 cases (this quarter)
```

**Use this to:**
- Know where all clients are in the pipeline
- Spot bottlenecks (e.g., 3 cases stuck in VERIFYING?)
- Plan your week (who needs follow-ups?)

---

## Common Blockers & Fixes

| Blocker | Cause | Fix |
|---------|-------|-----|
| Client ignores intake form | Unclear instructions | Call them; walk through it verbally |
| Formation rejected | Name unavailable or wrong info | Update entity name; re-verify details; resubmit |
| EIN delayed | IRS backlog or incomplete app | Wait 2–4 weeks; recheck application |
| Client won't acknowledge delivery | Doesn't realize project is done | Send "final delivery checklist" + "please confirm receipt" email |
| Multiple owners dispute ownership % | Miscommunication in intake | Schedule 15-min call to clarify; document in case notes |

---

## When to Escalate to Jayto

Ask before proceeding if:

1. **Client requests anything outside the scope** (e.g., "Can you also file my taxes?")
   - Answer: "That's outside the formation package, but I can refer you to a CPA."

2. **Client asks about guarantees** ("Will I definitely get approved for a loan?")
   - Answer: "No. We prepare the docs; lenders make approval decisions."

3. **Client's business involves regulated activities** (e.g., lending, insurance, securities)
   - Escalate: These may require special licensing.

4. **Case is blocked for 14+ days** (client unresponsive, external blocker)
   - Update status = `BLOCKED` and ask Jayto for direction.

5. **Client disputes the invoice or service**
   - Escalate to Jayto for resolution.

---

## Resources

- **Master Workflow:** `docs/01_MASTER_WORKFLOW.md` (detailed 9-stage process)
- **Pricing Rules:** `docs/02_PACKAGE_AND_PRICING.md` (update pricing sheet before quoting)
- **Data Classification:** `docs/03_HERMES_GITHUB_OBSIDIAN_PROTOCOL.md` (what goes where)
- **Hermes Master Prompt:** `automation/HERMES_MASTER_PROMPT.md` (your operating manual)
- **Deployment Report:** `_System/DEPLOYMENT_REPORT.md` (complete system overview)
- **Change Log:** `_System/Hermes_Change_Log.md` (audit trail of all changes)

---

## Ready?

✅ System is live.  
✅ Templates are ready.  
✅ First-case folder is waiting.  

**Next step:** Pick your first real client and start with Step 1.

---

**Quick Start Guide:** `_System/QUICK_START.md`  
**Last updated:** 2026-07-21  
**Maintained by:** Hermes
