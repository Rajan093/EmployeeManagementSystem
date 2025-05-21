const employees = [
    {
      id: "emp001",
      firstname: "Aarav",
      email: "aarav@company.com",
      password: "123",
      taskCount: {
        active: 2,
        completed: 1,
        newTask: 0,
        failed: 0  
      },
      tasks: [
        {
          taskTitle: "Design Landing Page",
          taskDescription: "Create a responsive landing page for product.",
          taskDate: "2025-05-10",
          category: "design",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Fix Navbar Bug",
          taskDescription: "Resolve mobile layout issues in navbar.",
          taskDate: "2025-05-08",
          category: "development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Write Documentation",
          taskDescription: "Document setup and deployment steps.",
          taskDate: "2025-05-12",
          category: "documentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: "emp002",
      firstname: "Isha",
      email: "isha@company.com",
      password: "123",
      taskCount: {
        active: 2,
        completed: 1,
        newTask: 0,
        failed: 1
      },
      tasks: [
        {
          taskTitle: "Update User API",
          taskDescription: "Add email verification endpoint.",
          taskDate: "2025-05-11",
          category: "backend",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Login UI Revamp",
          taskDescription: "Redesign login form UI with animations.",
          taskDate: "2025-05-13",
          category: "design",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Fix Toast Errors",
          taskDescription: "Toast messages overlap on screen.",
          taskDate: "2025-05-09",
          category: "frontend",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          taskTitle: "Implement Auth Guard",
          taskDescription: "Protect routes using JWT tokens.",
          taskDate: "2025-05-14",
          category: "security",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: "emp003",
      firstname: "Rohan",
      email: "rohan@company.com",
      password: "123",
      taskCount: {
        active: 1,
        completed: 1,
        newTask: 1,
        failed: 0
      },
      tasks: [
        {
          taskTitle: "Optimize Images",
          taskDescription: "Compress and convert assets for web.",
          taskDate: "2025-05-11",
          category: "optimization",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Research WebSockets",
          taskDescription: "Explore real-time update solutions.",
          taskDate: "2025-05-13",
          category: "research",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Improve Dark Mode",
          taskDescription: "Ensure full compatibility across pages.",
          taskDate: "2025-05-10",
          category: "frontend",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: "emp004",
      firstname: "Meera",
      email: "meera@company.com",
      password: "123",
      taskCount: {
        active: 2,
        completed: 2,
        newTask: 2,
        failed: 0
      },
      tasks: [
        {
          taskTitle: "Setup CI/CD",
          taskDescription: "Integrate GitHub Actions with the repo.",
          taskDate: "2025-05-08",
          category: "devops",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Create Unit Tests",
          taskDescription: "Write test cases for core functions.",
          taskDate: "2025-05-09",
          category: "testing",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Revise Onboarding",
          taskDescription: "Simplify user onboarding process.",
          taskDate: "2025-05-12",
          category: "UX",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Database Cleanup",
          taskDescription: "Remove redundant tables and data.",
          taskDate: "2025-05-13",
          category: "database",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Analytics Dashboard",
          taskDescription: "Add user traffic graphs.",
          taskDate: "2025-05-11",
          category: "frontend",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: "emp005",
      firstname: "Neha",
      email: "neha@company.com",
      password: "123",
      taskCount: {
        active: 2,
        completed: 0,
        newTask: 1,
        failed: 1
      },
      tasks: [
        {
          taskTitle: "Content Strategy",
          taskDescription: "Plan content for upcoming release.",
          taskDate: "2025-05-09",
          category: "marketing",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "SEO Improvements",
          taskDescription: "Update meta tags and content titles.",
          taskDate: "2025-05-10",
          category: "SEO",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Translate Homepage",
          taskDescription: "Add Spanish translation.",
          taskDate: "2025-05-12",
          category: "localization",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          taskTitle: "New Blog Layout",
          taskDescription: "Design new layout for blogs.",
          taskDate: "2025-05-14",
          category: "design",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: "admin001",
      email: "admin@company.com",
      password: "123"
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  };
  // setLocalStorage()

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
  };