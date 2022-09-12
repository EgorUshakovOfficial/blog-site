export default function Comment({comment}) {
    return (
        <div className="comment">
            <div className="profile-div">
                <img
                    src="https://scontent.fyyc8-1.fna.fbcdn.net/v/t1.6435-9/115821478_3118181974896443_7757001406663804394_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5GFLHOs5in8AX-mXpbO&_nc_ht=scontent.fyyc8-1.fna&oh=00_AT85u-Bbgv12Kh_VIZwYBAINLGR6Tki3pXghD3N1f7kBWA&oe=6329F324"
                    className="profile-pic"
                />
            </div>
            <p className="comment-description">
                {comment}
            </p>
        </div>
    )
}