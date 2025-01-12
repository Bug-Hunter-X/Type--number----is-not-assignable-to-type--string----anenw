function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

function combineGeneric<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const numArr1 = [1, 2, 3];
const numArr2 = [4, 5, 6];
const combinedNum = combine(numArr1, numArr2); // Works correctly

const strArr1 = ['a', 'b', 'c'];
const strArr2 = ['d', 'e', 'f'];
const combinedStr = combineGeneric(strArr1, strArr2); // Works correctly using generics