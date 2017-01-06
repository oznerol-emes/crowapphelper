var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
	name: {type: String, required: true, unique: true},
	powers: Array,
	weaknesses: Array,
	team: String,
	externalUnderwear: Boolean,
	created: {type: Date, default : ()=>new Date()},
	headquarters: {
		type: mongoose.Schema.ObjectId,
		ref: "HQ"
	}
});

module.exports = mongoose.model("Hero", heroSchema );