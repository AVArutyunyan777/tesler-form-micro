import React from "react";
import {Avatar, Dropdown} from "antd";
import {UserMenuContent} from "../UserMenuContent/UserMenuContent";

export const UserMenu = ({ className }: { className: string }) => {
    return (
        <Dropdown overlay={<UserMenuContent />}>
            <Avatar size="small" alt="avatar" icon="user" className={className} />
        </Dropdown>
    )
}