const fib = n => (n < 2 ? n : fib(n - 1) + fib(n - 2));

onmessage = e => {
  const num = e.data.num;
  const startTime = new Date().getTime();
  const result = fib(num);
  postMessage({
    result,
    time: new Date().getTime() - startTime
  });
};
