const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const getRandomCharacters = (char) => {
  return Math.floor(Math.random() * char.length)
}

function generateHash(charactersLength) {
  let result = ""

  for (let i = 0; i < charactersLength; i++) {
    result += characters[getRandomCharacters(characters)]
  }

  return result
}

module.exports = generateHash
