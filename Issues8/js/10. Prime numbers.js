(function (exports) {
  exports.sieveOfEratosthenes = function (limit) {
    var sieve = [];
    var primes = [];
    var k;
    var l;
    sieve[1] = false;
    for (k = 2; k <= limit; k += 1) {
      sieve[k] = true;
    }
    for (k = 2; k * k <= limit; k += 1) {
      if (sieve[k] !== true) {
        continue;
      }
      for (l = k * k; l <= limit; l += k) {
        sieve[l] = false;
      }
    }
    sieve.forEach(function (value, key) {
      if (value) {
        this.push(key);
      }
    }, primes);
    return primes;
  };
}(typeof exports === 'undefined' ? window : exports));
var x=prompt("Type Number:", "0");
var num1=parseInt(x);
 console.log(sieveOfEratosthenes(num1));
