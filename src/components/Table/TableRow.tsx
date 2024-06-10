interface TableRowProps {
    stduentId: string;
    name: React.ReactNode;
    jobTypes: string;
    position: string;
    Institute: string;
    location: string;
    customTableRowClass?: string;
    customTableDataClass?: string;
}

const TableRow: React.FC<TableRowProps> = (props: TableRowProps) => {
    const {
        stduentId,
        name,
        jobTypes,
        position,
        Institute,
        location,
        customTableRowClass = "",
        customTableDataClass = "py-3",
    } = props;

    return (
        <tr className={`text-sm ${customTableRowClass}`} id={stduentId}>
            <td className={`font-semibold pr-16 ${customTableDataClass}`}>
                {name}
            </td>
            <td className={`font-semibold pr-16 ${customTableDataClass}`}>
                {jobTypes}
            </td>
            <td className={`font-semibold pr-16 ${customTableDataClass}`}>
                {position}
            </td>
            <td className={`font-semibold pr-16 ${customTableDataClass}`}>
                {Institute}
            </td>
            <td className={`font-semibold pr-16 ${customTableDataClass}`}>
                {location}
            </td>
        </tr>
    );
};

export default TableRow;
