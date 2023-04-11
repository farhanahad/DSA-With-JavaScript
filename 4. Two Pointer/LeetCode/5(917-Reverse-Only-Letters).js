const reverseOnlyLetters = function (S) {
    const arr = S.split('')
    let left = 0
    let right = arr.length - 1
    const swap = (a, b) => {
      const temp = arr[a]
      arr[a] = arr[b]
      arr[b] = temp
    }
    const isLetter = (x = '') => /[a-zA-Z]/.test(x)
    while (left <= right) {
      while (!isLetter(arr[left])) {
        left++
        if (left > right) {
          break
        }
      }
      while (!isLetter(arr[right])) {
        right--
        if (left > right) {
          break
        }
      }
      if (left > right) {
        break
      }
      swap(left, right)
      left++
      right--
    }
    return arr.join('')
  }