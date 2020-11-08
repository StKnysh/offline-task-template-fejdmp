/**
 * Snappy R&D
 * Task 5
 */

const documents = [
  'The sad panda is running around the yard.',
  'The sad cat is not running around the yard',
  'This is the way',
  'Those are not the droids you\'re looking for',
];



/**
 * Write your code inside the function 'search' below
 */
function search(query) {
  
}


console.log(search('panda'));
/*
 * [
 *   { doc: 'The sad <b>panda</b> ...', score: # }
 * ]
 */

console.log(search('sad cat is running'));
/*
 * [
 *   { doc: 'The <b>sad cat</b> ...', score: #  },
 *   { doc: 'The <b>sad</b> panda ...', score: #  }
 * ]
 */
