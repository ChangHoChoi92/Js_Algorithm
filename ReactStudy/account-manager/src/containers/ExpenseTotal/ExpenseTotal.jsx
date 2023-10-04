import React from 'react'
import { useSelector } from 'react-redux'

export default function ExpenseTotal() {

    // 모든 지출 내역 불러오기
    const expnseList = useSelector((store) => store.expense.expenseList);
    // 나의 수입 불러오기
    const income = useSelector((store) => store.expense.income);

    // 배열, 객체로 이루어진 값을 reduce로 더해서 출력하기
    const totalExpense = expnseList.reduce((acc, item) => {
        return acc + item.price
    }, 0);

    const result = income - totalExpense;

    // 굳이 forEach로 값을 빼지 않고 reduce를 이용해서 값을 출력
    // function sum() {
    //     let result = 0;
    //     expnseList.forEach(element => {
    //         result += element.price
    //     });
    //     return result;
    // }

    // function result() {
    //     let total = income - sum();
    //     return total;
    // }

    return (
        <>
            <div>
                <span>총 지출 : </span>
                <span>{totalExpense} 원</span>
            </div>
            <div>
                <span>잔액 : </span>
                <span>{result} 원</span>
            </div>
        </>
    )
}
