// require syntax
// require
// const express = require('express')

// import syntax then use type:"module" in package.json


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

// import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express();

app.use(cors({
  origin: process.env.BASE_URL,
  credentials:true,
  methods:['GET','POST','DELETE','OPTIONS'],
  allowedHeaders:['Content-Type','Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000;  //5173 3002

app.get('/', (req, res) => {
  res.send('cohort!')
})

app.get('/hitesh', (req, res) => {
    res.send('hitesh!')
  })

  // connect to db
  db();


  // user routes
  app.use("/api/v1/users/",userRoutes)
 


  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



