export default function BlogInfo() {
    return (
        <section id="blog-info">
            <div id="blog-info-header">
                <h1 id="blog-title">A Beautiful Cruise</h1>
                <div id="blog-author">Written by: <span className="italic">Egor Ushakov</span></div>
                <div className="blog-date italic">August 26, 2022</div>
            </div>
            <div className="pic-div" id="blog-pic">
                <img src="https://cruise.blog/sites/default/files/styles/normal_size/public/2022-08/ncl-getaway-aerial.jpeg?itok=4Mi0hwVN" className="blog-pic" />
            </div>
            <p id="blog-info-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </section>
    )
}