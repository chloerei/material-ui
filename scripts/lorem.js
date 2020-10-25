global.lorem_number = function(max = 100) {
  return(Math.floor(Math.random() * max))
}

global.lorem_words = function(count = 1) {
  let array = []
  for (var i = 0; i < count; i++) {
    array.push(Math.random().toString(36).substring(7))
  }
  return(array.join(' '))
}
