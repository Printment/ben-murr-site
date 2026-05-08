const richTextBlock = (text) => ({
  _type: "block",
  style: "normal",
  children: [{ _type: "span", text }],
})

export const fallbackAiTools = [
  {
    title: "ChatGPT",
    slug: "chatgpt",
    order: 1,
    summary:
      "My general-purpose thinking partner for drafting, critique, synthesis and pressure-testing ideas before they turn into something bigger.",
    tags: [
      { title: "Writing", slug: "writing" },
      { title: "Thinking Partner", slug: "thinking-partner" },
      { title: "Research", slug: "research" },
    ],
    whatItIs: [
      richTextBlock(
        "ChatGPT is the tool I reach for when I need breadth, structured thinking and a fast way to turn rough ideas into something clearer."
      ),
    ],
    whatIUseItFor: [
      richTextBlock(
        "I use it to draft outlines, challenge my own thinking, review copy I have already written and work through product, communication and planning problems."
      ),
    ],
    whereItWorksWell: [
      richTextBlock(
        "It is strongest when I need a capable all-rounder that can move between writing, analysis, planning and critique without much setup."
      ),
    ],
    drawbacksOrLimits: [
      richTextBlock(
        "The main risk is accepting polished output too quickly. It still needs judgment, editing and a clear sense of what good looks like."
      ),
    ],
    whoShouldUseIt: [
      richTextBlock(
        "Good for product people, leaders and generalists who want a flexible tool that can support a wide range of day-to-day work."
      ),
    ],
    myVerdict: [
      richTextBlock(
        "This is the tool I use most often because it is broad, adaptable and consistently useful across both strategic and practical work."
      ),
    ],
    seoTitle: "ChatGPT",
    seoDescription:
      "How Ben Murr uses ChatGPT, where it works well and the trade-offs that matter in practice.",
  },
  {
    title: "Codex",
    slug: "codex",
    order: 2,
    summary:
      "The tool that has helped me move closest to the build, especially when I want to understand code, structure and the mechanics of shipping something live.",
    tags: [
      { title: "Coding", slug: "coding" },
      { title: "Workflow", slug: "workflow" },
      { title: "Hands-On Learning", slug: "hands-on-learning" },
    ],
    whatItIs: [
      richTextBlock(
        "Codex is the tool I use when I want AI to work much closer to real files, implementation tasks and the practical steps involved in building and updating a product."
      ),
    ],
    whatIUseItFor: [
      richTextBlock(
        "I use it for website changes, debugging, understanding how pieces fit together and working through build, Git and deployment steps that I would not normally handle myself."
      ),
    ],
    whereItWorksWell: [
      richTextBlock(
        "It works best when the task is concrete and tied to a real environment, especially where the value comes from actually making the change rather than only discussing it."
      ),
    ],
    drawbacksOrLimits: [
      richTextBlock(
        "It still benefits from clear direction and some patience. When the context is messy or the goal is vague, it needs more steering than a simpler writing task would."
      ),
    ],
    whoShouldUseIt: [
      richTextBlock(
        "Best for people who want to get hands-on with technical work without pretending they already know everything about the tooling."
      ),
    ],
    myVerdict: [
      richTextBlock(
        "Codex has been one of the most valuable tools for my own learning because it closes the gap between talking about delivery and actually doing it."
      ),
    ],
    seoTitle: "Codex",
    seoDescription:
      "How Ben Murr uses Codex, where it works well and how it supports hands-on technical learning.",
  },
  {
    title: "Sanity",
    slug: "sanity",
    order: 3,
    summary:
      "The content layer behind this site. It gives me a clean way to edit, structure and grow pages without needing to push code for every content change.",
    tags: [
      { title: "CMS", slug: "cms" },
      { title: "Content", slug: "content" },
      { title: "Website Ops", slug: "website-ops" },
    ],
    whatItIs: [
      richTextBlock(
        "Sanity is the headless CMS powering the editable parts of this website, from blog content to the About and AI Tools sections."
      ),
    ],
    whatIUseItFor: [
      richTextBlock(
        "I use it to manage copy, images, ordering and page-level settings so the site can evolve without every change becoming a coding task."
      ),
    ],
    whereItWorksWell: [
      richTextBlock(
        "It works well when content needs structure and flexibility at the same time, especially across multiple page types."
      ),
    ],
    drawbacksOrLimits: [
      richTextBlock(
        "The setup is more involved than simple static content. There is a little more schema thinking upfront before it becomes easy to use day to day."
      ),
    ],
    whoShouldUseIt: [
      richTextBlock(
        "Useful for people who want a site to stay editable and grow over time without constantly touching code."
      ),
    ],
    myVerdict: [
      richTextBlock(
        "Sanity has been worth the setup because it turns the site from a one-off build into something I can keep evolving as a living document."
      ),
    ],
    seoTitle: "Sanity",
    seoDescription:
      "How Ben Murr uses Sanity as the CMS behind his website and why it is useful as a living content layer.",
  },
]
