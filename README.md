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
- 👉 [Code Generator Backend (Django)](https://github.com/dgb28/Plot-Generator)

---

## 🎬 Demo Video Link
https://youtu.be/mEBfLgDtqrs

---

## 🐞 Issues Encountered & Resolutions
- 🐳 **Docker Image Execution Setup**  
  Already had Docker images prepared for executing Python and R scripts, but had to ensure they were correctly built and pushed to Docker Hub.  

  **Solution**: Followed `docker build` and `docker push` instructions precisely, and updated image names in the Django `views.py` function accordingly.
- 📦 **Python Script Compatibility for Visual Output**  
  Needed a minimal working Python script that would generate a 3D plot and work seamlessly with the backend’s Docker execution model.  

  **Solution**: Created and tested small Plotly scripts that save output as `.html` or `.png`, which get returned to the frontend and rendered properly.
- 🌐 **Localhost Communication Between Frontend and Backend**  
  Required consistent usage of `http://localhost` for both frontend and backend to ensure CORS and API communication worked correctly.  

  **Solution**: Verified all API endpoints, port numbers, and proxy configurations in Vite and Django settings.
- 🧪 **Mixed Output Types Causing Blank Iframe Renders**  
  When static plots were generated (e.g., with `matplotlib` or `seaborn`), the frontend still rendered an empty iframe intended for interactive plots.  

  **Solution**: Adjusted backend to return `null` instead of an empty string for `html_url` when no `.html` file is present, and updated the frontend to only render the iframe when a valid URL exists.
- 🖼️ **Mixed Media Output Handling (Images + HTML)**  
  Some user scripts produced both static image plots (`.png`) and interactive plots (`.html`), which caused confusion in rendering.  

  **Solution**: Backend handles and returns both media types properly, and frontend conditionally renders only non-empty outputs using checks.
- 🧼 **Preventing Empty HTML Renders**  
  When the backend returned an empty string (`""`) for `html_url`, the frontend still tried to render an empty iframe.  

  **Solution**: Updated the backend to return `null` for `html_url` if no `.html` file is detected, and added an additional condition in the frontend to avoid rendering the iframe if `html_url` is empty.
- 🛑 **Container Errors Without Clear Logs**  
  When user code crashed or timed out in Docker, it was tricky to debug.  

  **Solution**: Caught and returned `stderr` logs from Docker `ContainerError`, giving detailed feedback to users in the frontend.
  
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

## 🧪 Sample Code Snippets
🐍 Python Scripts
1. Static Plot with Matplotlib + Seaborn + Scikit-learn + Pandas
```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris

iris = load_iris(as_frame=True)
df = iris.frame
df['target'] = iris.target

sns.pairplot(df, hue='target', palette='Set1')
plt.suptitle("Static Pairplot of Iris Dataset", y=1.02)
plt.tight_layout()
plt.savefig("static_plot.png")
plt.show()

```
2. Interactive Plot with Plotly + Pandas + Scikit-learn
```python
import pandas as pd
import plotly.express as px
from sklearn.datasets import load_wine

df = load_wine(as_frame=True).frame
df['target'] = load_wine().target

fig = px.scatter(
    df,
    x='alcohol',
    y='malic_acid',
    color='target',
    hover_data=['ash', 'alcalinity_of_ash'],
    title="Interactive Scatter Plot of Wine Dataset"
)

fig.write_html("interactive_plot.html")
fig.show()

```
3. 3D Interactive Plot with Plotly
```python
import pandas as pd
import plotly.express as px
from sklearn.datasets import load_breast_cancer

df = load_breast_cancer(as_frame=True).frame
df['target'] = load_breast_cancer().target

fig = px.scatter_3d(
    df,
    x='mean radius',
    y='mean texture',
    z='mean perimeter',
    color='target',
    title="3D Interactive Plot - Breast Cancer Dataset"
)

fig.write_html("3d_interactive_plot.html")
fig.show()

```
📊 R Scripts
1. 3D Interactive Plot with rgl + htmlwidgets
```R
library(rgl)
library(htmlwidgets)

x <- rnorm(100)
y <- rnorm(100)
z <- rnorm(100)

open3d(useNULL = TRUE)
plot3d(x, y, z, col = rainbow(100), size = 5)

htmlwidgets::saveWidget(rglwidget(), "rgl_plot.html", selfcontained = TRUE)
```
2. Lattice Plot
```R
library(lattice)

data(mtcars)

png("lattice_plot.png")
splom(~mtcars[1:4], data = mtcars, main = "MTCARS Scatterplot Matrix")
dev.off()

```

---

## 👥 Collaborators  
| Name           | Email              |
|----------------|--------------------|
| Dhruv Bhanderi | dbhander@iu.edu    |
|                | dgbhanderi20@gmail.com |

---
