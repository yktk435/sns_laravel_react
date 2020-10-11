export const inputPostText = text => ({
    type: 'INPUT_POST_TEXT',
    payload: {
        text,
    }
})

export const clearTextBox = () => ({
    type: 'CLEAR_TEXT',
    payload: { text:'' },
  });
  