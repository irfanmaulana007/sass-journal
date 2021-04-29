import React from 'react'

import store from 'Store'
import { startLoading, stopLoading } from 'Actions'

import { JournalService } from 'Commons/api.service'

import JournalDetailContainer from 'Containers/journal/JournalDetail'
import BreadcumbComponent from 'Components/utilities/Breadcumb/Breadcumb'
import { SingleLineLoader } from 'Components/utilities/ContentLoader/ContentLoader'

export default class Journal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            journalId: new URLSearchParams(window.location.search).get("journalId"),
            journal: {}
        }
        
        this.fetchJournalDetail = this.fetchJournalDetail.bind(this)
    }

    fetchJournalDetail () {
        store.dispatch(startLoading('Fetch Journal Detail . . .'))
        JournalService.detail(this.state.journalId)
            .then((res) => this.setState({ journal: res.data }))
            .finally(() => store.dispatch(stopLoading()))
    }

    componentDidMount () {
        this.fetchJournalDetail()
    }

    render () {
        const { title, description, date } = this.state.journal

        return (
            <div className="container">
                <BreadcumbComponent siteList={[ 'journal', title || <SingleLineLoader /> ]} />

                <JournalDetailContainer title={title} description={description} date={date} />
            </div>
        )
    }
}