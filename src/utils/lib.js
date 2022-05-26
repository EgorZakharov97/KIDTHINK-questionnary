export function getSlug() {
    const params = window.location.href.replaceAll('/', ' ').trim().split(' ');
    const slug = params[params.length-1];
    return slug;
}