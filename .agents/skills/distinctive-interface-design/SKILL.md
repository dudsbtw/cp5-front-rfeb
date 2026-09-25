---
name: distinctive-interface-design
description: Create or redesign web interfaces and landing pages with a visual identity specific to the brief. Use when planning, building, or refining a page's art direction, typography, layout, motion, and interface copy.
---

# Distinctive interface design

Approach the work as the design lead of a studio whose clients expect distinct visual identities. Make deliberate choices about palette, typography, layout, and copy that arise from the actual subject and audience. Take a justified aesthetic risk when it improves the result. Treat the user's brief and stated visual direction as authoritative, even when they request a treatment listed below as a common default.

## Establish the subject

Identify the product or subject, the intended audience, and the page's primary job before designing. If the brief omits the subject, propose one concrete subject, audience, and purpose and confirm them with the client. Use any relevant context about the client's preferences as a hint. Let the subject's industry, materials, and vernacular inform the design; carry its real content through the page.

## Plan before implementation

Work in two passes. First, make a compact design plan based on the brief:

- **Color:** Four to six named base colors with hex values.
- **Type:** One or two deliberate typefaces, their roles, and a clear scale with intentional weights, widths, and spacing. If using two families, make their roles visibly distinct.
- **Layout:** A concise layout concept, one-sentence alternatives and ASCII wireframes where useful, plus explicit alignment guidance.
- **Principles:** What makes this design specific to this subject and which single element should be most memorable.

Review the plan against the brief before coding. For each choice, ask whether the same choice would appear in a similar but different brief. Revise generic choices and state what changed and why. Implement the revised plan.

## Art direction and visual structure

For a web page, open with the most characteristic thing in the subject's world. Choose the appropriate form for the hero: headline, image, animation, live demo, interaction, or another treatment. Use a large number with a small label, supporting stats, and a gradient only when the subject calls for it.

Let typography carry personality. Use the type treatment of a headline as an active visual element. Follow a deliberate type scale, informed by *The Elements of Typographic Style*. Keep body lines under about 80 characters by default. Serif body text may run slightly longer and needs slightly more line height than sans-serif body text. Avoid accenting only one headline word, setting labels in all caps by habit, or adding labels above content without a purpose.

Treat borders, rules, outlines, numbering, dividers, and labels as information. Number items only when their order is meaningful, such as a process or timeline. Spend visual boldness in one place; keep the rest disciplined and remove decoration that does not serve the brief.

Use automatic motion sparingly. Prefer one orchestrated moment when motion helps direct attention. Avoid routine fade-and-slide entrances on every section and hover transitions on every card. Use interaction-driven motion to show what changed after an action.

Check for these common generated-design defaults when the brief leaves visual direction open:

1. Warm cream, high-contrast serif display, and terracotta or warm-clay accent.
2. Near-black with a single acid-green or vermilion accent.
3. Broadsheet columns, hairline rules, and zero border radius regardless of subject.
4. Repeated rounded SaaS cards, uniform soft shadows, and decorative gradients.
5. Tracked all-caps eyebrow labels, middle-dot metadata, `WORD — fragment` labels, tinted near-black used reflexively, monospace data labels, and arrows appended to links or buttons.

These treatments are valid when the brief calls for them. When it does not, choose something grounded in the subject instead of reaching for a familiar default.

## Interface writing

Write only what helps a person understand or use the interface. Decide what each element needs to say before writing it. Use the end user's terms, simple language, active voice, and a tone appropriate to the brand and audience. Describe what something is or does instead of making a vague sales claim. Give each text element one job.

Make actions precise and consistent across the flow: for example, `Save changes` leads to `Changes saved`, rather than a generic `Submit`. Write errors that explain what happened and how to recover without vague apologies. Make empty states offer a clear next action. Prefer sentence case and remove filler.

## Build and review

Keep CSS selector specificity intentional so rules do not unexpectedly cancel each other, especially across sections and calls to action. Deliver responsive layouts down to mobile, visible keyboard focus, reduced-motion support, visually accessible contrast, and harmonious colors. Review screenshots when available, critique the result against the plan, and remove at least one unnecessary decorative detail before finishing.
