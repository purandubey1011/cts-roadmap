const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    livelink: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    purchased: {
        type: Number,
        required: true,
        default: 0
    },
    
    description: {
        type: String,
        required: true,
        trim: true
    },
    video: {
        type: Object,
        default: {
            fileId: "",
            url: "",
        },
    },
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;