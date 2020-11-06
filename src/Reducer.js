const initialState = {
    lot : [
        {
            question: 'What is the capital of India?',
            questionId: 900,
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
        }
    ]
}

const Reducer = (state = initialState, action) => {
    return state
}

export default Reducer