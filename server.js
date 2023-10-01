// import app from backend /app.js 
const app = require('./backend/app');

// server listens yo Reqs 
app.listen(3000, ()=> {
    console.log("Server is now listening on PORT 3000 ..");
})