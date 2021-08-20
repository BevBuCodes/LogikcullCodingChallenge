function longestString(alpha) {
  // empty array to store our results:
  let string = [];

  // base case 
  if (alpha.length === 0) return [];
  if (alpha.length === 1) return [alpha];

// create the loop to iterate through the alpha array.
  for (let i = 0; i < alpha.length; i++) {
    const currentAlpha = alpha[i];
    const remainingAlpha = alpha.slice(0, i).concat(alpha.slice(i + 1));
    const remainingAlphaPermuted = longestString(remainingAlpha);

    for (let j = 0; j < remainingAlphaPermuted.length; j++) {
        const permutedArray = [currentAlpha].concat(remainingAlphaPermuted[j]);
        string.push(permutedArray);
    }
    
  }
  
  return string;
}

console.log(longestString(['aabb', 'aaaa', 'bbab']));

document.getElementById("permutations").innerHTML = longestString(['aabb', 'aaaa', 'bbab'])