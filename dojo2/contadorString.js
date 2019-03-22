const main = (text = "") => {
    let counter = 0;
    const newText = text.split('');
    let passed = [];
    newText.forEach((v, i) => {
        newText.forEach((v2, i2) => {
            if (i2 !== i) {
                if (v.toLocaleLowerCase() === v2.toLocaleLowerCase()) {
                    if (passed.length > 0) {
                        if (passed.indexOf(v.toLocaleLowerCase()) === -1) {
                            passed.push(v.toLocaleLowerCase());
                            counter++;
                        }
                    } else {
                        passed.push(v.toLocaleLowerCase());
                        counter++;
                    }
                }                
            }
        });
    });
    
    console.log(counter);
    return counter;    
};

main("Rafaelr");