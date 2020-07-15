const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Mailchimp = require('mailchimp-api-v3');

if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;
const mailchimp = new Mailchimp(mc_api_key);
console.log(mailchimp)

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function(req, res) { 
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server is running on port ' + port);
})

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }
    
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr })
        } else {
            res.status(200).send({ success: stripeRes })
        }
    })
})

//maillist:
app.get('/api/memberAdd', (req, res) => {
    mailchimp
        .post(`/lists/${list_id}/members/`, {
            email_address: req.query.email,
            status: "subscribed"
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
})