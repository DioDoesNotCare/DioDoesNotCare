// recursive approach
var values = [];
var tempValue = 0;

function MCM(array) {
    var individualMatricies = [];
    for (let i = 0; i < array.length - 1; i++) {
        individualMatricies.push([array[i], array[i + 1]]);
    }    
    
    for (let i = 0; i < individualMatricies.length - 1; i++) {
        split(individualMatricies, i);
        values.push(tempValue);
        tempValue = 0;
    }
    
    console.log(values);
    

}


function split(matrixArray, p) {

    for (let i = p; i < matrixArray.length - 1 ; i++) {
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
        console.log(leftArrayOfMatricies.length);
        console.log(rightArrayOfMatricies.length);
        

        if (leftArrayOfMatricies.length > 1) {
            var returnArray = split(leftArrayOfMatricies, 0);
            leftArrayOfMatricies = returnArray;
        }

        if (rightArrayOfMatricies.length > 1) {
            var returnArray = split(rightArrayOfMatricies, 0);
            rightArrayOfMatricies = returnArray;
        }
        

        if (leftArrayOfMatricies.length == 1 && rightArrayOfMatricies.length == 1) {
            
            tempValue += (matrixMultiplication(leftArrayOfMatricies[0], rightArrayOfMatricies[0]));
           
            return [[leftArrayOfMatricies[0][0], rightArrayOfMatricies[0][1]]];
            
        }
    }
    
}

function matrixMultiplication(leftMatrix, rightMatrix) {
    return leftMatrix[0] * leftMatrix[1] * rightMatrix[1];
}


MCM([40, 20, 30, 10, 30]);
