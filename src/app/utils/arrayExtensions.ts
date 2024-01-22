interface Array<T> {
    sortByProp(prop: string): T[];
}


Array.prototype.sortByProp = function <T>(prop: string): T[] {
    if (!prop || !this.length || typeof this[0][prop] === 'undefined') {
        return this.slice();
    }

    return this.slice().sort((current, next) => {
        if (current[prop] < next[prop]) return -1;
        if (current[prop] > next[prop]) return 1;
        return 0;
    });
};
