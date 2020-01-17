const httpStatus  = require('http-status');
const request = require('supertest');
const chai = require('chai');
const startServer  = require('./../src/app');
const { expect } = chai;
describe('server alive test', () => {
    it('Check if server alive', async () => {
        await request(await startServer())
            .get('/status')
            .expect(httpStatus.OK)
            .expect(res => {
                expect(res.body.message).to.equal('OK');
            });
    });
});
