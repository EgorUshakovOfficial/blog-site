import MakeComment from './MakeComment';
import Comment from './Comment'; 
export default function Comments() {
    return (
        <section id="comments">
            <MakeComment />
            <Comment />
            <Comment />
            <Comment />
        </section>
    )
}