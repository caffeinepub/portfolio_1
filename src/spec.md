# Specification

## Summary
**Goal:** Deploy an unchanged single-page portfolio site that matches the provided React/Tailwind `Portfolio` component and is deployable to the Internet Computer via the standard dfx workflow.

**Planned changes:**
- Implement the portfolio SPA UI in the React+TypeScript frontend to mirror the provided `Portfolio` component exactly (sections: Home, About, Skills, Projects, Resume, Contact) with the same text, links, and anchors (`#home`, `#about`, etc.).
- Add/configure frontend dependencies required by the provided code (Framer Motion, react-type-animation, lucide-react) so the app compiles and renders animations/typing/icons.
- Ensure static asset serving for `/resume.pdf` from the frontend public assets path so the Resume download link works when the file is present.
- Add a minimal README describing how to run locally and deploy to the Internet Computer using `dfx` (build + deploy).

**User-visible outcome:** Visitors can open the deployed canister URL to view the portfolio with working navbar section scrolling, animations/typing effect, Contact icons/links, and a Resume download link that serves `/resume.pdf` when provided.
