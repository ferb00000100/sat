const Post = {
    async collectors(parent, args, ctx, info) {
        const collector = await ctx.db.query.collectors();
        return collector.count
    }
}

module.exports = Post;