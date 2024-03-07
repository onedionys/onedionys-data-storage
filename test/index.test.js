const assert = require('assert');
const DataStorage = require('../src/dataStorage');
const localStorage = require('mock-local-storage');

describe('DataStorage', () => {
    it('should set and retrieve data correctly', () => {
        const storage = new DataStorage();
        storage.setItem('testKey', 'testValue');
        const retrievedValue = storage.getItem('testKey');
        assert.strictEqual(retrievedValue, 'testValue');
    });

    it('should remove data correctly', () => {
        const storage = new DataStorage();
        storage.setItem('testKey', 'testValue');
        storage.removeItem('testKey');
        const retrievedValue = storage.getItem('testKey');
        assert.strictEqual(retrievedValue, null);
    });
});
