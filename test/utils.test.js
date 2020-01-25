const chai = require('chai');
// const startServer  = require('./../src/app');
const {makeResponseHelper} = require('./../src/utils/helper');
const { expect } = chai;

describe('utils tests', () => {
    it('check response helper', (done) => {
        const mockRes = {
            status: () => ({send: (param) => param})
        };
        const result = makeResponseHelper(mockRes);

        expect(result).to.include.all.keys('sendSuccessResponse', 'sendErrorResponse');
        expect(result.sendSuccessResponse).to.be.an('Function');
        expect(result.sendErrorResponse).to.be.an('Function');

        const responseWithStringParam = result.sendSuccessResponse('OK');
        expect(responseWithStringParam).to.include.all.keys('status', 'success', 'message', 'data');
        expect(responseWithStringParam.message).to.equal('OK');

        const responseWithObjectParam = result.sendSuccessResponse({data: {test: 1, test2: 2}});
        expect(responseWithObjectParam).to.include.all.keys('status', 'success', 'message', 'data');
        expect(responseWithObjectParam.data).to.include.all.keys('test', 'test2');
        done();
    })
});
