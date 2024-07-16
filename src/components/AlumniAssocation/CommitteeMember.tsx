interface CommitteeMembersProps {
    id: number;
    image: string;
    role: string;
    name: string;
    designation: string;
}

const CommitteeMembers: React.FC<CommitteeMembersProps> = (
    props: CommitteeMembersProps
) => {
    const { id, image, role, name, designation } = props;
    return (
        <div key={id} className="text-center grid border-2 px-2 py-4">
            <img
                src={image}
                alt={name}
                className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h1 className="font-bold text-xl">{role}</h1>
            <h3 className=" text-lg">{name}</h3>
            <p className=" text-sm text-gray-500">{designation}</p>
        </div>
    );
};

export default CommitteeMembers;
