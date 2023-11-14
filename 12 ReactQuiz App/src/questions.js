const questions =  [
  {
    id: 'q1',
    text: 'Which of the following definitions best describes React.js?',
    answers: [
      {
        text: 'A library used for building mobile applications only.',
        id: "q1A"
      },
      {
        text: 'A library for managing state in web applications.',
        id: "q1B"
      },
      {
        text: 'A framework to build user interfaces with help of imperative code.',
        id: "q1C"
      },
      {
        text: 'A library to build user interfaces with help of declarative code.',
        id: "q1D"
      }
    ],
    correctAnswer: {
      text: 'A library to build user interfaces with help of declarative code.',
      id: "q1D"
    }
  },
  {
    id: 'q2',
    text: 'What purpose do React hooks serve?',
    answers: [
      {
        text: 'Handling errors within the application.',
        id: "q2A"
      },
      {
        text: 'Enabling the use of state and other React features in functional components.',
        id: "q2B"
      },
      {
        text: 'Creating responsive layouts in React applications.',
        id: "q2C"
      },
      {
        text: 'Part of the Redux library for managing global state.',
        id: "q2D"
      }
    ],
    correctAnswer: {
      text: 'Enabling the use of state and other React features in functional components.',
      id: "q2B"
    }
  },
  {
    id: 'q3',
    text: 'Can you identify what JSX is?',
    answers: [
      {
        text: 'A specific HTML version that was explicitly created for React.',
        id: "q3A"
      },
      {
        text: 'A JavaScript library for building dynamic user interfaces.',
        id: "q3B"
      },
      {
        text: 'A JavaScript extension that adds HTML-like syntax to JavaScript.',
        id: "q3C"
      },
      {
        text: 'A tool for making HTTP requests in a React application.',
        id: "q3D"
      }
    ],
    correctAnswer: {
      text: 'A JavaScript extension that adds HTML-like syntax to JavaScript.',
      id: "q3C"
    }
  },
  {
    id: 'q4',
    text: 'What is the most common way to create a component in React?',
    answers: [
      {
        text: 'By creating a file with a .jsx extension.',
        id: "q4A"
      },
      {
        text: 'By defining a custom HTML tag in JavaScript.',
        id: "q4B"
      },
      {
        text: 'By defining a JavaScript function that returns a renderable value.',
        id: "q4C"
      },
      {
        text: 'By using the "new" keyword followed by the component name.',
        id: "q4D"
      }
    ],
    correctAnswer: {
      text: 'By defining a JavaScript function that returns a renderable value.',
      id: "q4C"
    }
  },
  {
    id: 'q5',
    text: 'What does the term "React state" imply?',
    answers: [
      {
        text: 'The lifecycle phase a React component is in.',
        id: "q5A"
      },
      {
        text: 'An object in a component that holds values and may cause the component to render on change.',
        id: "q5B"
      },
      {
        text: 'The overall status of a React application, including all props and components.',
        id: "q5C"
      },
      {
        text: 'A library for managing global state in React applications.',
        id: "q5D"
      }
    ],
    correctAnswer: {
      text: 'An object in a component that holds values and may cause the component to render on change.',
      id: "q5B"
    }
  },
  {
    id: 'q6',
    text: 'How do you typically render list content in React apps?',
    answers: [
      {
        text: 'By using the map() method to iterate over an array of data and returning JSX.',
        id: "q6A"
      },
      {
        text: 'By using the for() loop to iterate over an array of data and returning JSX.',
        id: "q6B"
      },
      {
        text: 'By using the forEach() method to iterate over an array of data and returning JSX.',
        id: "q6C"
      },
      {
        text: 'By using the loop() method to iterate over an array of data and returning JSX.',
        id: "q6D"
      }
    ],
    correctAnswer: {
      text: 'By using the map() method to iterate over an array of data and returning JSX.',
      id: "q6A"
    }
  },
  {
    id: 'q7',
    text: 'Which approach can NOT be used to render content conditionally?',
    answers: [
      {
        text: 'Using an if-else statement.',
        id: "q7A"
      },
      {
        text: 'Using a ternary operator.',
        id: "q7B"
      },
      {
        text: 'Using the && operator.',
        id: "q7C"
      },
      {
        text: 'Using a the #if template syntax.',
        id: "q7D"
      }
    ],
    correctAnswer: {
      text: 'Using a the #if template syntax.',
      id: "q7D"
    }
  },
];


export default questions