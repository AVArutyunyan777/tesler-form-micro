import {Component} from "react";
import {Table} from "antd";
import {ColumnProps} from "antd/es/table";

interface User {
    key: number,
    name: string;
}

const columns: ColumnProps<User>[] = [{
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
}];

const data: User[] = [{
    key: 0,
    name: 'Jack',
}];



// class BaseTable extends Component {
//
//     data = [
//         {
//             key: '1',
//             name: 'John Brown',
//             age: 32,
//             address: 'New York No. 1 Lake Park',
//         },
//         {
//             key: '2',
//             name: 'Jim Green',
//             age: 42,
//             address: 'London No. 1 Lake Park',
//         },
//         {
//             key: '3',
//             name: 'Joe Black',
//             age: 32,
//             address: 'Sidney No. 1 Lake Park',
//         },
//         {
//             key: '4',
//             name: 'Jim Red',
//             age: 32,
//             address: 'London No. 2 Lake Park',
//         },
//     ];
//
//     import { Table } from 'antd';
//
// }