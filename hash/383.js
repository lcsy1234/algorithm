/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const NoteMap = new Map()
    for (let i = 0; i < magazine.length; i++) {
        const val = (NoteMap.get(magazine[i]) || 0) + 1
        NoteMap.set(magazine[i], val)
    }
    for (let j = 0; j < ransomNote.length; j++) {
        const noteVal = NoteMap.get(ransomNote[j])
        if (noteVal === undefined || noteVal <= 0) {
            return false
        } else {
            NoteMap.set(ransomNote[j], noteVal - 1)
        }

    }
    return true
};
canConstruct('a', 'b')