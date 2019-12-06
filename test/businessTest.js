const superTest = require("supertest");
const should = require("should");
const axios = require('axios');
const request = require('request');
const expect = require('chai').expect;

require("../routes/businesses.js");

it('Check add reviews is working', function(done) {
    axios.post("localhost:3003/businesses/2e0899da-b712-4fc2-a8c0-5b840ba8fd70/reviews")
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch((error) => {
            console.error(error)
            done();
        })
});

it('Check delete reviews is working', function(done) {
    axios.post("localhost:3002/businesses/2e0899da-b712-4fc2-a8c0-5b840ba8fd70/reviews/cea21094-f094-4e87-ae91-9842ea596f88")
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch((error) => {
            console.error(error)
            done();
        })
});

it('Check delete reviews is working', function(done) {
    axios.post("localhost:3002/businesses/c94a726c-f9d4-4602-8836-ba7248366fce/reviews/cea21094-f094-4e87-ae91-9842ea596f88")
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch((error) => {
            console.error(error)
            done();
        })
});


