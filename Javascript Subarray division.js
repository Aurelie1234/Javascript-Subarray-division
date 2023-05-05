function birthday(s, d, m) {
    // Write your code here


let count = 0;
let add = 0;


for (let i = 0; i <= (s.length - m); i++) {
   
    for (let j = i; j < (i +m); j++ ){
        add += s[j]
    }
    if (add === d) {
        count++
    }
}


return count;

}
