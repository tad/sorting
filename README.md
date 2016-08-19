# sorting
This is a node project to aid me in my studies of algorithms from the book
Algorithms 4th Edition, by Robert Sedgewick and Kevin Wayne.

I've started with the sorting algorithms in chapter 2. I am rewriting the
algorithms into modern, ES6 Javascript.

The code that you see at any given time isn't great, and I will be refactoring
it often.

This is primarily for my own study efforts.

NOTE: I'm running this in node version 6.3.1 to get the most ES6 possible.

NOTE: Due to the lack of proper tail recursion, mergeSort blows the heap
somewhere between arrays with 1000000 and 10000000 elements (at least on my
Macbook Pro with 8GB RAM). Hopefully this won't be an issue in Node 7.
