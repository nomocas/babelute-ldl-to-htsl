import htmlLexicon from 'htsl-lexicon';

export default htmlLexicon.createDialect('bbl-dl-to-html')
	.addCompounds((h) => {
		return {
			lexicon(name, babelute) {
				return this.div(
					h.class('lexicon')
					.h1(name),
					babelute
				);
			},
			atom(name, babelute) {
				return this.div(
					h.class('atom')
					.h2(name),
					babelute
				);
			},
			compound(name, babelute) {
				return this.div(
					h.class('compound')
					.h1(name),
					babelute
				);
			},
			description(text) {
				return this.div(
					h.class('description')
					.text(text)
				);
			},
			argument(name, babelute) {
				return this.div(
					h.class('argument')
					.h3(name),
					babelute
				);
			},
			method(func) {
				return this.div(
					h.class('method')
					.text(func + '')
				);
			}
		};
	});

