function longetsWord(sentence) {
    const words = sentence.split(" ");

    let longetsWordAtSentence = "";

    for (const word of words) {
        if (word.length > longetsWordAtSentence.length) {
            longetsWordAtSentence = word
        }
    }

    return `${longetsWordAtSentence}: ${longetsWordAtSentence.length} character`;
}

console.log(longetsWord("Saya sedang mengerjakan test yang diberikan oleh EIGEN"));