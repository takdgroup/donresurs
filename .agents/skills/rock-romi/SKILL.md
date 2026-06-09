---
name: rock-romi
description: "Use this skill when tasked with creating landing pages, drafting marketing copy, defining product positioning, or planning promotional websites. This skill enforces the Rock & Romi marketing framework (Power Position, Algorithm of Persuasion, S.I.N. Offer) to build high-conversion landing pages. It prevents any code execution or frontend development until the strategy and copy are approved."
---

# Rock & Romi High-Conversion Marketing Methodology

This skill implements the marketing-first landing page design methodology based on the frameworks developed by Katerina Chernyshova (founder & CEO of ROCK & ROMI). It ensures that before a single line of code is written or a layout is styled, the core marketing hook, messaging structure, and offer are validated and approved.

<HARD-GATE>
Do NOT write any HTML, CSS, JavaScript, set up project scaffolds, or generate interface designs until:
1. You have completed all checklist steps up to the User Approval Gate.
2. The user has explicitly reviewed and approved:
   - The Power Position (Big Idea, Unique Mechanism, Big Promise, Hook).
   - The 11-step Algorithm of Persuasion (copy structure).
   - The 13-step S.I.N. Offer.
Only after receiving explicit user approval may you transition to the `writing-plans` skill to plan the technical implementation.
</HARD-GATE>

## Checklist

You MUST create tasks for each of these items and complete them in order:

1. **Explore project context** — check files, docs, target audience, and business context.
2. **Analyze Market Sophistication** — determine the audience's exposure to competing promises (Levels 1 to 5) to select the right positioning style.
3. **Formulate the Power Position** — define the Big Idea, Unique Mechanism, Big Promise, and Teaser Element (Hook).
4. **Draft the Algorithm of Persuasion** — map out the 11-step persuasive copy block framework answering the user's primary mental questions.
5. **Construct the S.I.N. Offer** — compile a Superior, Irresistible, No-brainer offer using the 13-step framework.
6. **Apply Copywriting Checklist** — run the drafted copy through CUB-analysis (Confusing, Unbelievable, Boring) and other editing filters.
7. **Spec Self-Review** — verify the marketing spec for internal consistency, clarity, and completeness.
8. **User Approval Gate** — present the finalized positioning and copywriting spec to the user and wait for explicit approval.
9. **Transition to Implementation** — once approved, invoke the `writing-plans` skill to generate the implementation plan.

## Process Flow

