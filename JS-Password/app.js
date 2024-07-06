let password = () =>{
    let userName = document.getElementById('user').value;
    let dob = document.getElementById('dob').value;
    let str = userName.slice(0,5);
    let str1 = dob.slice(0,4);
    let output = str.concat(str1);
    document.getElementById('result').innerHTML=output;
}