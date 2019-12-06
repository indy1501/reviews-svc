const superTest = require("supertest");
const should = require("should");
const axios = require('axios');
const request = require('request');
const expect = require('chai').expect;

require("../index.js");

it('Check get reviews by business id is working', function(done) {
    axios.get("https://reviewsvc.codeninjas.cf/businesses/2e0899da-b712-4fc2-a8c0-5b840ba8fd70/reviews")
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch((error) => {
            console.error(error)
            done();
        })
});
