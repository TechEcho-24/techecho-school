import { useState } from "react";

const faqs = [
  {
    question: "How to install Visual Studio Code (VS Code)?",
    answer:
      "Download VS Code from the official website and follow the installation instructions for your operating system (Windows, macOS, or Linux).",
    documentation: "https://code.visualstudio.com/docs/setup/setup-overview",
  },
  {
    question: "How to install Git?",
    answer:
      "Download Git from the official Git website and follow the installation instructions for your operating system.",
    documentation:
      "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",
  },
  {
    question: "How to use Git for version control?",
    answer:
      "Git is used to track changes in your code. You can use commands like `git init`, `git add`, `git commit`, `git push`, and `git pull` to manage your repositories.",
    documentation: "https://git-scm.com/doc",
  },
  {
    question: "What is Node.js used for?",
    answer:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine, commonly used for building server-side and networking applications.",
    documentation: "https://nodejs.org/en/about/",
  },
  {
    question: "How to install Docker?",
    answer:
      "Download Docker Desktop from the official Docker website and follow the installation instructions for your platform.",
    documentation: "https://docs.docker.com/get-docker/",
  },
  {
    question: "How to create a virtual machine using VirtualBox?",
    answer:
      "Download and install VirtualBox, then follow the steps to create a new virtual machine and install an operating system.",
    documentation: "https://www.virtualbox.org/manual/ch01.html#gui-createvm",
  },
  {
    question: "What is Windows Subsystem for Linux (WSL)?",
    answer:
      "WSL is a compatibility layer for running Linux binary executables natively on Windows. It allows you to use Linux tools directly in Windows.",
    documentation: "https://docs.microsoft.com/en-us/windows/wsl/about",
  },
  {
    question: "How to connect to a MySQL database?",
    answer:
      "Use a MySQL client or the command line tool `mysql`. Connect to the server using the command `mysql -u [username] -p` and enter your password.",
    documentation: "https://dev.mysql.com/doc/refman/8.0/en/connecting.html",
  },
  {
    question: "How to set up environment variables?",
    answer:
      "Environment variables can be set in your system settings or within your project using a `.env` file. They are used to store configuration values.",
    documentation:
      "https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html",
  },
  {
    question: "How to use VS Code for debugging?",
    answer:
      "VS Code has built-in debugging capabilities. You can set breakpoints, inspect variables, and control the execution flow of your code.",
    documentation: "https://code.visualstudio.com/docs/editor/debugging",
  },
  {
    question: "What is a coding bootcamp?",
    answer:
      "A coding bootcamp is an intensive training program designed to teach programming skills in a short period, often focusing on practical and project-based learning.",
  },
  {
    question: "How to choose a programming language to learn?",
    answer:
      "Consider your career goals, the demand for the language, the type of projects you want to work on, and the community support available for the language.",
  },
  {
    question: "What is the best way to practice coding?",
    answer:
      "Practice regularly by working on projects, solving coding challenges, contributing to open-source projects, and learning from code reviews.",
  },
  {
    question: "How can I improve my problem-solving skills in programming?",
    answer:
      "Practice solving different types of problems, understand algorithms and data structures, and participate in coding competitions and hackathons.",
  },
  {
    question:
      "What is the difference between frontend and backend development?",
    answer:
      "Frontend development focuses on the user interface and user experience of a web application, while backend development deals with server-side logic, databases, and APIs.",
  },
];

export const Faq = () => {
  const [clickedQus, setClickedQus] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 8; // For demonstration, showing 2 questions per page

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = faqs.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const totalPages = Math.ceil(faqs.length / questionsPerPage);

  return (
    <div className='h-screen pt-[8rem] bg-black text-white py-10 px-5'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg p-8'>
        <header className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-blue-500'>
            Frequently Asked Questions
          </h1>
          <p className='text-gray-400 mt-2'>
            Find answers to common questions below
          </p>
        </header>

        {currentQuestions.map((faq, index) => (
          <div
            key={index}
            className='faq-item border-b border-gray-700 pb-4 my-4'
          >
            <button
              onClick={() =>
                setClickedQus((prevState: number | null) =>
                  prevState === index ? null : index
                )
              }
              className='flex justify-between items-center w-full text-left text-lg font-medium text-blue-500 focus:outline-none'
            >
              {faq.question}
              <span className='text-gray-400'>&#9660;</span>
            </button>
            <div
              className={`faq-answer fixed-width transition-all mt-2 text-gray-700 ${
                clickedQus === index ? "" : "hidden"
              }`}
            >
              <p>
                {faq.answer}{" "}
                <a
                  href={faq.documentation}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 underline'
                >
                  Click here for more information
                </a>
              </p>
            </div>
          </div>
        ))}

        <div className='flex justify-center mt-8'>
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === pageIndex + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-blue-500"
              }`}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
