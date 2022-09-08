import { formatDate } from '../../utils/formatDate'; 
export default function BlogInfo({
    title,
    description, 
    photoUrl, 
    createdAt,
    author
}) {
    return (
        <section id="blog-info">
            <div id="blog-info-header">
                <h1 id="blog-title">{title}</h1>
                <div id="blog-author">Written by: <span className="italic">{author.firstName} {author.lastName}</span></div>
                <div id="blog-date" className="italic">{formatDate(createdAt)}</div>
            </div>
            <div className="pic-div" id="blog-pic">
                <img style={{height:"auto", width:"600px"}} src={photoUrl} />
            </div>
            <p id="blog-info-description">
                {description}
            </p>
        </section>
    )
}