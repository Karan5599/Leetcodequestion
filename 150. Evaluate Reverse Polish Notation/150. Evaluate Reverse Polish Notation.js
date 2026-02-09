/*
 * Problem: 150. Evaluate Reverse Polish Notation
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * Language: javascript
 * Date: 2026-02-09
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let s = [];

    for(let i=0; i< tokens.length; i++){
        let n = tokens[i];

        if(n === "+" || n === "-" || n === "*" || n === "/"){
          let b = s.pop();
          let a = s.pop();
          let res = 0;
          if(n === "+"){
           res = a+b;
          }
          else if(n === "-"){
           res = a-b;
          }
          else if(n === "*"){
           res = a*b;
          }
          else{
            res = Math.trunc(a/b)
          }
          s.push(res)
        }

        else{
            s.push(Number(n))
        }
    }
    return s.pop()
};
