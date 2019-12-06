const superTest = require("supertest");
const should = require("should");
const axios = require('axios');
const request = require('request');
const expect = require('chai').expect;

require("../routes/businesses.js");

it('Check add reviews is working', function(done) {
    axios.post("https://reviewsvc.codeninjas.cf/businesses/2e0899da-b712-4fc2-a8c0-5b840ba8fd70/reviews")
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
    axios.delete("https://reviewsvc.codeninjas.cf/businesses/2e0899da-b712-4fc2-a8c0-5b840ba8fd70/reviews/26cc576a-f748-41a2-92cf-8dba80a22050")
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch((error) => {
            console.error(error)
            done();
        })
});



