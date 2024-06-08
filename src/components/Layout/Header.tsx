import Avatar from '../Avatar';
import Search from '../../elements/Search';

const Header: React.FC = () => {

  return (
    <nav className="sticky top-0 flex justify-between pr-5 py-4.5 w-full z-50 bg-white">
      <Search  className="w-[541px] h-10.5" />
      <Avatar divCustomClass="h-10 w-10" nameCustomClass="text-xl flex items-center cursor-pointer" />
    </nav>
  );
};

export default Header;
