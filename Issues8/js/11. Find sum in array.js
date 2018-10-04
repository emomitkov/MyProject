function maxSum(input) {
    var x=prompt("Please Enter The Sum:", "10")
    limit=parseInt(x);
    const sums = {};
    let max = 0;

    const collectSums = (n, i, values) => {
        for (; i < input.length; i++) {
            const sum = n + input[i];
            if (sum <= limit) {
                values.push(input[i]);
                if (sum >= max && values.length > 1) {
                    max = sum;
                    sums[max] = sums[max] || [];
                    sums[max].push(values.slice());
                }
                collectSums(sum, i + 1, values);
            }
        }
        values.pop();
    };

    collectSums(0, 0, []);

    return sums[max] || [];
}