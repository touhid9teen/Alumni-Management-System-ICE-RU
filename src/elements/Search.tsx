import { SearchIcon } from "./Icons";

interface SearchProps {
    isFullWidthSearch?: boolean;
    className?: string;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
    const { isFullWidthSearch = false, className } = props;

    const inputClass = `py-[14px] pl-12 pr-4 text-sm font-semibold 
  text-textDark placeholder-[#BABABA] placeholder:font-medium border-2 bg-light-blue rounded-lg
   outline-none focus:outline-none focus:ring-0
  ${isFullWidthSearch ? "w-full" : ""}
  ${className}`;

    return (
        <div className={`relative h-auto ${isFullWidthSearch ? "w-full" : ""}`}>
            <div
                className={`absolute top-1/2 transform -translate-y-1/2 left-4 pointer-events-none`}
            >
                <SearchIcon fill="#363853" width={20} height={20} />
            </div>
            <input type="text" placeholder="Search" className={inputClass} />
        </div>
    );
};

export default Search;
