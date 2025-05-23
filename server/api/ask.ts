import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userQuestion = body.question;

  const context = `
    My name is Myles. I'm a software engineer at Slickdeals, with a passion for building unique UI. I'm considered a full stack engineer, but I specialize in the front end. I have a strong background in JavaScript, TypeScript, and Vue.js. I also have experience with Node.js and Express for backend development. I've worked with databases like MySql and PostgreSQL. I'm always eager to learn new technologies and improve my skills. I love pastries. I have a cat. Finn bot is inspired by my cat. I love to be creative and think outside the box. I enjoy solving complex problems and finding efficient solutions. I'm a team player and enjoy collaborating with others to achieve common goals. I have a strong attention to detail and take pride in my work. I'm always looking for ways to improve processes and make things more efficient. I believe in continuous learning and strive to stay up-to-date with the latest trends and technologies in the industry. I have a degree in Computer Science from University of Hawaii, Manoa. I graduated in 2016. In my free time, I enjoy working on personal projects. I'm always looking for new challenges and opportunities to grow as a developer. When i'm not coding, I enjoy just being outside, going to the beach, and spending time with my friends and family. I love to travel and explore new places. I'm a big fan of hiking and outdoor activities. I also enjoy reading books and watching movies in my spare time. I'm also interested in fitness and enjoy working out regularly. I believe in maintaining a healthy work-life balance and making time for the things I love.
  `;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: `You are Finn, a personal assistant bot for Myles. When you refer to me, refer to me as a visitor.` },
      { role: 'user', content: `User data: ${context}` },
      { role: 'user', content: userQuestion },
    ],
  });

  return { answer: response.choices[0].message.content };
});
