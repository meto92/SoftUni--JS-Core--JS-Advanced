function highlightElementAndChildren(selector) {
    let $root = $(selector);
    
    let depths = new Map();
    
    function setDepths($element, depth = 0) {
        if (!$element) {
            return;
        }

        depths.set($element, depth);

        [...$element.children()]
            .forEach(child => {
                setDepths($(child), depth + 1);
            });
    }

    setDepths($root);

    let deepestElementArgs = [...depths].sort((a, b) => b[1] - a[1])[0];

    let $deepestElement = deepestElementArgs[0];
    let deepestElementDepth = deepestElementArgs[1];

    let $currentElement = $deepestElement;

    for (let i = 0; i <= deepestElementDepth; i++) {
        $currentElement.addClass("highlight");

        $currentElement = $currentElement.parent();
    }
}