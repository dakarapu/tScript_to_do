interface Post {
    title: string, body: string, author: string, readonly createdAt: Date, updatedAt: Date, readonly id?: number
}

class Posts implements Post {
    constructor(
        public title: string,
        public body: string,
        public author: string,
        public readonly createdAt: Date,
        public updatedAt: Date,
        public readonly id?: number

    ) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.id = id;
    }
}

class PostManager {
    public postsList: Post[];
    constructor() {
        this.postsList = [];
    }

    getPosts(): Post[] {
        return this.postsList;
    }

    getPostById(id: number): Post | string | undefined {
        if (!id || typeof id !== 'number') return `Provide a valid Id`;

        const post = this.postsList[id];
        return post;
    }

    createPost(post: Omit<Post, 'id'>): string {
        if (!post) return `No valid post`;

        const { title, body, author, createdAt, updatedAt } = post;
        if (!title || !body || !author || !createdAt || !updatedAt) return `Inavlid post identified`;

        const id = this.postsList.length + 1;
        const data = {
            id,
            ...post
        }
        this.postsList.push(data);

        return `A new post has been created`;
    }

    updatePostById(data: Post): string {
        if (!data.id || typeof data.id !== 'number') return `Provide a valid Id`;

        const postFromList: Post | string | undefined = this.getPostById(data.id);

        if (typeof postFromList === 'string' || typeof postFromList === 'undefined') return `Post not found`

        if (postFromList) {
            postFromList.title = data?.title
            postFromList.body = data?.body
            postFromList.updatedAt = new Date();
        }

        this.postsList[data.id] = postFromList;
        return `A post has been updated successfully.`
    }

    deletePostById(id: number): string {
        if (!id || typeof id !== 'number') return `Provide a valid Id`;

        this.postsList.splice(id - 1, 1);
        return `Post deleted successfully`;
    }
}

