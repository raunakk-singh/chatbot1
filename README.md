Chatbot Web App

Hey! 
This is a simple and interactive chatbot I built while learning **React** and improving my frontend skills. The goal of this project was to understand how real-time chat interfaces work and how to connect UI with logic.

---

##What this project does
1.Lets users send messages in a chat interface 
2.Generates instant replies using a chatbot library 
3.Updates the UI in real-time using React state 
4.Looks clean and modern with Tailwind CSS 



##Tech I used
1.React (Vite) – for building the UI
2.Tailwind CSS – for styling
3.JavaScript – for logic
4.SuperSimpleDev Chatbot Library– for generating responses

---

Why I built this

I wanted to:
1.Practice React concepts like **state, props, and components**
2.Learn how chat applications work behind the scenes
3.Build something interactive instead of just static pages

---

⚙️ How to run it locally

1. Clone the repo:

```bash
git clone https://github.com/your-username/chatbot-app.git
cd chatbot-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the project:

```bash
npm run dev
```

---

## 🔗 Chatbot Integration

This project uses a simple chatbot library via CDN:

```html
<script src="https://unpkg.com/supersimpledev@8.0.1/chatbot.js"></script>
```

In the code, I use:

```js
const response = window.Chatbot.getResponse(userInput);
```

---

## What I learned

* How to manage state in React
* How to pass data between components (props)
* Handling user input and events
* Updating UI dynamically
* Using Tailwind for quick styling

---

## Things I want to improve

* Add real AI responses (like OpenAI API) 🤖
* Store chat history using a database 💾
* Improve UI (animations, better chat bubbles)
* Add “Enter key to send” feature ⌨️

---

## Final thoughts

This is a beginner-friendly project, but it helped me understand a lot about how real apps work. Planning to keep improving it step by step 🚀

---

## Author

**Raunak Singh**

---

## ⭐ If you like it

Feel free to star the repo or give feedback!