```dot
digraph rock_romi {
    "Explore project context" [shape=box];
    "Analyze Market Sophistication" [shape=box];
    "Formulate Power Position\n(Big Idea, Mechanism, Promise, Hook)" [shape=box];
    "Draft Algorithm of Persuasion\n(11-step copy outline)" [shape=box];
    "Construct S.I.N. Offer\n(13-step irresistible framework)" [shape=box];
    "Apply Copy Checklist\n(CUB test, readability)" [shape=box];
    "Self-Review Spec\n(check placeholders & consistency)" [shape=box];
    "User Approval Gate\n(Approved?)" [shape=diamond];
    "Invoke writing-plans skill" [shape=doublecircle];

    "Explore project context" -> "Analyze Market Sophistication";
    "Analyze Market Sophistication" -> "Formulate Power Position\n(Big Idea, Mechanism, Promise, Hook)";
    "Formulate Power Position\n(Big Idea, Mechanism, Promise, Hook)" -> "Draft Algorithm of Persuasion\n(11-step copy outline)";
    "Draft Algorithm of Persuasion\n(11-step copy outline)" -> "Construct S.I.N. Offer\n(13-step irresistible framework)";
    "Construct S.I.N. Offer\n(13-step irresistible framework)" -> "Apply Copy Checklist\n(CUB test, readability)";
    "Apply Copy Checklist\n(CUB test, readability)" -> "Self-Review Spec\n(check placeholders & consistency)";
    "Self-Review Spec\n(check placeholders & consistency)" -> "User Approval Gate\n(Approved?)";
    "User Approval Gate\n(Approved?)" -> "Formulate Power Position\n(Big Idea, Mechanism, Promise, Hook)" [label="no, revise"];
    "User Approval Gate\n(Approved?)" -> "Invoke writing-plans skill" [label="yes"];
}

Detailed Methodology Guidelines
1. Analyze Market Sophistication (Изощренность рынка)
Before writing the copy, analyze what promises the competitors are already making. This determines where the target audience is on the sophistication scale (Levels 1–5):

Level 1: Simple Promise (Обещание) — The market is new. A basic promise works.

Example: "Learn to speak English."

Level 2: Expanded Promise (Расширенное обещание) — The market has competitors. Add timeframes or metrics to stand out.

Example: "Learn to speak English in 30 days."

Level 3: Unique Mechanism (Обещание + уникальный механизм) — The market is saturated. The audience is skeptical of bare promises. Introduce how it works.

Example: "Learn to speak English in 30 days via the 'Immersion Method' designed by Oxford linguists."

Level 4: Expanded Mechanism (Обещание + расширенный механизм) — Competitors copied mechanisms. Back up your mechanism with greater authority or social proof.

Example: "Learn to speak English in 30 days via the 'Immersion Method' designed by Oxford linguists and used by employees of Google and Tesla."

Level 5: Focus on the Prospect/Story (Фокус на человеке/истории) — The market is completely tired of promotions. All promises are ignored (banner blindness). Lead with a powerful teaser hook, human story, or mystery, and build trust before revealing the mechanism.

2. Formulate the Power Position (Система Power Position)
Positioning should break templates and trigger automatic interest. Construct these four elements:

Big Idea (Большая идея): The core narrative of why this product is fundamentally different. It must trigger an emotional "aha!" moment, be unexpected, and break patterns.

Tesla: "An electric car that is faster than gasoline ones."

Airbnb: "Live like a local."

Dropbox: "Your files — wherever you are."

Unique Mechanism (Уникальный механизм): The proprietary engine/method behind the results. If no physical patent exists, name a known process with a new, catchy term.

Physical: Patented technology or unique manufacturing equipment.

New term for known process: e.g., "Intermittent Fasting" (интервальное голодание) instead of just skipping meals.

New approach: Formulating a brand new workflow from scratch.

Big Promise (Большое обещание): A bold, concrete, but realistic transformation.

Weak: "Grow your business."

Strong (SIN): "Double your business profits in 90 days using the X System."

Teaser Element / Hook (Хук): A captivating element that grabs attention immediately.

Secret: "Why 90% of marketers lose money on advertising."

News: "Recent studies from Harvard Business Review showed..."

Authority: "Elon Musk's method for productivity growth."

Provocation: "How a 55-year-old golfer with arthritis humiliates young pros."

Drama: "Imagine losing thousands of dollars monthly because customers simply don't trust you..."

3. Draft the Algorithm of Persuasion (Алгоритм убеждения)
Map the landing page structure to answer these 11 questions in sequence to keep the reader engaged "from cover to cover":

What is unique? (В чем уникальность?) — Start with the Teaser Hook and the Unique Mechanism.

What's in it for me? (Какая мне от этого выгода?) — Show the primary benefit and the consequence of not solving the problem.

How do I know this is real? (Откуда мне знать, что это реально?) — Show case studies, social proof, and initial results.

Why haven't I succeeded before? (Почему у меня не получается?) — Remove guilt from the reader. Blame the flawed existing "system" or common myths, showing you are on their side.

Who is to blame for my problems? (Кто виноват в моих проблемах?) — Create a common enemy (e.g., outdated methods, greedy middlemen, default market biases).

Why now? (Почему сейчас?) — Create urgency or highlight a current window of opportunity.

Why should I believe you? (Почему я должен тебе верить?) — Share your authority, credentials, certifications, and experience.

How does your mechanism work? (Как работает твой механизм?) — Explain the logical steps of the unique mechanism behind the scenes.

Shooting down objections (Отстрел возражений) — Address skepticism toward the mechanism and idea itself, not just the product features.

How to start / Offer (Как начать / Оффер) — Present the core deal clearly.

What do I have to lose? (Что мне терять?) — Risk reversal (guarantee) and final push.

4. Construct the S.I.N. Offer (Система безотказного оффера)
Your offer must be structured so that saying "no" makes the prospect feel stupid ("Я буду тупым, если не куплю"). It uses the S.I.N. framework:

S (Superior): The product clearly outperforms competitor alternatives.

I (Irresistible): The value is so high it is impossible to ignore.

N (No-brainer): All buyer risk is completely eliminated.

Construct the offer by drafting these 13 steps:

Audience analysis: Re-list primary pains, fears, and desires.

Product as a solution: Frame every feature of your product as a direct cure for a specific pain.

Main promise: Explicitly state the ultimate transformation.

Facts and benefits: Present features through the lens of what the customer gets, not what you give.

Summary of benefits: Reiterate the value package.

Prices and conditions: Clear pricing structures, installment options, and tier levels.

Guarantee (Risk Reversal): Clear risk removal (e.g., "100% money back if you don't get the defined result").

Reviews, proofs, and cases: Target objections with specific evidence.

Bonuses: Highly valuable add-ons that solve the next logical problem.

Urgency/Scarcity: Why they must act immediately.

Call to Action (CTA): Clear, single path forward.

Opportunity cost: Describe what they lose if they walk away and keep their problem.

Final CTA: Re-prompt with the core benefits highlighted.

5. Copywriting Checklist & Editing Filters
Before presenting the copy to the user, perform a final review against these filters:

CUB Analysis: Scan the text for anything that is Confusing, Unbelievable, or Boring. Re-write or cut these parts immediately.

XR Readability: Ensure short sentences, clear paragraphs, and scannable visual structures.

LR Cognitive Fluency: Use plain, simple language instead of heavy business jargon.

Mobile-First Check: Test how the headlines and bullet points look on small viewports. Keep them punchy and short.

Output Spec Structure
When creating the marketing spec, save it to docs/superpowers/specs/YYYY-MM-DD-positioning-<topic>.md and structure it exactly as follows:

# Marketing & Copy Spec: [Project Name]

## 1. Market Sophistication Level
* **Level:** [1-5]
* **Competitor Claims:** [List 2-3 competitor promises]
* **Target Positioning Strategy:** [Explanation of why this level was selected]

## 2. Power Position Framework
* **Big Idea:** [The core pattern-breaking narrative]
* **Unique Mechanism:** [Proprietary approach or catchy new term]
* **Big Promise:** [Bold, measurable result/transformation]
* **Teaser Hook:** [Provocative hook/secret/drama]

## 3. 11-Step Algorithm of Persuasion (Copy Blocks)
[Draft the actual Russian copy outline or content for each of the 11 steps]

## 4. 13-Step S.I.N. Offer
[Define the 13 components of the offer in Russian, including pricing, risk reversal, bonuses, and CTAs]

## 5. Copy Self-Review (CUB Test & Fluency)
* **Confusing Elements Removed:** [Yes/No + details]
* **Unbelievable Elements Backed by Proof:** [Yes/No + details]
* **Boring Blocks Cut or Hooked:** [Yes/No + details]

Once the user approves the spec, you are cleared to invoke the writing-plans skill to design the technical components and folder layouts. Do NOT design or code anything beforehand.
