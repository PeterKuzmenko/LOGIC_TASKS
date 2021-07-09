'use strict'

function deleteClones(arr) {
    const set = new Set();
    const result = [];
    let size = 0;

    for (const item of arr) {
        set.add(item.id);

        if (set.size !== size) {
            result.push(item);
            size++;
        }
    }

    return result;
}
