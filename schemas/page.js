export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'cv',
            title: 'CV',
            type: 'file'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'blockContent'
        }
    ]
}