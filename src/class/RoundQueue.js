class RoundQueue {
  #queue;
  #nowIndex;
  constructor(array) {
    this.#queue = [...array];
    this.#nowIndex = 0;
  }

  getNow() {
    const result = this.#queue[this.#nowIndex];
    this.#nowIndex = (this.#nowIndex + 1) % this.#queue.length;

    return result;
  }

  seek() {
    return this.#queue[this.#nowIndex];
  }

  swapNowAndNext() {
    [
      this.#queue[this.#nowIndex],
      this.#queue[(this.#nowIndex + 1) % this.#queue.length],
    ] = [
      this.#queue[(this.#nowIndex + 1) % this.#queue.length],
      this.#queue[this.#nowIndex],
    ];
  }

  queue() {
    return this.#queue;
  }
}

export default RoundQueue;
