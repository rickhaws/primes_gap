const primes = [false, false];

const sieveOfEratosthenes = (n) => {
  if (primes.length > n) { return; }

  first_new = primes.length;
  
  n *= 2; // Go extra
  for(let i=primes.length; i<=n; i++) {
    primes[i] = true;
  }
  
// console.log(`Increasing primes.length to ${primes.length}`);
  
  const end = Math.sqrt(n);
  
  for (let i=2; i<=end; i++) {
    if (primes[i]) {
      const start = Math.max(i, Math.trunc(first_new/i));
// console.log(`Clearing multiples of ${i} starting at ${i*start}`)
      for (let j = i*start; j <= n; j += i) primes[j] = false;
    }
  }
// console.log(`primes.length increased to ${primes.length}`);
}

const isPrime = (n) => {
  sieveOfEratosthenes(n);
// console.log(`${n} is prime? ${primes[n]}`)
  return primes[n];
}

function gap(g, m, n) {
// console.log(`gap(${g}, ${m}, ${n})`);
  m = m % 2 ? m : m+1;
  n = n % 2 ? n : n-1;
  
  let i, j;
  let values = null;
  for (i=m; i<=n; i+=2) {
// console.log(Checking `${i} and ${i+g}`)
    if (isPrime(i) && isPrime(i+g)) {
// console.log(`${i} and ${i+g} are prime`)
      values = [i, i+g];
      for (j=2; j<g; j+=2) {
        if (isPrime(i+j)) { 
// console.log(`   but ${i+j} is too`)
          values = null;
// console.log(`   skipping ahead to ${i+g}`)
          // Skip ahead by g (minus loop increment)
          i = i+g-2;
          break;
        }
      }
      if (values !== null) { break; }
    }
  }

// console.log(`returning ${values}`)
  return values;
}
