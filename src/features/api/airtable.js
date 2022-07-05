import Airtable from 'airtable';

const TABLE_NAME = 'posts';
const PAGE_SIZE = 3;

const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const retrievePosts = () =>
    base(TABLE_NAME).select({
        view: 'Grid view',
        pageSize: PAGE_SIZE,
        sort: [{ field: 'content', direction: 'desc' }],
    });

const search = searchTerm =>
    base(TABLE_NAME).select({
        view: 'Grid view',
        filterByFormula: `SEARCH('${searchTerm.toLowerCase()}', {content})`,
        pageSize: PAGE_SIZE,
    });

const createPost = post =>
    base(TABLE_NAME).create([
        { fields: { username: post.username, content: post.content } },
    ]);

const api = { retrievePosts, search, createPost };

export default api;
