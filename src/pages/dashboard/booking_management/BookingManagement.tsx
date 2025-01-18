
import AllBooking from './AllBooking';

const BookingManagement = () => {
    return (
        <div>
        <div className="flex justify-between items-center border p-2 rounded">
            <h3 className="md:text-lg font-semibold xl:text-2xl text-center">All Booking</h3>
            {/* <CreateSlotModal /> */}
        </div>
        <div>
            <AllBooking/>
        </div>
    </div>
    );
};

export default BookingManagement;