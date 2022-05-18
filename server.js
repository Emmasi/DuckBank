import express from "express";
import { MongoClient,ObjectId } from "mongodb";
import session from "express-session";
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
app.post('/api/creat', async (req, res) => {
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
//skapa Admin
app.post('/api/newAdmin',async(req,res)=>{
    const newuser = await userCollection.insertOne({
    username:req.body.username,
    password:req.body.password,
    })
    res.json({
        success:true,
    })
})
//kolla session
app.get('/api/login', (req, res) => {
    if(req.session.user){
      res.json({ user: req.session.username });
    }else {
      res.status(401).json({ error: 'Unauthorized' });
    } 
  });
//logga in
app.post('/login', async (req, res) => {
    const user = await userCollection.findOne({
      user: req.body.loginName,
      pass: req.body.loginPass
    });
    if (user) {
      req.session.user = user;
      res.json({
        user: user.user
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