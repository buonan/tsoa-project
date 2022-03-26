export class HashTable {
    private table = new Array(127);
    private size = 0;

    constructor() {
       this.clear()
    }

    clear() {
        this.table = new Array(127);
        this.size = 0;
    }

    set(key: number, value: string) {
        const index = key;
        this.table[index] = [key, value];
        this.size++;
    }

    get(key: number) {
        const target = key;
        return this.table[target];
    }

    getFirst() {
        return this.table.find(el => el !== undefined);
    }

    remove(key: number) {
        const index = key;

        if (this.table[index] && this.table[index].length) {
            this.table[index] = [];
            this.size--;
            return true;
        } else {
            return false;
        }
    }
}