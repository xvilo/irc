// @flow
import React from 'react'
import ChannelName from './ChannelName'
import type { ConversationT, PersonT } from '../flow'

type Props = {
  conversation: ConversationT,
  onPeopleClick: Array<PersonT> => void
};

class ConversationHeader extends React.Component<Props> {
  render () {
    const { conversation } = this.props
    const { people } = conversation

    var nameEl, countEl
    if (conversation) {
      nameEl = <h2 className="channel-heading vertical-center">
        <ChannelName name={conversation.name} />
      </h2>
      countEl = conversation.name[0] === '#' ? (
        <p
          className="channel-people-count vertical-center"
          onClick={() => {
            this.props.onPeopleClick(people)
          }}
        >
          {people.length} {people.length === 1 ? 'person' : 'people'}
        </p>
      ) : null
    } else {
      nameEl = null
      countEl = null
    }

    return (
      <div className="header channel-header">
        {nameEl}{countEl}
      </div>
    )
  }
}

export default ConversationHeader
