"use strict";
var ts008;
(function (ts008) {
    class LocalStorage {
        constructor() {
            this.storage = {};
        }
        set(key, value) {
            this.storage[key] = value;
        }
        remove(key) {
            delete this.storage[key];
        }
        get(key) {
            return this.storage[key];
        }
        clear() {
            this.storage = {};
        }
    }
    const stringStorage = new LocalStorage();
    stringStorage.get("ket");
    stringStorage.set("hello", "world");
    const booleanStorage = new LocalStorage();
    booleanStorage.get("ket");
    booleanStorage.set("hello", true);
})(ts008 || (ts008 = {}));
//# sourceMappingURL=008_polimorphism.js.map