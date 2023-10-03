/** cách 1: giải pháp chưa tối ưu
 * - xác định ván đề (clear đề bài)
 * - Xác định rõ input, output
 * - Xác định điều kiện cuẩ input
 * - các bước xủ lý vấn đề
 */

// const same = (arr1: number[], arr2: number[]): boolean => {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     const isCheck = arr2.indexOf(arr1[i] ** 2);
//     if (isCheck == -1) {
//       return false;
//     }
//     arr2.splice(isCheck, 1);
//   }
//   return true;
// };

// console.log(same([1, 2, 3, 9], [1, 4, 81, 9]));

// interface IObject {
//   [key: number]: number;
// }

// const same2 = (arr1: number[], arr2: number[]): boolean => {
//   if (arr1.length !== arr2.length) return false;
//   const obj1: IObject = {};
//   const obj2: IObject = {};
//   for (let key of arr1) {
//     obj1[key] = (obj1[key] || 0) + 1;
//   }
//   for (let key of arr2) {
//     obj2[key] = (obj2[key] || 0) + 1;
//   }
//   for (let key in obj1) {
//     if (!((+key) ** 2 in obj2)) return false;
//     if (obj2[(+key) ** 2] !== obj1[key]) return false;
//   }
//   return true;
// };
// console.log(same2([1, 2, 3, 9], [1, 4, 81, 9]));

// function sumZero(arr: number[]): number[] | undefined {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]] ;
//             }
//         }
//     }
//     return undefined;
// }

// console.log(sumZero([-2,0,1,3]));

// =========================================================================
// function validAnagram(str1: string, str2: string): boolean {
//   if (str1.length !== str2.length) {
//     return false;
//   }
// //  split chia chuỗi thành một mảng kí tự
//   const char1 = str1.split("");
//   const char2 = str2.split("");
// // sort Sắp xếp hoặc đảo ngược các kí tự
//   char1.sort();
//   char2.sort();
//   return char1.join("") === char2.join("");
// }
//  console.log(validAnagram('aaz', 'zaa'));

// function countUniqueValues(listNumber: number[]): number {
//   if (listNumber.length === 0) {
//     return 0;
//   }
//   let uniqueCount = 0;
//   for (let i = 0; i < listNumber.length; i++) {
//     if (listNumber[i] !== listNumber[i - 1]) {
//       uniqueCount++;
//     }
//   }
//   return uniqueCount;
// }

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

function sameFrequency(num1: number, num2: number): boolean {
    // Chuyển hai số thành chuỗi để dễ xử lý
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
  
    // Nếu độ dài của hai chuỗi khác nhau, thì chắc chắn không có cùng tần số
    if (strNum1.length !== strNum2.length) {
      return false;
    }
  
    // Tạo một đối tượng để lưu tần số xuất hiện của từng chữ số của số thứ nhất
    const frequencyCounter: { [key: string]: number } = {};
  
    // Đếm tần số xuất hiện của các chữ số của số thứ nhất
    for (const char of strNum1) {
      frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
  
    // Kiểm tra tần số xuất hiện của các chữ số của số thứ hai
    for (const char of strNum2) {
      if (!frequencyCounter[char]) {
        // Nếu một chữ số không xuất hiện trong số thứ nhất, thì trả về false
        return false;
      }
      // Giảm tần số xuất hiện của chữ số này đi 1
      frequencyCounter[char]--;
    }
  
    // Nếu đã kiểm tra hết và không có sự khác biệt, thì trả về true
    return true;
  }
  
  // Kiểm tra các ví dụ
  console.log(sameFrequency(182, 281)); // true
  console.log(sameFrequency(34, 14));   // false
  console.log(sameFrequency(3589578, 5879385)); // true
  console.log(sameFrequency(22, 222));  // false
  