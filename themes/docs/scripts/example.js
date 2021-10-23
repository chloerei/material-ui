var util = require('hexo-util')

hexo.extend.tag.register('example', function(args, content){
  return `
    <div class="example ${args.join(' ')}">
      ${content}
    </div>
    ${util.highlight(content, { gutter: false, wrap: false, lang: 'html', hljs: true })}
  `
}, {ends: true})
