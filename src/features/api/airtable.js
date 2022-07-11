import Airtable from 'airtable';

const TABLE_NAME = 'posts';
const PAGE_SIZE = 3;

const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const retrievePosts = ({ sortDirection, searchTerm }) => {
    let params = {
        view: 'Grid view',
        pageSize: PAGE_SIZE,
    };
    if (searchTerm) {
        params = {
            ...params,
            filterByFormula: `SEARCH('${searchTerm.toLowerCase()}', {content})`,
        };
    }
    if (sortDirection) {
        params = {
            ...params,
            sort: [
                {
                    field: 'content',
                    direction: sortDirection ? sortDirection : 'desc',
                },
            ],
        };
    }
    return base(TABLE_NAME).select(params);
};

// const createPost = post =>
//     base(TABLE_NAME).create([
//         { fields: { username: post.username, content: post.content } },
//     ]);

const URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/posts`;

const createPost = post =>
    fetch(URL, {
        method: 'post',
        headers: new Headers({
            Authorization: 'Bearer ' + process.env.REACT_APP_AIRTABLE_API_KEY,
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            fields: { username: post.username, content: post.content },
        }),
    });

const api = { retrievePosts, createPost };

export default api;
