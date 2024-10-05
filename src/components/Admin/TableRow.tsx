import Button from "../../elements/Button";

interface TableRowProps {
	options: { [key: string]: string };
	customTableRowClass?: string;
	customTableDataClass?: string;
	onClick?: (userData: { [key: string]: string }) => void;
}

const TableRow: React.FC<TableRowProps> = ({
	options,
	customTableRowClass = "",
	customTableDataClass = "py-3",
	onClick,
}) => {
	return (
		<tr
			className={`text-sm cursor-pointer ${customTableRowClass}`}
			id={options.studentId}
			onClick={() => onClick && onClick(options)}
		>
			{Object.entries(options)
				.slice(0, 5)
				.map(([key, value], index) => (
					<td
						key={key}
						className={`font-semibold pr-16 ${customTableDataClass} ${
							index === 0 ? "pl-4" : ""
						}`}
					>
						{value}
					</td>
				))}
			{
				<td>
					<Button customClass="!p-1">View Details</Button>
				</td>
			}
		</tr>
	);
};

export default TableRow;
