import React, { Component } from 'react';

const INFORMATION_TABLE = [
    {
        'title': 'Рос. размер',
        'value': '52'
    },
    {
        'title': 'Ткань',
        'value': 'Эластичная'
    },
    {
        'title': 'Резинки',
        'value': 'Есть'
    },
    {
        'title': 'Что то еще',
        'value': 'Нет'
    }
]

class InformationTable extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        let infoItems = INFORMATION_TABLE.map((c, i) => {
            return (<div className='InformationTable__Item'>
                <div className='InformationTable__Item__Title'>{c.title}</div>
                <div className='InformationTable__Item__Value'>{c.value}</div>
            </div>);
        });

        return (
            <div className='InformationTable'>
                {infoItems}
            </div>
        );
    }
}

export default InformationTable;
