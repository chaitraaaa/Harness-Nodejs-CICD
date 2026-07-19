const express=require("express");
const app=express();
const PORT=process.env.PORT||3000;
app.get("/",(req,res)=>res.send(`<!DOCTYPE html><html><head><title>CI/CD Demo</title></head><body style="font-family:Arial;text-align:center;margin-top:100px;"><h1>🚀 CI/CD Pipeline Successful!</h1><h2>Welcome to Node.js Demo App</h2><p>Built by Harness CI/CD</p></body></html>`));
app.listen(PORT,()=>console.log(`Application running on port ${PORT}`));