export function changeHair(hairNum) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_HAIR',
        hairNum
    };
}

export function changeEyes(eyeNum) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_EYES',
        eyeNum
    };
}

export function changeNose(noseNum) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_NOSE',
        noseNum
    };
}

export function changeMouth(mouthNum) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_MOUTH',
        mouthNum
    };
}

export function changeWomanBody(womanBodyNumber) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_BODY_WOMAN',
        womanBodyNumber
    };
}

export function changeManBody(manBodyNumber) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_BODY_MAN',
        manBodyNumber
    };
}

export function deleteWomanBody() {
    return {
        type: '@AVATAR/DELETE_AVATAR_BODY_WOMAN',
    };
}

export function deleteManBody() {
    return {
        type: '@AVATAR/DELETE_AVATAR_BODY_MAN',
    };
}

export function setAvatar(hair, eye, nose, mouth, body, gender) {
    return {
        type: '@AVATAR/SET_AVATAR',
        hair, eye, nose, mouth, body, gender
    };
}