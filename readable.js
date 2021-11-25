const { Readable } = require("stream");

const advices = [
  "some text 1",
  "new some text 2",
  "always new text 3",
  "probably new text 4",
  "the last text 5"
];

class StreamFromArray extends Readable {
  constructor(array) {
    super({ objectMode: true });
    this.array = array;
    this.index = 0;
  }

  _read() {
    if(this.index <= this.array.length) {
      const chunk = {
        data: this.array[this.index],
        index: this.index
      }
      this.push(chunk);
      this.index++;
    } else {
      this.push(null);
    } 
  }
}

const adviceStream = new StreamFromArray(advices);

adviceStream.on('data', (chunk) => console.log(chunk));

adviceStream.on('end', () => console.log("done"));