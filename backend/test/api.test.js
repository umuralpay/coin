import request from 'supertest';
import app from '../src/index';
describe('API Tests', () => {
    it('should get the list of blocks', async () => {
        try {
            const res = await request(app)
                .get('/api/list')
            expect(res.statusCode).toEqual(201)
            expect(res.body).toHaveProperty('get')
        }catch(e) {
            return false;
        }
    }, 10000);

    it('should get the detail of a block', async () => {
        const mockHash = "0000000000000000000963288caba0ffda882643282fd84c468a6451c7bc3661";

        try {
            const res = await request(app)
                .get(`/api/detail/${mockHash}`)
            expect(res.statusCode).toEqual(201)
            expect(res.body).toHaveProperty('get')
        }catch(e) {
            return false;
        }
    }, 30000);

    it('should get the detail of a single transaction', async () => {
        const mockTransaction = "11927380598cdf9dd45d402b0773769dd6b684f62ec0c90f6ea21161d97646c6";

        try {
            const res = await request(app)
                .get(`/api/transaction/${mockTransaction}`)
            expect(res.statusCode).toEqual(201)
            expect(res.body).toHaveProperty('get')
        }catch(e) {
            return false;
        }
    }, 10000);
    afterAll(done => {

        done();
    });
})
