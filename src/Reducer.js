const initialState = {
    lot : [
        {
            question: 'What is the capital of India?',
            questionId: 900,
            correct: 529,
            options: [
                {
                    text: 'San Francisco',
                    optionId: 443
                },
                {
                    text: 'Dubai',
                    optionId: 678
                },
                {
                    text: 'New Delhi',
                    optionId: 529
                }
            ]
        },
        {
            question: 'What is the capital of Bangladesh?',
            questionId: 901,
            correct: 679,
            options: [
                {
                    text: 'Kabul',
                    optionId: 423
                },
                {
                    text: 'Dhaka',
                    optionId: 679
                },
                {
                    text: 'New Delhi',
                    optionId: 519
                }
            ]
        },
        {
            question: 'What is the capital of Bhutan?',
            questionId: 8001,
            correct: 767886,
            options: [
                {
                    text: 'La Paz',
                    optionId: 7977
                },
                {
                    text: 'Mauritiana',
                    optionId: 9757
                },
                {
                    text: 'Thimpu',
                    optionId: 767886
                }
            ]
        }
    ]
}

const Reducer = (state = initialState, action) => {
    return state
}

export default Reducer