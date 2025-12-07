# S33 – Full Stack Web App (Angular + Node.js + MySQL)

S33 is a full-stack web application built with:

- **Angular** (frontend)
- **Node.js + Express** (backend API)
- **MySQL** (database)
- **Apache** (serves Angular + proxies API requests)

The app includes a login page and two charts that load data from a MySQL table.

---

## Features
- Simple login with JWT authentication  
- Two dynamic charts powered by database values  
- REST API built with Express  
- Angular UI served through Apache  
- PM2 keeps backend running in production

##  Backend (Node.js)

Inside s33backend:

Install dependencies:

npm install


Start backend (dev):

node server.js


Start backend (production):

pm2 start server.js --name s33backend
pm2 save

## CHANGE DATABASE.JS AS NECESSARY
Database config (db.js):

export const db = mysql.createPool({
  host: 'localhost', **CHANGE TO YOUR HOST**
  user: 'root', **CHANGE TO YOUR USER**
  password: 'YOUR_PASSWORD', **YOUR MYSQL PASSWORD**
  database: 's33_db'
});
