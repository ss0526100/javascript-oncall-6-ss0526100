class RoundQueue {
  #queue;
  #nowIndex;
  constructor(array) {
    this.#queue.push(...array);
    this.#nowIndex = 0;
  }

  getNow() {
    const result = this.#queue[this.#nowIndex];
    this.#nowIndex = (this.#nowIndex + 1) % this.#queue.length;
  }

  seek() {
    return this.#queue[this.#nowIndex];
  }

  swapNowAndNext() {
    [this.#queue[this.#nowIndex], this.#queue[this.#nowIndex + 1]] = [
      this.#queue[this.#nowIndex + 1],
      this.#queue[this.#nowIndex],
    ];
  }
}

export default RoundQueue;
