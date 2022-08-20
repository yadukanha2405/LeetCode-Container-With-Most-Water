import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const maxArea = (arr) => {
  let left = 0,
    right = arr.length,
    max = 0;
  while (left < right) {
    let area = Math.min(arr[left], arr[right]) * (right - left);
    max = area > max ? area : max;
    arr[left] < arr[right] ? left++ : right--;
  }
  return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let result = maxArea(height);
console.log(result);
