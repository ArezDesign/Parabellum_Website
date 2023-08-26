import rss from '@astrojs/rss';

export function get(context) {
  return rss({
    title: 'Parabellum',
    description: 'Parabellum news and changelog',
    site: context.site,
    items: [],
    customData: `<language>en-us</language>`,
  });
}