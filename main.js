const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\x1b[1m")
console.log("\nCompound Intrest Calculator\nPlease Refrain from using Comma's (,) or any other character other then Numericals, ( . ) may be used for Decimal\nEnter the Intrest in % and Time in Year\nOnly Calculate Annually\nSorry for the Inconvinience\n")
rl.question(`Input the Principal: `,  (p) =>{
    rl.question(`Input the Time: `, (t) =>{
        rl.question(`Input the Rate: `, (r) =>{
            let P = parseFloat(p),T = parseFloat(t),R = parseFloat(r);
            
            
            let amount = P*(1 + (R/100))**T;
            let CI = amount - P;
            console.log(`\nThe CI is ${CI}\nThe new Amount is ${amount}\n`);

            console.log("\x1b[0m")
            rl.close();
        });
    });
});
