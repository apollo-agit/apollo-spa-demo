//server.js

var application_root = __dirname,
	express = require("express"),
	path = require("path"),
	mongoose = require("mongoose"),
	_ = require('underscore'),
	bodyParser = require('body-parser');
	
var ApolloSPAItem = require('./app/models/apolloitem');
var cors = require('cors');



	
mongoose.connect('mongodb://sysUser:myPassword1@inertia-0.inertia-inc.1272.mongodbdns.com:27000/apollo');

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

var app = express();  
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser({strict: false}));
app.use(allowCrossDomain);
var port = process.env.PORT || 8888;  

var router = express.Router();  

router.route('/spaitem')
	.get(function(req, res) {
        ApolloSPAItem.find({}, function(err, apolloSPAItems) {
            if (err)
                res.send(err);
			else
            res.json(apolloSPAItems);
        });
    })
	.post(function(req, res) {
        var apolloSpaItem = new ApolloSPAItem(req.body).save(function(err) {
            if (err)
                res.send(err);
			else 
				res.json(apolloSpaItem);
        });
        
    }).delete(function(req, res) {
		console.log(req.query.id);
		 ApolloSPAItem.findById(req.query.id, function(err, apolloSPAItem) {
            if (err)
                res.send(err);
			else
			if(apolloSPAItem != null) {
				apolloSPAItem.remove();
			}
        });
	});

app.use('/api/apollospaitems/', router);

app.listen(port);
console.log('Magic happens on port ' + port);