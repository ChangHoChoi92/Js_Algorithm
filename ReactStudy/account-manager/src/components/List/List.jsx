import React from 'react'
import ListItem from '../ListItem/ListItem'

export default function List({ items }) {
    return (
        <table>
            <tbody>
                {items && items.map((item, index) => <ListItem key={index} item={item} />)}
            </tbody>
        </table>
    )
}

