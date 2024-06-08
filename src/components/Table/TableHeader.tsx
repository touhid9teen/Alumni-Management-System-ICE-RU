export interface TableHeaderProps {
    id: string;
    tableData: string[];
    customTableHeaderClass?: string;
}

const TableHeader: React.FC<TableHeaderProps> = (props: TableHeaderProps) => {
    const { id, tableData, customTableHeaderClass = "" } = props;

    return (
        <thead className={`text-xs text-[#464E5F] bg-grayish-blue`}>
            <tr>
                {tableData.map((item) => {
                    return (
                        <th
                            id={id}
                            key={item}
                            className={`font-semibold text-left pr-8 py-3 ${customTableHeaderClass}`}
                        >
                            {item}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};
export default TableHeader;
