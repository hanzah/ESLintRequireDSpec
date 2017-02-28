module.exports.rules = {
  'data-spec': context => ({
    JSXElement: (node) => {
			if(node.parent.type === 'ReturnStatement') {
				names = node.openingElement.attributes.map((attr) => {
					return attr.name ? attr.name.name : ''
				})
				if(names.indexOf('data-spec') > -1) return
      	context.report(node, 'has to have data-spec');
			}
    }
  })
};
