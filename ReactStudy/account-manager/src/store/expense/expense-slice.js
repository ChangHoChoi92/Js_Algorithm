import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        // 사용자의 지출 목록을 관리합니다.
        expenseList: [{ name: 'coffee', price: 5000 }, { name: 'icecreem', price: 1500 }],
        income: 100000
    },
    reducers: {
        // addExpenseAction ==> 액션 type의 이름입니다.
        addExpenseAction: (currentSlice, action) => {

            // expenseList가 배열이기 때문에 push를 사용해주고 action에 전달된 값을 payload로 들고온다. name, price
            // silce의 expenseList에 접근하여 데이터를 수정합니다.
            currentSlice.expenseList.push(action.payload);
        },
        // 사용자의 수입을 store에 반영합니다.
        setIncomeAction: (currentSlice, action) => {
            console.log('setIncomeAction');
            currentSlice.income = action.payload;
        }

    }
});

// action을 디스패치에서 사용할 수 있도록 밖으로 내보냅니다.
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

// slice 에서 생성한 reducer들을 외부로 내보냅니다.
export default expenseSlice.reducer