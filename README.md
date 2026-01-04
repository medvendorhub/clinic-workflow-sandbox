# Clinic Workflow Sandbox (Demo)

This project is a synthetic clinic workflow sandbox built to safely prototype and demonstrate clinician productivity tools. It simulates a modern Electronic Health Record (EHR) interface with a focus on clean design and productivity workflows.

> **⚠️ Usage Warning: This is a demo environment only.**
> *   All patient data is synthetic and locally generated.
> *   No real data is stored, processed, or transmitted.
> *   This tool is **not** intended for clinical or diagnostic use.

## Why this exists
Building tools for healthcare requires care. This sandbox allows experimentation with workflow, UX, and assistive tooling without exposing real patient data or interacting with complex, secured clinical systems.

## Features
- **Synthetic Patient Dashboard**:
    - Real-time "Stats Cards" for clinic metrics (Patients Waiting, Avg Time, etc.).
    - Patient queue list with avatars and visit type indicators.
- **Consultation Workspace**:
    - Integrated consultation timer with visual recording indicator.
    - Free-text clinical notes area (`text-lg` for readability).
    - Task checklist with real-time progress tracking.
    - Patient summary sidebar with "Synthetic Constraints" reminders.

## Tech Stack
- **Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (via [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Library**: [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Pure Frontend (No backend dependencies)

## Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/medvendorhub/clinic-workflow-sandbox.git
    cd clinic-workflow-sandbox
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

## Intended Use
- Demonstrating Chrome extensions
- Testing clinician productivity ideas
- Learning in public about healthcare UX

## Next Steps
- Integrate productivity extensions
- Explore assistive (non-diagnostic) AI patterns
