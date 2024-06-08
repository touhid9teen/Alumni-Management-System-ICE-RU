import React from "react";

import TableHeader, {
    TableHeaderProps,
} from "../../components/Table/TableHeader";

interface TableProps extends TableHeaderProps {
    children: React.ReactNode;
    customTableClass?: string;
}

const Table: React.FC<TableProps> = (props: TableProps) => {
    const {
        children,
        customTableClass = "",
        tableData,
        id,
    } = props;

    return (
        <table className={`bg-white ${customTableClass}`}>
            <TableHeader tableData={tableData} id={id} />
            <tbody>{children}</tbody>
        </table>
    );
};
export default Table;
