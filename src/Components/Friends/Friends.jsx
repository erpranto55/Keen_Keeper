import FriendCard from "./FriendCard";

const Friends = ({ friends }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-12">

            <h2 className="text-2xl font-semibold mb-6 text-[#1F2937]">
                Your Friends
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {friends.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>

        </div>
    );
};

export default Friends;