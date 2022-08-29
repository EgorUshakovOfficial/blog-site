import Posts from './Posts';
import Pagination from './Pagination';
import { useMemo } from 'react'; 
export default function AllPosts() {
	let isAuthenticated = false 

	// Styles
	const style = useMemo(() => {
		return {
			marginTop: isAuthenticated===false ? "calc(56px + 0.8em)" : "auto"
        }
	}, [isAuthenticated])

	return (
		<section id="all-posts" style={style}>
			<h2 className="title">Recent Posts</h2>
			<Posts />
			<Pagination />
		</section>
	)
}