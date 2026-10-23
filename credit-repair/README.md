# KFS Credit Repair — Division Index

**Kingdom Financial Services — presented by Noel Duran**

This folder is the operating foundation for the KFS credit repair division: compliance rules, fee schedule, intake SOP, client-facing scripts, distilled course knowledge, and the dispute letter library.

---

## What KFS Credit Repair Is

KFS helps clients exercise their rights under the Fair Credit Reporting Act (FCRA): reviewing all three bureau reports, identifying items that are **inaccurate, unverifiable, incomplete, or obsolete**, and disputing those items with the credit bureaus and furnishers, round by round, with everything documented.

### The service lane — stay inside it

- ✅ **In lane:** credit report audits, dispute letters to bureaus and furnishers, debt-validation requests to collectors, goodwill requests to original creditors, bureau/creditor follow-up, credit education, monitoring.
- ❌ **Out of lane:** debt negotiation or settlement. In New Jersey that requires a **debt-adjuster license** — a separate regulatory regime. KFS does not offer it.
- ❌ **Never:** disputing accurate items as errors, promising deletions/scores/timelines, creating a new identity or CPN, or any "file segregation" tactic. Prohibited under CROA and against KFS policy.

## The Workflow

1. **Free review** — pull all 3 bureau reports, inventory every negative item, show the client exactly what is hurting them. No charge, no obligation.
2. **Contract packet, signed in person** — CROA contract, Consumer Credit File Rights disclosure, cancellation notice, written authorization. No paid work before this is signed. (See `01-compliance-and-billing.md`.)
3. **Intake & case setup** — collect ID, address proof, baseline scores and item inventory; open the case log. (See `03-intake-checklist.md`.)
4. **Dispute rounds** — item-specific letters from the `letters/` library, sent certified mail, one round at a time; bureaus have ~30 days to investigate each round.
5. **Per-verified-deletion billing** — a fee is earned only when a deletion is verified on that bureau's updated report. **Nothing is ever charged up front** (CROA §1679b(b)). (See `01` and `02-price-list.md`.)
6. **Monthly updates** — client gets copies of every letter sent and a plain-language status update: what was removed, what changed, what is next.

## Files in This Division

| File | What it is |
|---|---|
| `01-compliance-and-billing.md` | The legal foundation: CROA $0-upfront rule, per-deletion billing model, TSR telemarketing trap, contract packet, prohibited claims, record-keeping |
| `02-price-list.md` | KFS per-deletion fee schedule with billing triggers and a worked example |
| `03-intake-checklist.md` | Intake SOP: compliance gate, client info, documents, case setup |
| `04-first-contact-messages.md` | EN/ES first-contact WhatsApp scripts for new leads, with usage notes |
| `course-notes/` | Distilled principles from the SOYDAAT course, rewritten as original KFS SOPs (never copied text) |
| `letters/` | The dispute letter library — 10 original templates with usage rules |

## Data Rules for This Repo (non-negotiable)

- **No client data in this repo, ever.** No names, SSNs, dates of birth, report copies, or case details — templates and SOPs only.
- Client files live in the client's own secured folder, outside this repository.
- Never commit a filled-in letter; only blank templates with `{{placeholders}}`.
- This repo is public: if a document would embarrass KFS or expose a client if read by a stranger, it does not belong here.

---

*Division established Oct 23, 2026. Working guidance, not legal advice — the contract packet gets one attorney review before the first paying client signs.*
