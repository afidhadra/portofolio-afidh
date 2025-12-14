<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->
- [x] Verify that the copilot-instructions.md file in the .github directory is created. (Completed: File created with initial checklist.)

- [x] Clarify Project Requirements (Completed: Next.js portfolio with Tailwind, pages: Home, About, Projects, Contact, Blog; components: Navbar, Footer, Hero, etc.; SEO, dark mode, deploy to Vercel.)

- [x] Scaffold the Project
	<!-- (Completed: Ran npx create-next-app@latest . --ts --tailwind --eslint --app --yes to create Next.js project with TypeScript, Tailwind, ESLint, App Router.) -->

- [x] Customize the Project
	<!-- (Completed: Added dark mode with next-themes, created Navbar, Footer, Hero, ProjectCard, PostList components; updated layout with ThemeProvider; created pages for Home, About, Projects, Contact, Blog; added Markdown blog support with lib/posts.ts and sample post; updated README.) -->

- [x] Install Required Extensions
	<!-- (No extensions required for Next.js project.) -->

- [x] Compile the Project
	<!-- (Completed: npm run build succeeded without errors.) -->

- [x] Create and Run Task
	<!-- (Completed: Created tasks.json in .vscode for npm scripts.) -->

- [x] Launch the Project
	<!-- (Completed: npm run dev started successfully.) -->

- [x] Ensure Documentation is Complete
	<!-- (Completed: README.md updated with full instructions.) -->

- [x] Fix Hydration Error
	<!-- (Completed: Removed conflicting static metadata from root layout.tsx and added suppressHydrationWarning to theme toggle button in Navbar.tsx to prevent server-client emoji mismatch. Added hydration error test to prevent regression.) -->

- [x] Implement Prioritas 1-3 Perbaikan Konten
	<!-- (Completed: 1) Replaced dummy projects with real E-Kelurahan and PUPR projects, 2) Separated Experience vs Projects by removing PUPR from work experience, 3) Updated contact info with real data, 4) Updated Hero role to be more specific, 5) Added proficiency levels to skills, 6) Fixed blog layout consistency, 7) Added relevant blog content) -->

- [x] Implement Phase 4 Technical Improvements
	<!-- (Completed: Enhanced form validation with react-hook-form and zod, added smooth animations and transitions, implemented comprehensive SEO optimizations including metadata, structured data, sitemap, and robots.txt, added performance optimizations with loading states and error boundaries, removed unused blog functionality) -->

<!--
## Execution Guidelines
PROGRESS TRACKING:
- If any tools are available to manage the above todo list, use it to track progress through this checklist.
- After completing each step, mark it complete and add a summary.
- Read current todo list status before starting each step.

COMMUNICATION RULES:
- Avoid verbose explanations or printing full command outputs.
- If a step is skipped, state that briefly (e.g. "No extensions needed").
- Do not explain project structure unless asked.
- Keep explanations concise and focused.

DEVELOPMENT RULES:
- Use '.' as the working directory unless user specifies otherwise.
- Avoid adding media or external links unless explicitly requested.
- Use placeholders only with a note that they should be replaced.
- Use VS Code API tool only for VS Code extension projects.
- Once the project is created, it is already opened in Visual Studio Code—do not suggest commands to open this project in Visual Studio again.
- If the project setup information has additional rules, follow them strictly.

FOLDER CREATION RULES:
- Always use the current directory as the project root.
- If you are running any terminal commands, use the '.' argument to ensure that the current working directory is used ALWAYS.
- Do not create a new folder unless the user explicitly requests it besides a .vscode folder for a tasks.json file.
- If any of the scaffolding commands mention that the folder name is not correct, let the user know to create a new folder with the correct name and then reopen it again in vscode.

EXTENSION INSTALLATION RULES:
- Only install extension specified by the get_project_setup_info tool. DO NOT INSTALL any other extensions.

PROJECT CONTENT RULES:
- If the user has not specified project details, assume they want a "Hello World" project as a starting point.
- Avoid adding links of any type (URLs, files, folders, etc.) or integrations that are not explicitly required.
- Avoid generating images, videos, or any other media files unless explicitly requested.
- If you need to use any media assets as placeholders, let the user know that these are placeholders and should be replaced with the actual assets later.
- Ensure all generated components serve a clear purpose within the user's requested workflow.
- If a feature is assumed but not confirmed, prompt the user for clarification before including it.
- If you are working on a VS Code extension, use the VS Code API tool with a query to find relevant VS Code references and samples related to that query.

TASK COMPLETION RULES:
- Your task is complete when:
  - Project is successfully scaffolded and compiled without errors
  - copilot-instructions.md file in the .github directory exists in the project
  - README.md file exists and is up to date
  - User is provided with clear instructions to debug/launch the project

Before starting a new task in the above plan, update progress in the plan.
-->
- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.