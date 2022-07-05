import Airtable from 'airtable';

const TABLE_NAME = 'posts';

const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const retrievePosts = () =>
    base(TABLE_NAME).select({
        view: 'Grid view',
        pageSize: 10,
    });

const search = searchTerm =>
    base(TABLE_NAME).select({
        view: 'Grid view',
        filterByFormula: `SEARCH('${searchTerm.toLowerCase()}', {content})`,
        pageSize: 10,
    });

const createPost = post => base(TABLE_NAME).create([{ fields: post }]);

const api = { retrievePosts, search, createPost };

export default api;
