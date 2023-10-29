export function selectFiveQuestion(arr) {
    if (arr.length < 5) {
        return arr;
    }
    const selectedQuestions = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length); 
        selectedQuestions.push(arr.splice(randomIndex, 1)[0]); 
    }
    return selectedQuestions;
}