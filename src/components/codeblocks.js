export default {
  gcd: `// Java program to compute GCD of
// two numbers using general
// approach
import java.io.*;

class GFG {

	static int gcd(int a, int b)
	{
		
		int i;
		if (a < b)
			i = a;
		else
			i = b;

		for (i = i; i > 1; i--) {

		
			if (a % i == 0 && b % i == 0)
				return i;
		}

		return 1;
	}

	public static void main(String[] args)
	{
		int a = 30, b = 20;


		System.out.println("GCD = " + gcd(b, a));
	}
}
`,
  primefactor: `
import java.io.*;
import java.lang.Math;

class GFG {
	// A function to print all prime factors
	// of a given number n
	public static void primeFactors(int n)
	{
		// Print the number of 2s that divide n
		while (n % 2 == 0) {
			System.out.print(2 + " ");
			n /= 2;
		}

		// n must be odd at this point. So we can
		// skip one element (Note i = i +2)
		for (int i = 3; i <= Math.sqrt(n); i += 2) {
			// While i divides n, print i and divide n
			while (n % i == 0) {
				System.out.print(i + " ");
				n /= i;
			}
		}

		// This condition is to handle the case when
		// n is a prime number greater than 2
		if (n > 2)
			System.out.print(n);
	}

	public static void main(String[] args)
	{
		int n = 315;
		primeFactors(n);
	}
}
`,
  distributionInACircle: `class GFG {
	static int lastPosition(int n, int m, int k)
	{
		if (m <= n - k + 1)
			return m + k - 1;	
		m = m - (n - k + 1);
		return (m % n == 0) ? n : (m % n);
	}
	public static void main(String arg[])
	{
		int n = 5;
		int m = 8;
		int k = 2;
		System.out.print(lastPosition(n, m, k));
	}
}`,
  bubblesort: `
import java.util.*;

class BubbleSort {
	void bubbleSort(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n - 1; i++)
			for (int j = 0; j < n - i - 1; j++)
				if (arr[j] > arr[j + 1]) {
						int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
	}

	void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	
	public static void main(String args[])
	{
		BubbleSort ob = new BubbleSort();
		int arr[] = { 5, 1, 4, 2, 8 };
		ob.bubbleSort(arr);
		System.out.println("Sorted array");
		ob.printArray(arr);
	}
}
`,
  selectionsort: `class SelectionSort
{
	void sort(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n-1; i++)
		{
			
			int min_idx = i;
			for (int j = i+1; j < n; j++)
				if (arr[j] < arr[min_idx])
					min_idx = j;	
			int temp = arr[min_idx];
			arr[min_idx] = arr[i];
			arr[i] = temp;
		}
	}
	void printArray(int arr[])
	{
		int n = arr.length;
		for (int i=0; i<n; ++i)
			System.out.print(arr[i]+" ");
		System.out.println();
	}

	
	public static void main(String args[])
	{
		SelectionSort ob = new SelectionSort();
		int arr[] = {64,25,12,22,11};
		ob.sort(arr);
		System.out.println("Sorted array");
		ob.printArray(arr);
	}
}

`,
  insertionsort: `
			
while (j >= 0 && arr[j] > key) {
  arr[j + 1] = arr[j];
  j = j - 1;
}
arr[j + 1] = key;
}
}


static void printArray(int arr[])
{
int n = arr.length;
for (int i = 0; i < n; ++i)
System.out.print(arr[i] + " ");

System.out.println();
}


public static void main(String args[])
{
int arr[] = { 12, 11, 13, 5, 6 };

InsertionSort ob = new InsertionSort();
ob.sort(arr);

printArray(arr);
}
};
`,

  quicksort: `a.io.*;

class GFG {


	static void swap(int[] arr, int i, int j)
	{
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	
	static int partition(int[] arr, int low, int high)
	{

		
		int pivot = arr[high];

	
		int i = (low - 1);

		for (int j = low; j <= high - 1; j++) {

			
			if (arr[j] < pivot) {

				
				i++;
				swap(arr, i, j);
			}
		}
		swap(arr, i + 1, high);
		return (i + 1);
	}

	
	static void quickSort(int[] arr, int low, int high)
	{
		if (low < high) {

			
			int pi = partition(arr, low, high);

			
			quickSort(arr, low, pi - 1);
			quickSort(arr, pi + 1, high);
		}
	}


	static void printArray(int[] arr, int size)
	{
		for (int i = 0; i < size; i++)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	
	public static void main(String[] args)
	{
		int[] arr = { 10, 7, 8, 9, 1, 5 };
		int n = arr.length;

		quickSort(arr, 0, n - 1);
		System.out.println("Sorted array: ");
		printArray(arr, n);
	}
}`,
  mergersort: `class MergeSort {
	
	void merge(int arr[], int l, int m, int r)
	{
	
		int n1 = m - l + 1;
		int n2 = r - m;

		
		int L[] = new int[n1];
		int R[] = new int[n2];

		
		for (int i = 0; i < n1; ++i)
			L[i] = arr[l + i];
		for (int j = 0; j < n2; ++j)
			R[j] = arr[m + 1 + j];

		
		int i = 0, j = 0;


		int k = l;
		while (i < n1 && j < n2) {
			if (L[i] <= R[j]) {
				arr[k] = L[i];
				i++;
			}
			else {
				arr[k] = R[j];
				j++;
			}
			k++;
		}

		
		while (i < n1) {
			arr[k] = L[i];
			i++;
			k++;
		}

		
		while (j < n2) {
			arr[k] = R[j];
			j++;
			k++;
		}
	}

	
	void sort(int arr[], int l, int r)
	{
		if (l < r) {
			
			int m = l + (r - l) / 2;

			
			sort(arr, l, m);
			sort(arr, m + 1, r);

			merge(arr, l, m, r);
		}
	}

	
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6, 7 };

		System.out.println("Given Array");
		printArray(arr);

		MergeSort ob = new MergeSort();
		ob.sort(arr, 0, arr.length - 1);

		System.out.println("\nSorted array");
		printArray(arr);
	}
}`,
  linearsearch: `class GFG {
	public static int search(int arr[], int x)
	{
		int N = arr.length;
		for (int i = 0; i < N; i++) {
			if (arr[i] == x)
				return i;
		}
		return -1;
	}

	
	public static void main(String args[])
	{
		int arr[] = { 2, 3, 4, 10, 40 };
		int x = 10;


		int result = search(arr, x);
		if (result == -1)
			System.out.print(
				"Element is not present in array");
		else
			System.out.print("Element is present at index "
							+ result);
	}
}
`,
  binarysearch: `class BinarySearch {

	int binarySearch(int arr[], int l, int r, int x)
	{
		if (r >= l) {
			int mid = l + (r - l) / 2;

			if (arr[mid] == x)
				return mid;

			if (arr[mid] > x)
				return binarySearch(arr, l, mid - 1, x);

			return binarySearch(arr, mid + 1, r, x);
		}
		return -1;
	}
	public static void main(String args[])
	{
		BinarySearch ob = new BinarySearch();
		int arr[] = { 2, 3, 4, 10, 40 };
		int n = arr.length;
		int x = 10;
		int result = ob.binarySearch(arr, 0, n - 1, x);
		if (result == -1)
			System.out.println("Element not present");
		else
			System.out.println("Element found at index "
							+ result);
	}}`
};
