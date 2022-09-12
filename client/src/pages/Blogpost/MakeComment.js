import useComment from '../../hooks/useComment'; 

export default function MakeComment({postId}) {
    const {comment, setComment, handleComment} = useComment(postId); 

    return (
        <form id="make-comment" onSubmit={handleComment}>
            <div className="profile-div">
                <img
                    src="https://scontent.fyyc8-1.fna.fbcdn.net/v/t1.6435-9/115821478_3118181974896443_7757001406663804394_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5GFLHOs5in8AX-mXpbO&_nc_ht=scontent.fyyc8-1.fna&oh=00_AT85u-Bbgv12Kh_VIZwYBAINLGR6Tki3pXghD3N1f7kBWA&oe=6329F324"
                    className="profile-pic"
                />
            </div>
            <div className="field">
                <input
                    type="text"
                    placeholder="Write a comment"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    required
                />
            </div>
            <button id="submit" type="submit">Post</button>
        </form>
    )
}