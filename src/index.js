import math from 'mathjs';

export const getMeanAsRowVector = (matrix) => {
  const n = getDimensionSize(matrix, 2);
  const vectors = Array(n).fill().map((_, i) => math.eval(`matrix[:, ${i + 1}]`, { matrix }));
  return vectors.reduce((result, vector) => result.concat(math.mean(vector)), []);
};

export const getStdAsRowVector = (matrix) => {
  const n = getDimensionSize(matrix, 2);
  const vectors = Array(n).fill().map((_, i) => math.eval(`matrix[:, ${i + 1}]`, { matrix }));
  return vectors.reduce((result, vector) => result.concat(math.std(vector)), []);
};