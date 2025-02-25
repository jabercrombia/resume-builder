# Resume Builder

A modern and user-friendly web application for creating, customizing, and downloading professional resumes. Built with **Next.js**, **Tailwind CSS**, **Material-UI (MUI)**, **React Hook Form**, and **React PDF**.

<p style="text-align:center"><img src="https://resume-app-flame.vercel.app/resume-builder-thumb.jpg" width="400"/></p>
## Features

- **Dynamic Resume Form**: Input personal details, work experience, education, skills, and more using a clean and intuitive form powered by **React Hook Form**.
- **Real-Time Preview**: Instantly preview your resume as you fill out the form.
- **Customizable Templates**: Choose from multiple resume templates (coming soon).
- **Download as PDF**: Generate and download your resume as a high-quality PDF using **React PDF**.
- **Responsive Design**: Built with **Tailwind CSS** and **Material-UI** for a seamless experience across all devices.
- **Fast Performance**: Optimized with **Next.js** for server-side rendering (SSR) and static site generation (SSG).

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Material-UI (MUI)**: React component library for pre-built, customizable UI components.
- **React Hook Form**: Library for efficient and flexible form management.
- **React PDF**: Library for generating and rendering PDFs in React.
- **TypeScript**: Optional static typing for better code quality and maintainability.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/resume-builder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd resume-builder
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Open your browser and visit `http://localhost:3000`.

### Building for Production

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Folder Structure

```
/resume-builder
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Next.js pages (routes)
│   ├── styles/          # Global and component-specific styles
│   ├── templates/       # Resume templates
│   ├── utils/           # Utility functions and helpers
│   └── hooks/           # Custom React hooks
├── .env.local           # Environment variables
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration (if using TypeScript)
└── package.json         # Project dependencies and scripts
```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your branch.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Screenshots

<!-- Add screenshots of your application here -->
**Resume Download Page**:
   ![Resume Complete](/resume-app/src/images/download-complete.png)

[**Download Sample PDF**](/resume-app/src/images/sample.pdf)



---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material-UI Documentation](https://mui.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [React PDF Documentation](https://react-pdf.org/)

---

This `README.md` provides a clear overview of the project, its features, technologies, and setup instructions. Customize it further with your project-specific details, screenshots, and links!