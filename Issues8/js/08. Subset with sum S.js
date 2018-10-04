function maxSum(input, limit) {
    const sums = {};
    let max = 0;

    const collectSums = (n, i, values) => {
        for (; i < input.length; i++) {
            const sum = n + input[i];
            if (sum <= limit) {
                values.push(input[i]);
                if (sum >= max && values.length > 1) {
                    max = sum;
                    sums[max] = values.slice(); 
                    return console.log("result: yes");
                    break;
                }
                collectSums(sum, i + 1, values);
            }
        }
    };

    collectSums(0, 0, []);
}