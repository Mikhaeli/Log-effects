const values = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
};

const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m"
};

const shades = {
  black: "\x1b[30m",
  white: "\x1b[37m",
  BGblack: "\x1b[40m",
  BGwhite: "\x1b[47m"
}

const backgrounds = {
  BGred: "\x1b[41m",
  BGgreen: "\x1b[42m",
  BGyellow: "\x1b[43m",
  BGblue: "\x1b[44m",
  BGmagenta: "\x1b[45m",
  BGcyan: "\x1b[46m"
};

function display(message, color) {
  console.log(color, message, values.reset);
}

function ranCol() {
  var keys = Object.keys(colors);
  let col = keys[Math.floor(Math.random() * keys.length)];
  return colors[col];
}

function ranColDigits(message) {
  console.log(message.split("").map(val => {
    return ranCol() + val
  }).join('') + values.reset);
}

function rainbowWord(message) {
  //rainbow pattern changes each character
  var keys = Object.keys(colors);
  let n = 0;
  message = message.split("");
}

function rainbowEffect() {
  //rainbow pattern changes each time it is called
  var count = 0;

  function changeCount() {
    count += 1;
    if (count >= Object.keys(colors).length) {
      count = 0;
    }
    return count;
  }
  return changeCount;
}

var rainbowCall = rainbowEffect();

module.exports = {
  ranColor: function(message) {
    display(message, ranCol());
  },
  rainbow: function(message) {
    display(message, colors[Object.keys(colors)[rainbowCall()]])
  },
  red: function(message) {
    return colors.red + message + values.reset;
  },
  blue: function(message) {
    // return colors.blue + message + values.reset, this;
    return this;
  },
  underline: function(message) {
    return values.underscore + message + values.reset;
  }
}
