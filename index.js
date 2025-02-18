const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();
const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY);

const app=express();
app.use(cors({origin:true}));
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
    }
);

app.post("/payments/create", async(req,res)=>{
    const total=req.query.total;
    if(total>0){
    console.log("Payment Request Received for this amount >>>",total);
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    } );
    console.log(paymentIntent);
    res.status(201).json({
        clientSecret:paymentIntent.client_secret,
    });     
}
else{
    res.status(403).send("Invalid Amount");
}
});

app.listen(4000,(err)=>{
  if(err) throw err;
    console.log("Listening on port 4000")
});

