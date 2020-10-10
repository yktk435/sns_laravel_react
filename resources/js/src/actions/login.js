export const inputUserName = (userName) => ({
    type: 'INPUT_USERNAME',
    payload: {
        userName
    }
})
export const inputPass = (pass) => ({
    type: 'INPUT_PASS',
    payload: {
        pass
    }
})

export const pushLoginButton = (error) => ({
    type: 'PUSH_LOGIN_BUTTON',
    payload: {
        error,
    }
})