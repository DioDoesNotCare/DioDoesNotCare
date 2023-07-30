// recursive approach

function MCM(array) {
    var individualMatricies = [];
    for (let i = 0; i < array.length - 1; i++) {
        individualMatricies.push([array[i], array[i + 1]]);
    }    
    
    split(individualMatricies);
}

function split(matrixArray) {
    
    for (let i = 0; i < matrixArray.length - 1 ; i++) {
        var leftArrayOfMatricies = [];
        var rightArrayOfMatricies = [];

        for (let j = 0; j < matrixArray.length ; j++) {
            if (j <= i) {
                leftArrayOfMatricies.push(matrixArray[j]);
            }
            else {
                rightArrayOfMatricies.push(matrixArray[j]);
            }
        }
        
        console.log(leftArrayOfMatricies);
        console.log(rightArrayOfMatricies);
        
    }
}

MCM([40,20,30,10,30]);