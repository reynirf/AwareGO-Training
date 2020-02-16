const _data = {
    assignment: {
        title: "Phishing",
        videoID: "Zs6PeKSvF5Q",
        image: false,
        text: "Phishing is typically carried out by email spoofing or instant messaging. It often directs users to enter personal information at a fake website, the look and feel of which are identical to the legitimate one, with the only difference being the URL."
    },
    challenges: [
        { 
            id: 1,
            title: "Multiple choice",
            description: "",
            answer: {},
            imgSrc: 'assets/img/arion-sketchy.png',
            onlineImgSrc: 'https://i.imgur.com/cpgws3l.png',
            imageWidth: '69%',
            options: [
                { id: 1, text: 'Click "secure your account here"'},
                { id: 2, text: 'Click "Learn more" to learn more'},
                { id: 3, text: 'Reply the email and ask for help'},
                { id: 4, text: 'Ignore the email, it was not sent by Arion Banki'}
            ],
            correctAnswer: 4,
            question: "You receive this email. What do you do?",
            questionType: 'multipleChoice'
        },
        { 
            id: 2,
            title: "Two cases, one scam",
            description: "You receive an email from your your bank regarding your account. Choose which image looks malicious.",
            answer: {},
            questionType: "splitscreen",
            splitscreenImages: [
                { id: 1, image: 'assets/img/sketchy-arion.png' },
                { id: 2, image: 'assets/img/safe-arion.png' }
            ],
            correctAnswer: 1
        },
        { 
            id: 3,
            title: "Multiple choice",
            description: "",
            answer: {},
            imgSrc: 'assets/img/Google_why_am_i_gettind_okgfo[pa.png',
            onlineImgSrc: 'https://i.imgur.com/oh0YPZ6.png',
            imageWidth: '58%',
            options: [
                { id: 1, text: 'Ignore the email, it was not sent by Google'},
                { id: 2, text: 'Download the pdf "opening hours"'},
                { id: 3, text: 'Reply and ask for assistance'},
                { id: 4, text: 'Forward the email to my coworkers'}],
            correctAnswer: 1,
            question: "You receive this email. What do you do?",
            questionType: 'multipleChoice'
        },
        {
            id: 4,
            title: "Multiple choice",
            description: "",
            answer: {},
            imgSrc: 'assets/img/good_allert_from_microsoft.png',
            onlineImgSrc: 'https://i.imgur.com/hRuaqlX.png',
            imageWidth: '100%',
            options: [
                { id: 1, text: 'Ignore the email, it was not sent by Google'},
                { id: 2, text: 'Check your account activity'},
                { id: 3, text: 'Reply and ask for assistance'},
                { id: 4, text: 'Forward the email to my coworkers'}],
            correctAnswer: 2,
            question: "You receive this email. What do you do?",
            questionType: 'multipleChoice'
        }
    ]
}

export const data = _data;