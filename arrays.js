// A function that removes something from an array when the things to remove are also in an array

function removeFromArray(array, removeArray) {
    for (item of removeArray) {
        while (array.includes(num)) {
            let index = array.indexOf(num);
            array.splice(index,1);
        }
    }
    return array;
}
