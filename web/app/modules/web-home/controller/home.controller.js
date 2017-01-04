exports.home = {
    handler: function (request, reply) {
        // request.log('info','ddd');
        const pageClass = 'page-home';
        let meta = {
            title: 'Home',
            description: ''
        }
        return reply.view('web-home/view/default',{meta: meta, pageClass: pageClass});
    },
}