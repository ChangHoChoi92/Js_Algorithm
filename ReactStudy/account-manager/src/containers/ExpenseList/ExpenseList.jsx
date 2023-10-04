import React from 'react'
import { useSelector } from 'react-redux'
import List from '../../components/List/List';

export default function ExpenseList() {

    const expnseList = useSelector((store) => store.expense.expenseList);

    return (
        <List items={expnseList} />
    )
}
