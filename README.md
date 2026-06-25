# Sajal Sajjad Portfolio

A responsive, zero-dependency portfolio covering financial technology,
software, data, quality assurance, climate finance, and leadership experience.

## Run locally

On this computer, double-click `run_portfolio.bat`. No package installation is
required.

Alternatively, run:

```powershell
C:\msys64\mingw64\bin\python.exe app.py
```

Open `http://127.0.0.1:5000`.

## Edit content

- Personal details, projects, skills, and experience: `portfolio_data.py`
- Page structure: `template.html`
- Generated standalone page: `index.html`
- Design: `static/styles.css`
- Interactions: `static/script.js`
- Images: `static/images`

The Perspective slideshow images are configured in the `artwork` list inside
`portfolio_data.py`. Place replacement images in `static/images`, then use
relative paths such as:

```python
{"image": "images/artwork.jpg", "alt": "Description of the artwork"}
```

## Deploy on Render

1. Push this folder to a GitHub repository.
2. In Render, create a new Blueprint and select the repository.
3. Render will use `render.yaml` to build and start the app.

The production command is:

```text
python app.py
```
