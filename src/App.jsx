import { useEffect, useState } from "react";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "./App.css";

function App() {
  const [count, setCount] = useState([
    71, 270, 239, 161, 546, 679, 527, 74, 521, 397, 886, 531, 252, 1000, 356,
    245, 23, 848, 208, 313, 380, 782, 329, 693, 725, 405, 898, 523, 471, 568,
    761, 529, 598, 19, 428, 404, 262, 852, 473, 282, 876, 1, 319, 801, 400, 509,
    347, 97, 64, 938, 611, 202, 41, 667, 449, 911, 620, 295, 840, 282, 42, 54,
    228, 334, 561, 595, 991, 495, 176, 544, 664, 190, 898, 924, 465, 508, 38,
    639, 240, 349, 395, 757, 167, 401, 489, 718, 421, 764, 482, 527, 95, 730,
    318, 112, 933, 460, 159, 670, 583, 780, 649, 688, 522, 513, 485, 420, 119,
    897, 69, 52, 655, 77, 427, 814, 88, 219, 644, 841, 872, 550, 894, 8, 837,
    660, 830, 874, 83, 683, 678, 901, 617, 418, 215, 158, 246, 932, 270, 519, 8,
    185, 960, 56, 459, 868, 895, 554, 251, 50, 65, 248, 271, 785, 257, 525, 499,
    784, 915, 39, 641, 69, 628, 942, 852, 596, 399, 568, 311, 820, 938, 445,
    981, 550, 160, 51, 183, 159, 835, 656, 169, 824, 853, 825, 725, 666, 549,
    663, 306, 487, 709, 338, 690, 11, 343, 540, 349, 537, 589, 665, 61, 395,
    188, 600, 733, 166, 391, 499, 560, 878, 941, 197, 342, 834, 545, 353, 261,
    650, 608, 433, 176, 734, 751, 154, 863, 825, 975, 594, 22, 974, 279, 103,
    637, 97, 389, 939, 442, 121, 57, 246, 530, 501, 123, 693, 69, 226, 116, 537,
    611, 41, 738, 135, 510, 762, 423, 783, 541, 688, 162, 395, 212, 694, 699,
    486, 368, 815, 644, 310, 617, 121, 550, 66, 141, 141, 947, 620, 687, 662,
    652, 16, 774, 968, 787, 651, 891, 619, 390, 279, 941, 82, 271, 332, 374,
    552, 692, 983, 806, 298, 917, 568, 913, 484, 269, 739, 770, 505, 756, 842,
    356, 438, 88, 772, 585, 834, 431, 451, 153, 829, 579, 920, 954, 877, 510,
    874, 956, 986, 617, 644, 374, 662, 603, 836, 663, 561, 354, 603, 175, 354,
    385, 81, 820, 138, 199, 368, 816, 66, 769, 627, 542, 286, 280, 61, 283, 553,
    310, 776, 669, 260, 781, 969, 366, 772, 305, 572, 503, 655, 606, 905, 176,
    597, 79, 759, 245, 998, 181, 350, 241, 309, 224, 663, 279, 276, 311, 77,
    567, 544, 420, 983, 45, 424, 829, 259, 409, 60, 909, 557, 734, 993, 188,
    822, 284, 480,
  ]);

  function bubbleSort() {
    let n = count.length;
    let swapped;

    // Outer loop to traverse the entire array
    for (let i = 0; i < n - 1; i++) {
      swapped = false;

      // Inner loop to compare adjacent elements
      for (let j = 0; j < n - i - 1; j++) {
        // If the current element is greater than the next, swap them
        if (count[j] > count[j + 1]) {
          let arr = [...count];
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setCount(arr);
          swapped = true; // Mark that a swap happened
        }
      }

      if (!swapped) break;
    }
  }

  function insertionSort() {
    let n = count.length;
    let arr = [...count]; // Create a copy of the array

    // Outer loop to traverse the entire array
    for (let i = 1; i < n; i++) {
      let key = arr[i]; // The current element to be inserted
      let j = i - 1;

      // Inner loop to shift elements that are greater than key to one position ahead
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; // Shift the element
        setCount([...arr]); // Update the state with the intermediate array
        j--;
      }

      arr[j + 1] = key; // Place the key at its correct position
      setCount([...arr]); // Update the state with the current state of the array
    }
  }

  function quickSort(arr = count, start = 0, end = count.length - 1) {
    if (start < end) {
      const pivotIndex = partition(arr, start, end); // Find pivot index
      setCount([...arr]); // Update state with the intermediate array

      // Recursively sort elements before and after partition
      quickSort(arr, start, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, end);
    }
  }

  // Helper function to partition the array
  function partition(arr, start, end) {
    const pivot = arr[end]; // Choose the last element as the pivot
    let pivotIndex = start; // Set initial pivot index

    for (let i = start; i < end; i++) {
      // If current element is less than or equal to pivot, swap it
      if (arr[i] <= pivot) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++; // Move pivot index to the right
        setCount([...arr]); // Update state with the intermediate array
      }
    }

    // Swap the pivot element to its correct sorted position
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    setCount([...arr]); // Update state with the intermediate array

    return pivotIndex; // Return the index where the pivot is placed
  }

  useEffect(() => {
    bubbleSort();
    // insertionSort();
    // quickSort();
  }, [count]);
  return (
    <div className="container">
      <BarChart
        xAxis={[{ scaleType: "band", data: count }]}
        series={[{ data: count }]}
        width={1700}
        height={600}
      />
    </div>
  );
}

export default App;
