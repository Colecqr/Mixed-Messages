// this factory function creates recipient profiles
const profile = (name, nickname, interest, grade) => {
    return {
        name, 
        nickname, 
        interest, 
        grade,
    }
}

// this array contains a variety of wacky adjectives
const adjectives15 = ['hilarious', 'merry', 'silly', 'amusing', 'diverting', 'entertaining', 'comical', 'whimsical', 'droll', 'riotous', 'jocular', 'waggish', 'hysterical', 'antic', 'risible']


// this function creates a unique yearbook message specific to the recipient
const message = (profile) => {
    if (profile.grade === 'teacher') {
        return `${profile.name}, your class was so ${randAdjective()}, have fun ${profile.interest} over the summer, see you next year! -${sender}`
    } else if (profile.grade === 9 || profile.grade === 10 || profile.grade === 11) {
        if (profile.nickname === 'na') {
            return `${profile.name}, I hope you have a ${randAdjective()} summer! have fun ${profile.interest}! Ill see you in the fall for your ${upComing(profile.grade)} year! -${sender}`
        } else {
            return `${profile.nickname}, I hope you have a ${randAdjective()} summer! have fun ${profile.interest}! Ill see you in the fall for your ${upComing(profile.grade)} year! -${sender}`
        }
    } else if (profile.grade === 12) {
        if (profile.nickname === 'na') {
            return `${profile.name}, I hope you have a ${randAdjective()} summer! have fun ${profile.interest}! congradulations on graduating, good luck in the real world! -${sender}`
        } else {
            return `${profile.nickname}, I hope you have a ${randAdjective()} summer! have fun ${profile.interest}! congradulations on graduating, good luck in the real world! -${sender}`
        }
        
    } else {
        return 'invalid grade value'
    }
}