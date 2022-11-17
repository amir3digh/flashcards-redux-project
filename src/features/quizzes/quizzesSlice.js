import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const addQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuizId({ quizId: payload.id, topicId: payload.topicId }));
        dispatch(quizzesSlice.actions.addQuiz(payload));
    }
}

export const selectQuizzes = state => state.quizzes.quizzes;
export default quizzesSlice.reducer;
