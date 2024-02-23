## SELF - Personality Test for Extroversion/Introversion

Web application built with React.js and NestJS, aimed at conducting personality tests. Users answer a series of questions, and based on their responses, are rewarded with insights into their personality traits. 

The score calculation uses a 4-point weight system to calculate what brackets of personality users fall into depending on their answers.

#### Stack

The frontend is written in React and utilizes Tailwind CSS for styling and React Query for data fetching. 

The backend, developed with NestJS, offers APIs to list questions and utilizes typeorm to run an in-memory database (and as such gets seeded when the module starts) but can be plugged into a real database as well.

### Getting Started

Get the server up and running first.

```
cd server
npm install
npm run start:dev
```

It runs on `localhost:3000` by default and has the following endpoints.

> GET /api/v1/questions

Returns a list of all questions

> POST /api/v1/questions

Creates a new question.

A question is formatted as the following and always includes 4 questions on a scale.

```
{
  "question": "<Question Text>",
  "options": [
    { "label": "<Extroverted Option>", "points": 4 },
    { "label": "<Somewhat Extroverted Option>", "points": 3 },
    { "label": "<Somewhat Introverted Option>", "points": 2 },
    { "label": "<Introverted Option>", "points": 1 }
  ]
}
```

Then get the client running.

```
cd client
npm install
npm run dev
```

The client runs on `localhost:5173` by default.
