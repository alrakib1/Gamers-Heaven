import moment from 'moment'

const Header = () => {
    return (
        <div className="mt-10 mb-7">
            <h3 className="text-5xl font-bold text-center">Gamers Heaven</h3>
            <p className="text-center mt-5 text-xl">Experience the best services</p>
            <p className='text-center mt-4'>{moment().format("[Today is] dddd")}</p>
            
        </div>
    );
};

export default Header;