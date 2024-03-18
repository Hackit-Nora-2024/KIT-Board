export default function ArticlePostForm() {
    return (
        <form action="/api/article" method="post">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />

            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" />

            <button type="submit">Submit</button>
        </form>
    )
}