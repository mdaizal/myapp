import React, { Component } from 'react'
import Edit from './Edit'
import Delete from './Delete'

const ListOfGames = [
    {'id': '1', 'title': 'Uncharted:Drake\'s Fortune', 'description': 'An action packed game with a sarcastic hero in ancient ruins finding El Dorado, the forgotten treasure'},
    {'id': '2', 'title': 'Mass Effect', 'description': 'Set in a sci-fi mode, a hooman got to rescue his entire species - Cat The Conkerer'},
    {'id': '3', 'title': 'PES 2016', 'description': 'I HIT THE SHOOT BUTTON WHY YOU PASS DAMN IT!'},
    {'id': '4', 'title': 'Tomb Raider', 'description': 'Don\'t just look at her boobs. Shoot the enemy!'}
]

class GameList extends Component{
    render() {
        let rowNumber = 1
        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>EDIT | DELETE</th>
                    </tr>
                </thead>
                <tbody>
                {ListOfGames.map(data =>
                    <tr key={data.id}>
                        <td>{rowNumber++}</td>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>
                            <Edit id={data.id} title={data.title} description={data.description} />
                            &nbsp;&nbsp;<Delete id={data.id} />
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}

export default GameList