import React from "react";
import {Menu} from "antd";
import {useDispatch} from "react-redux";
import {$do} from "@tesler-ui/core";

export const UserMenuContent: React.FC = () => {
    // const { fullName, login, roles } = useSelector((state: AppState) => {
    //     return {
    //         fullName: state.session.firstName,
    //         login: state.session.login,
    //         roles: state.session.roles
    //     }
    // })
    const fullName = "Test"
    const login = "Test"
    const roles = [
        {
            key: "Role Key",
            value: "Role Value",
        }
    ]
    const dispatch = useDispatch()
    const handleLogout = React.useCallback(() => dispatch($do.logout(null)), [dispatch])
    const userName = `${fullName}`

  return (
      <Menu>
          <Menu.Item key="userName">{userName}</Menu.Item>
          <Menu.Item key="login">{login}</Menu.Item>
          <Menu.Divider key="divider1" />
          <Menu.SubMenu key="roles" title="Роли">
              {roles?.map(i => (
                  <Menu.Item key={i.key}>{i.value}</Menu.Item>
              ))}
          </Menu.SubMenu>
          <Menu.Divider key="divider2" />
          <Menu.Item key="logout" onClick={handleLogout}>
              Выйти
          </Menu.Item>
      </Menu>
  )
}