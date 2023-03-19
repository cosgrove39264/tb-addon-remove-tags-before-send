
const tags_to_remove=['script'];
async function beforeSendListener(tab,  details) {
    console.log("before:",details.body);

    tags_to_remove.forEach(tag => {
        details.body = details.body.replace(new RegExp(`<[/]?${tag}[^>]*>`, 'g'), '');
    });

    console.log("after:",details.body);

    return {details: details };
}

messenger.compose.onBeforeSend.addListener(beforeSendListener);
