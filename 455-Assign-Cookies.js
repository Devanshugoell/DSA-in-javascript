var findContentChildren = function (g, s) {
  let l = 0,
    r = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  while (l < g.length && r < s.length) {
    if (g[l] <= s[r]) {
      l++; // child gets cookie
    }
    r++; // move to next cookie
  }
  return l; // number of satisfied children
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
