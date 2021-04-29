import React from 'react'

import store from 'Store'
import { startLoading, stopLoading } from 'Actions'

import { JournalService } from 'Commons/api.service'

import JournalItem from 'Components/journal/JournalItem'

export default class JournalList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            journals: []
        }

        this.fetchJournalData = this.fetchJournalData.bind(this)
    }

    fetchJournalData () {
        store.dispatch(startLoading('Fetch Journal Data . . .'))
        JournalService.get()
            .then((res) => this.setState({ journals: res.data }))
            .finally(() => store.dispatch(stopLoading()))
    }

    componentDidMount () {
        this.fetchJournalData()
    }

    render () {
        const { journals } = this.state

        return (
            <div className="row">
                {journals.map(journal =>
                    <div key={journal._id} className="col-4">
                        <JournalItem id={journal._id} title={journal.title} description={journal.description} date={journal.date} />
                    </div>
                )}
            </div>
        )
    }
}