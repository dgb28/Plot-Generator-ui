# 🚀 Plot Generator Frontend  
🎨 Write Python or R code and generate beautiful visualizations in real-time. Built with React + Vite, Django, and Docker.

## 🌟 Overview  
This is the frontend interface for **Plot generator**, a platform that lets users write Python or R code to generate beautiful visualizations — all executed in secure Docker containers on the backend. Users can write code, run it, and view visual or HTML outputs right in the browser.

## 🧠 Key Features  
- 📝 Interactive code editor with syntax highlighting (Ace Editor)  
- 🐳 Secure backend code execution using custom Docker containers  
- 📦 Supports Python & R with popular libraries:  
  `matplotlib`, `numpy`, `pandas`, `seaborn`, `scikit-learn`, `plotly`, `lattice`, `rgl`, `fs`, `htmlwidgets`  
- 🖼️ Outputs include:  
  - Standard output & error logs  
  - Base64-encoded images  
  - Interactive Plotly charts rendered via `<iframe>`  
- 🔌 Seamless backend integration using REST API  
- 🌗 Dark theme UI with TailwindCSS  
- 🚀 Built with React (Vite) + Django REST Framework  
- ⚡ Optimized for speed and lightweight performance with Vite


## 🧩 Tech Stack  
### Frontend
- React + Vite  
- TailwindCSS  
- Ace Editor  
- REST integration with backend

### Backend
- Django + Django REST Framework  
- Docker SDK for Python  
- Local media storage for `.html` plots  
- Custom Docker images for executing Python and R scripts
- 👉 [CodePlotter Backend (Django)](https://github.com/dgb28/Plot-Generator)

---

## 🎬 Demo Video Link
https://youtu.be/mEBfLgDtqrs

---

## 📦 How to Run Locally  
```bash
# Clone the repo
git clone https://github.com/your-username/codeplotter-frontend.git
cd Plot-Generator

# Install dependencies
npm install

# Run the frontend
npm run dev
```
---

## 👥 Collaborators  
| Name           | Email              |
|----------------|--------------------|
| Dhruv Bhanderi | dbhander@iu.edu    |
|                | dgbhanderi20@gmail.com |

---
