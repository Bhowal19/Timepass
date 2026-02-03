# 💖 The Ultimate Valentine Proposal Website

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Love](https://img.shields.io/badge/Made%20with-Love-red?style=for-the-badge)

A playful, interactive, and romantic web application designed to pop the big question: **"Will you be my Valentine?"** Built with **React** and **Tailwind CSS**, this site features a mischievous "No" button that runs away from the cursor, playful sound effects, and a confetti celebration when they finally say "Yes!" 💍

---

## ✨ Features

* **🏃‍♂️ Smart "Runaway" Button:** The "No" button intelligently calculates screen boundaries to jump to a random spot without ever going off-screen. It stays within reach but impossible to catch!
* **🔊 Background Music:** Includes a music player with a toggle switch (Mute/Unmute).
* **🎉 Celebration Mode:** When "Yes" is clicked, the screen erupts in confetti, festive animations, and a success message.
* **📈 Dynamic "Yes" Button:** Every time the "No" button is hovered, the "Yes" button grows larger, eventually taking over the screen after 8 attempts.
* **📱 Fully Responsive:** Works perfectly on Desktop (hover events) and Mobile (touch events).
* **🎨 Glassmorphism UI:** Modern UI with soft gradients, floating hearts, and backdrop blurs.

---

## 📸 Screenshots

| Asking... 🥺 | She said YES! 🎉 |
|:---:|:---:|
| <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmM2ZDJtcG93bnp6OGpoYm5jM2d4YnZ4YnZ4YnZ4YnZ4YnZ4YnZ4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/cLS1cfxvGOPVpf9wXM/giphy.gif" width="300"> | <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmM2ZDJtcG93bnp6OGpoYm5jM2d4YnZ4YnZ4YnZ4YnZ4YnZ4YnZ4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/T86i6yDyOYz7J6dPhf/giphy.gif" width="300"> |

---

## 🛠️ Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion / CSS Keyframes
* **Icons:** Lucide React
* **Effects:** Canvas Confetti

---

## 🚀 How to Run Locally

If you want to clone and customize this for your own special someone:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Bhowal19/Timepass.git](https://github.com/Bhowal19/Timepass.git)
    cd Timepass
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  Open `http://localhost:5173` in your browser.

---

## ⚙️ Customization

Want to change the song or the GIFs?

* **Music:** Open `src/App.jsx` and replace the `BACKGROUND_MUSIC_URL` variable with your own MP3 link.
* **Images:** Update the `CUTE_GIFS` object in `src/App.jsx` with your favorite Giphy links.
* **Text:** Modify the `phrases` array to add your own inside jokes to the "No" button text!

---

## 💌 Deployment

You can deploy this for free on **Vercel** or **Netlify**.
1.  Push your code to GitHub.
2.  Import the repo into Vercel.
3.  Click **Deploy**.
4.  Share the link with your Valentine! 💖

---

**Created by [Ayan Bhowal](https://github.com/Bhowal19)** *Because love (and coding) is all about persistence.* 😉
