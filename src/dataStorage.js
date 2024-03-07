class DataStorage {
    constructor(storage = localStorage) {
        this.storage = storage;
        if (typeof this.storage === 'undefined') {
            throw new Error('Local storage is not supported in this environment');
        }
    }

    setItem(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    getItem(key) {
        const item = this.storage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    removeItem(key) {
        this.storage.removeItem(key);
    }
}

module.exports = DataStorage;
