function getArticleGenerator(articles) {
    let $container = $("#content");

    function getNextArticle() {
        if (!articles.length) {
            return;
        }
        
        let $article = $("<article>")
            .append($("<p>").text(articles.shift()));

        $container.append($article);

        return $article;
    }

    return getNextArticle;
}