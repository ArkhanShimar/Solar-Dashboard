# Solar Dashboard

Intern task. Its a read only dashboard for Sunfield Solar Farm in Colombo.

I used React with Vite. No backend and no api calls. All the numbers are in `src/data/solarData.js` (the same data they sent in the task).

## How to run

You need Node installed.

```
npm install
npm run dev
```

Then open the local url Vite prints. Usually its `http://localhost:5173`.

To make a production build:

```
npm run build
npm run preview
```

## How its structured

Components are in `src/components`. I didnt dump everything in App.jsx. App.jsx just imports the data and passes it down as props.

Styling is Tailwind. No inline styles.

## Whats done

- Site header (name, location, total panels, active panels, Online badge)
- Live stats cards
- Energy summary

## Still need to do

- Hourly output chart (recharts)
- Weekly output chart
- Panel group table (Offline in red, Degraded in yellow)
- A screenshot in this readme
- The short note they asked for, about why I built it this way

Dark mode is optional so I'll try it if I have time after the charts.

## Notes

Works on desktop and tablet. I havent really tested a tiny phone screen much.
