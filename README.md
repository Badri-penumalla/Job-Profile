# Job-Profile Application

### Project Overview
This project is a **Full-Stack Job Portal Web Application** built with **React 19** and **Vite**. It serves as a centralized platform for students and job-seekers to manage professional profiles, discover active job openings, and track their application history in real-time.

### Majority of Work
The core development of this repository is focused on **Frontend Architecture and User Workflow**. Significant work has been dedicated to:
* **State & Session Management**: Implementing a global state using the **React Context API** to handle authentication tokens and user profile data.
* **Secure User Flow**: Developing complex onboarding logic, including **OTP-based email verification** and password security validation via `val-pass`.
* **Dynamic UI Components**: Building an interactive dashboard with slide-out panels for job details, integrated with **Skeleton Loaders** for a seamless user experience.
* **API Service Layer**: Architecting a modular service layer using **Axios** to communicate with a **remote Node.js/Express backend**.

---

## 🚀 Key Features

* **User Authentication**: A complete login and registration system with secure route protection.
* **OTP Verification**: Integrated account verification via One-Time Passwords to ensure secure user registration.
* **Interactive Dashboard**: Real-time browsing of companies with detailed information on CTC, application deadlines, and required skills.
* **Job Application Tracking**: A system that allows users to apply for roles and prevents duplicate applications for the same position.
* **Professional Profile Sidebar**: A personalized navigation area that displays contact information, skills, and the total number of companies applied to.
* **Detailed Overviews**: Deep-dive views for each company, including job functions, eligibility criteria, and direct links to official brochures or websites.

## 🛠️ Tech Stack

* **Core Library**: [React 19](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
* **Routing**: [React Router DOM v7](https://reactrouter.com/)
* **Networking**: [Axios](https://axios-http.com/)
* **State Management**: React Context API
* **Validation**: `val-pass` (Password validation)
* **Notifications**: `react-hot-toast`

## 📁 Project Structure

* `src/component/contexts/`: Global application state management via `UserContext.jsx`.
* `src/component/register/`: Logic for user onboarding, including `Register.jsx` and `VerifyOtp.jsx`.
* `src/home/dashboard/`: The main application hub for job discovery and applications.
* `src/home/sideNav/`: Components for the user profile and application counter.
* `src/service/`: Modular API service layers for backend communication (`userServices.js`).
* `src/instance/`: Centralized Axios configuration.

## ⚙️ Setup and Installation

1.  **Clone the repository**:
    ```bash
    git clone [repository-url]
    cd job-profile
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run in development mode**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 🔗 Backend Configuration
The application is configured to communicate with the following API base URL:  
`https://jobpor-24dq.onrender.com/`