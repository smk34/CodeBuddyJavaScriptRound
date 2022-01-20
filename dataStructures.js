// level {3}
//1 Write a recursive function that transforms all the strings to uppercase.
const obj = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}

const capitalizedValues = (obj) => {
    let keyValueObj = Object.entries(obj);
    let returnObj = {};

    keyValueObj.map((item) => {
        if(typeof(item[1]) == 'string'){
            let key = item[0];
            let value = String(item[1])
            returnObj[item[0]] = value.toUpperCase();
        }else if(Array.isArray(item[1])){
            let arrObjToPush = [];
            item[1].map((arrObj) => {
                let objToPush = {};
                Object.entries(arrObj).map((obj) => {
                    objToPush[obj[0]]= String(obj[1]).toUpperCase();
                })
                arrObjToPush.push(objToPush);
            })
            returnObj[item[0]] = arrObjToPush;
        } else {
            let objToPush = {};
            Object.entries(item[1]).map((obj) =>{
                objToPush[obj[0]] = String(obj[1]).toUpperCase();
            });
            returnObj[item[0]] = objToPush;
        } 
    })
    console.log("UpperCased", returnObj)
  return returnObj; 
}

capitalizedValues(obj)

// 2. Write a function that takes a string with key value pairs sum the value of all unique properties and return an object from it.
// ```
// Input string: "a:2,b:3,c:4,a:5,b:6"

const str = "a:2,b:3,c:4,a:5,b:6";

const convertToObjFromStr = (str) => {
    const commaSeperatedArr = str.split(",");
    const returnObj = {};

    commaSeperatedArr.map((objParam) => {
        let arr = objParam.split(":");
        arr[0] = arr[0].trim();
        if(returnObj[arr[0]]){
            returnObj[arr[0]] = returnObj[arr[0]] + parseInt(arr[1])
        }else {
            returnObj[arr[0]] = parseInt(arr[1]);
        }
    })
    console.log("Output",returnObj)
    return returnObj;
}

convertToObjFromStr(str);

// 3. Check for balanced parentheses using a stack
// ```
// Example:
// exp = "{[({})]}" should be valid
// but "{[(]} should be invalid

const str = "{[(]}";
//const str = "{[({})]}"; //Just uncomment to see the result for valid

const checkBalancedBrackets = (str) => {
    let stack = [];
    for(let i = 0; i< str.length; i++){
        let char = str[i];
        if(char == '(' || char == '[' || char == '{'){
            stack.push(char);
            continue;
        }
        if(stack.length == 0)
        return 'Invalid'

        let check;
        switch(char){
            case')':
            check = stack.pop();
            if(check == '{' || check == '[')
            return 'Invalid'
            break;

            case'}':
            check = stack.pop();
            if(check == '(' || check == '[')
            return 'Invalid'
            break;

            case']':
            check = stack.pop();
            if(check == '(' || check == '{')
            return 'Invalid'
            break;
        }
    }
    return stack.length == 0 ? 'Valid' : 'Invalid';
}

console.log(checkBalancedBrackets(str))