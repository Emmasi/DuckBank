import express from "express";
import { MongoClient,ObjectId } from "mongodb";
import session from "express-session";
import bcrypt from "bcrypt"

const port = 3000
const app = express()
const client = new MongoClient ('mongodb://127.0.0.1:27017/')
await client.connect();

app.use(express.json());
app.use(express.static('./Public'))
const db = client.db('bank');
const bankCustomers = db.collection('bankcontomers');
const userCollection = db.collection('userCollection')

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'Hej ',
    cookie: {
        maxAge: 5 * 60 * 1000 
      }
}));
const saltRounds = 5;

//hämtar customers
app.get('/api/customers', async (req, res) => {
    const listCustomers = await bankCustomers.find({}).toArray();
    res.json(listCustomers)
});

//ändra summan
app.put('/api/customers/:id', async (req, res) => {
    await bankCustomers.updateOne({ _id: ObjectId(req.params.id) },{$set: { amount: req.body.amount }});
    res.json({
      success: true
    });
});

//deleteknapp
app.delete('/api/customers/:id', async (req, res) => {
    await bankCustomers.deleteOne({ _id: ObjectId(req.params.id) });
    res.status(204).send();
});

//skapa ny användare
app.post('/api/create', async (req, res) => {
    if(!Object.keys(req.body).length){
        res.status(401).send()
    }
    const entry = {
        name:req.body.name,
        amount:req.body.amount
    }
    await bankCustomers.insertOne(entry);
        res.json({
            success:true,
            entry,
        })
});
//kolla session
app.get('/api/loggedin', (req, res) => {
    if(req.session.user){
      res.json({ user: req.session.user });
    }else {
      res.status(401).json({ error: 'Unauthorized' });
    } 
  });
//skapa Admin
app.post('/api/newAdmin',async(req,res)=>{
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    const newuser = {
        username:req.body.username,
        password:hash,
    }
    await userCollection.insertOne(newuser)
    res.json({
        success:true,
    })
})
//logga in
app.post('/login', async (req, res) => {
    const user = await userCollection.findOne({
      username: req.body.loginName})
    const passkoll = await bcrypt.compare(req.body.loginPass, user.password);
    if (user && passkoll) {
      req.session.user = user;
      res.json({
        user: user
      });
    } else { 
      res.status(401).send('Unauthorized');
    }
  });
  
  app.get('/user', (req, res) => {
    res.json({ user: req.session.user });
  });
//logga ut
app.post('/api/logout', (req, res) => {
    req.session.destroy(() => {
      res.json({
        loggedin: false
      });
    });
  });
  
  
  
app.listen(port, () => console.log(`listening ${port}`))