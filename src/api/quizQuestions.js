import React from 'react';
import image from '../images/IMG_9794.JPG';
var quizQuestions = [
  {
      question: <img src={image} alt="question_1" width="50%" height="50%" />,
      answers: [
          {
              type: "Microsoft",
              content: "Halo"
          },
          {
              type: "Nintendo",
              content: "Pokemon"
          },
          {
              type: "Sony",
              content: "Uncharted"
          }
      ]
  },
  {
      question: "Which console would you prefer to play with friends?",
      answers: [
          {
              type: "Microsoft",
              content: "X-Box"
          },
          {
              type: "Nintendo",
              content: "Nintendo 64"
          },
          {
              type: "Sony",
              content: "Playstation 1"
          }
      ]
  },
  {
      question: "Which of these racing franchises would you prefer to play a game from?",
      answers: [
          {
              type: "Microsoft",
              content: "Forza"
          },
          {
              type: "Nintendo",
              content: "Mario Kart"
          },
          {
              type: "Sony",
              content: "Gran Turismo"
          }
      ]
  },
  {
      question: "Which of these games do you think is best?",
      answers: [
          {
              type: "Microsoft",
              content: "BioShock"
          },
          {
              type: "Nintendo",
              content: "The Legend of Zelda: Ocarina of Time"
          },
          {
              type: "Sony",
              content: "Final Fantasy VII"
          }
      ]
  },
  {
      question: "What console would you prefer to own?",
      answers: [
          {
              type: "Microsoft",
              content: "X-Box One"
          },
          {
              type: "Nintendo",
              content: "Wii U"
          },
          {
              type: "Sony",
              content: "Playstation 4"
          }
      ]
  },
  {
    question: "Additional generic question?",
    answers: [
        {
            type: "Microsoft",
            content: "something"
        },
        {
            type: "Nintendo",
            content: "another thing"
        },
        {
            type: "Sony",
            content: "third thing"
        }
    ]
},
];

export default quizQuestions;