// Copyright (c) 2015 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import MemberListChannel from './member_list_channel.jsx';

import React from 'react';
import {Modal} from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

export default class ChannelMembersModal extends React.Component {
    constructor(props) {
        super(props);

        this.onHide = this.onHide.bind(this);

        this.state = {
            channel: this.props.channel,
            show: true
        };
    }

    onHide() {
        this.setState({show: false});
    }

    render() {
        return (
            <div>
                <Modal
                    dialogClassName='more-modal more-modal--action'
                    show={this.state.show}
                    onHide={this.onHide}
                    onExited={this.props.onModalDismissed}
                >
                    <Modal.Header closeButton={true}>
                        <Modal.Title>
                            <span className='name'>{this.props.channel.display_name}</span>
                            <FormattedMessage
                                id='channel_members_modal.members'
                                defaultMessage=' Members'
                            />
                        </Modal.Title>
                        <a
                            className='btn btn-md btn-primary'
                            href='#'
                            onClick={() => {
                                this.props.showInviteModal();
                                this.onHide();
                            }}
                        >
                            <FormattedMessage
                                id='channel_members_modal.addNew'
                                defaultMessage=' Add New Members'
                            />
                        </a>
                    </Modal.Header>
                    <Modal.Body
                        ref='modalBody'
                    >
                        <MemberListChannel
                            channel={this.props.channel}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

ChannelMembersModal.propTypes = {
    onModalDismissed: React.PropTypes.func.isRequired,
    showInviteModal: React.PropTypes.func.isRequired,
    channel: React.PropTypes.object.isRequired
};