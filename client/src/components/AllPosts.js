import { useQuery } from '@apollo/client'; 
import { GET_POSTS } from '../queries/postsQuery'; 
import Posts from './Posts';
import Spinner from './Spinner'; 

export default function AllPosts() {

	const { data, loading, error } = useQuery(GET_POSTS, {
		fetchPolicy: "network-only"
    })

	if (error) { return <p>Error! Something has gone wrong!</p>; }

	return (
		<section id="all-posts">
			<h2 className="title">Recent Posts</h2>
			{(!loading && data) ?
				<>
					{data.posts.length === 0 ?
						<p style={{ textAlign: "center", fontSize: "1.125em" }}>There are no posts right now.</p>
						:
						<Posts posts={data.posts} />
					}
				</>
				:
				<Spinner />
			}

		</section>
	)
}